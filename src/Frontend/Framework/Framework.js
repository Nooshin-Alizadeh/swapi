import { isNumber } from "lodash";

class Framework {
  static generate_uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var uuid = (Math.random() * 16) | 0,
          v = c == "x" ? uuid : (uuid & 0x3) | 0x8;
        return uuid.toString(16);
      }
    );
  }
  static getStringOfDate(edited) {
    return (
      edited.getFullYear() + "-" + edited.getMonth() + "-" + edited.getDate()
    );
  }

  static isDate(date) {
    let tonumber = Number(date);
    let isNum = isNumber(tonumber);
    if (!isNaN(tonumber) && isNum) return false;
    let check1 = new Date(date) !== "Invalid Date";
    let check2 = !isNaN(new Date(date));
    return check1 && check2;
  }
}
export default Framework;
