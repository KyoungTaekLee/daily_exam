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
  console.log(exampleArr);
  return exampleArr;
}

function exampleTwo(array, dividNumber) {
  let exampleObject = {
    a: [],
    b: []
  }
  for (let num of array) {
    if (typeof (num) === "number" && Array.isArray(array) === true) {
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
  console.log(value)
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
  for (let num of objectTwo_A_Array) {
    objectTwo_A_Sum += num;
  }
  objectTwo_B_Array = Object.values(objectTwo.b);
  for (let num of objectTwo_B_Array) {
    objectTwo_B_Sum += num;
  }

  value = objectOneSum + objectTwo_A_Sum + objectTwo_B_Sum;
  
  return value;
}

console.log(exampleFive(basicData, exampleTwo([1, 2, 3, 4, 5, 6, 7, 8], basicData.dividNumber)));