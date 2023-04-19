let basicData = {
  count: 10,
  min: 1,
  max: 10,
  dividNumber: 5
}

function exampleOne(count, min, max) {
  let exampleArr = [];
  for (let i = 0; i < count; i++) {
    
    exampleArr.push(((Math.random() * max) + min).toFixed(2));

  }
  for(let num of exampleArr){
    num = parseFloat(num);
  }
  return exampleArr;
}

// 리턴값 변수에 저장하기
// const a = exampleOne(basicData.count, basicData.min, basicData.max);
// console.log(a);

function exampleTwo(array, dividNumber) {
  let exampleObject = {
    a: [],
    b: []
  }

  for (let num of array) {
    if(typeof(num) === "string" && Array.isArray(array) === true){
      num = parseFloat(num);
    }
    if (typeof(num) === "number" && Array.isArray(array) === true) {
      if (typeof (dividNumber) === "number") {
        if (dividNumber > num) {
          exampleObject.a.push(num);
        } else if (dividNumber < num) {
          exampleObject.b.push(num);
        }
      } else {
        console.error("숫자로 수정해주세요")
      }
    } else {
      console.error("배열과 배열 안의 값을 숫자로 바꾸세요");
    }
  }

  return exampleObject;
}

// 리턴값 변수에 저장하기
// const b = exampleTwo(a, 5);
// console.log(b);

function exampleThree(array){
  let value = 0;
  for (let num of array){
    value += num;
  }
  console.log(value)
  return value;
}

function exampleFour(object) {
  let value;
  if (Array.isArray(object) === true) {
    for (let num of object) {
      if (typeof (num) === "number") {
        value = true;
      } else {
        value = false;
      }
    }
  } else {
    console.error("object는 배열이 아니예요!")
  }
  console.log(value);
  return value;
}

function exampleFive(objectOne, objectTwo) {
  let value;
  let objectOneArray = [];
  let objectTwo_A_Array = [];
  let objectTwo_B_Array = [];
  let objectOneSum = 0;
  let objectTwo_A_Sum = 0;
  let objectTwo_B_Sum = 0;

  objectOneArray = Object.values(objectOne);
  for (let num of objectOneArray) {
    objectOneSum += num;
  }
  objectTwo_A_Array = Object.values(objectTwo.a);
  console.log(objectTwo_A_Array);
  for (let num of objectTwo_A_Array) {
    objectTwo_A_Sum += num;
  }
  objectTwo_B_Array = Object.values(objectTwo.b);
  console.log(objectTwo_B_Array);

  for (let num of objectTwo_B_Array) {
    objectTwo_B_Sum += num;
  }

  console.log(objectOneSum);
  console.log(objectTwo_A_Sum);
  console.log(objectTwo_B_Sum);

  value = objectOneSum + objectTwo_A_Sum + objectTwo_B_Sum;
  
  return value;
}

console.log(exampleFive(basicData, exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max), basicData.dividNumber)));