import express from "express";
import sessionStorage from "node-sessionstorage";

const router = express.Router();

router.route("/").get((req, res, next) => {
  sessionStorage.removeItem('user');
  delete global.account;
  res.send("Logged out successfully")
});

export default router;
