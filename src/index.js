import express from "express";
import dotenv from "dotenv";

//import routers
import router from "../routes/api/postRoutes.js";
import accountRouter from "../routes/api/accountRoutes.js";
import materialRouter from "../routes/api/materialRoutes.js";
import scheduleRouter from "../routes/api/scheduleRoutes.js";
import sectionRouter from "../routes/api/sectionRoutes.js";
import registerRouter from "../routes/api/registerRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

//middleware
app.use(express.json());
app.use("/public", express.static("./public"));

//use routers
app.use("/posts", router);   //localhost:8000/posts
app.use("/schedules", scheduleRouter);
app.use("/accounts", accountRouter);
app.use("/materials", materialRouter);
app.use("/sections", sectionRouter);
app.use("/register", registerRouter);

//Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

app.get("/", (req, res) => {
  // res.json("hello this is the backend ");
  res.redirect("http://localhost:8000/public/main.html");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.json);
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
