
// console.log("안녕");
// const os = require("os");
// console.log(os.platform(), os.hostname());
// const conf = require("nconf")
// console.log(conf.env());
// console.log(conf.get("OS"));

/* 콜백 => 함수 처리 */
// function 이름(a){
//   console.log(1);
//   if(a) return 3;
//   else return 2;
//  return 3; //정지, 바깥쪽에 전달
  // console.log(2);

/*
const 이름 = function(){
  console.log(1);
  return 3;
  console.log(2);
}
console.log(이름, 이름()); //1 [Function: 이름] 3
*/

function 대행(함수){
  함수();
}
대행(이름);
