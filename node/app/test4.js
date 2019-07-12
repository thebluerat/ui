console.log("test4");
var url = require('url');
//console.log(url);
var urlStr = "https://www.npmjs.com/search?q=url";
var parseUrl = url.parse(urlStr);
//console.log(parseUrl, parseUrl.search);

console.log(parseUrl.query);
//rollollallal = 롤롤랄랄 ♬

/*
var param = parseUrl.query.split("=");
console.log(param);
var params = {};
params[param[0]] = param[1];
console.log(params);
*/
const qs = require("querystring");
//console.log(qs);
var params = qs.parse(parseUrl.query)
console.log(params);
