console.log("test5");
const fs = require("fs");
//console.log(fs);
var data = fs.readFileSync("./app/test2.js");
var dataStr = data.toString();
console.log(dataStr);
//console.log(JSON.parse(dataStr).name);
//console.log(dataStr.substring(dataStr.indexOf("=") + 2, dataStr.lastIndexOf("}")));
console.log(JSON.parse(dataStr.substring(dataStr.indexOf("=") + 2, dataStr.lastIndexOf("}"))));
