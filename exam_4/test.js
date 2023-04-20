// function exampleOne(first, second, dataType) {
//   if (typeof (first) !== dataType && typeof (second) !== dataType) {
//     return new Error(`매개변수 first, second는 모두 ${datatype} 타입이어야 합니다.`);
//   }
// }

// // console.log(exampleOne(1, 2, "number"))

// function arrayLengthEven(array) {
//   if (array.length % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isExampleTwo(first, second) {

//   // exampleOne() 함수를 호출하여 타입겁사를 따로 합니다.
//   // 타입검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치합니다.
//   exampleOne(first, second,"number");

//   let booleanResult;

//   if (first < second) {
//     booleanResult = true;
//   } else {
//     booleanResult = false;
//   }


//   if (typeof (booleanResult) === 'boolean') {
//     return booleanResult;
//   } else {
//     return new Error("조건식이 boolean이 아니어서 리턴 하지 못했습니다");
//   }
// }

// console.log(isExampleTwo(1,2));
let arrayResult = [[null, null], [null, null], [null, null], [null, null]];
let basicData = [4, 6, 23, 5, 94, 35, 44, 66];
let divide = [];
for(let i = 0; i < basicData.length; i+=2){
  if(basicData[i]< basicData[i+1]){

    divide.push([basicData[i],basicData[i+1]])
  }else if(basicData[i]>basicData[i+1]){
    divide.push([basicData[i+1],basicData[i]])

  }
}
arrayResult = divide
console.log(divide)
console.log(arrayResult)