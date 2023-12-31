import db from "../config/db.js";
import * as q from "./queries/materialQueries.js";

class mtrMod {

  static addMaterial(data) {
    let array = [
      data["courseID"],
      data["materialID"],
      data["name"],
      data["link"],
      data["courseTitle"],
      data["author"],
      data["publisher"],
      data["publishYear"],
    ];
    return db.execute(q.addMaterial, array);
  }

  static getMaterials(data) {
    let array = [];
    for(let i = 0; i < data["mode"].length; i++){
      array.push(data["q"] + "%");
    }
    return db.query(q.getMaterial(data["mode"]), array);
  }
  static updateMaterial(id, data) {
    let array = [
      data["courseID"],
      data["materialID"],
      data["name"],
      data["link"],
      data["courseTitle"],
      data["author"],
      data["publisher"],
      data["publishYear"],
      id
    ];
    return db.execute(q.updateMaterial, array);
  }
  static deleteMaterial(data) {
    let array = [data];
    return db.execute(q.deleteMaterial, array);
  }
}

export default mtrMod;
