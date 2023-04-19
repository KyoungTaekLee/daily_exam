function examOne(first, second) {
  if (typeof (first) === "string" || typeof (second) === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
  } else {
    return first + second;
  }
}

function examTwo(first, second, third) {
  if (typeof (first) === "number" && typeof (second) === "number" && typeof (third) === "number") {
    return first * second * third;
  } else {
    console.error();
  }
}

function examThree(str) {
  if (typeof (str) === "string") {
    let count = 0;
    for (let num of str) {
      count++;
    }
    return "길이의 값 : " + count;
  }
}

function examFour(array) {
  if (Array.isArray(array) === true) {
    let a = array[0];
    for (let i = 1; i <= array.length; i++) {
      if (a < array[i]) {
        a = a;
      } else {
        a = array[i];
      }
      return a;
    }
  }else{
    console.error();
  }
}

function examFive(array){
  if(Array.isArray(array) === true){
    let sum = 0;
    array.forEach(element => {
      sum += element;
    });
    return sum;
  }
}

console.log(examOne(2, 3))
console.log(examTwo(2, 3, 4))
console.log(examThree("hello"))
console.log(examFour([3, 1, 4, 2]))
console.log(examFive([1, 2, 3]))