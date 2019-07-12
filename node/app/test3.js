console.log("test3");
//객체(자바의 map과 비슷), 배열 (자바의 list와 비슷) 둘 다 컬렉션
var obj = {이름: "구디", 직원수: 1};
console.log(obj, obj.이름, obj.직원수);

var obj2 = {이름: "가산", 직원수: 5000};

const 모듈 = {
  웃음 : function(){
  console.log("^.^");
  }
}

var arr = [];
arr[0] = obj;
arr[1] = obj2;
arr[2] = 모듈;
console.log(arr);
