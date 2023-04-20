function exampleOne(first, second, dataType) {
  if (typeof (first) !== dataType && typeof (second) !== dataType) {
    return new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`);
  }
}

function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isExampleTwo(first, second) {

  // exampleOne() 함수를 호출하여 타입겁사를 따로 합니다.
  // 타입검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치합니다.
  exampleOne(first, second, "number");

  let booleanResult;

  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }


  if (typeof (booleanResult) === 'boolean') {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴 하지 못했습니다");
  }
}

let basicData = [4, 6, 23, 5, 94, 35, 44, 66];

function exampleThree(array, functionOne, functionTwo) {
  // 매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수 여야 함
  // 매개변수 array의 모든 원소는 숫자 정수여야 함
  // 매개변수 array의 배열 길이(length)는 짝수여야 함, 홀수라면 10을 추가하여 짝수로 만듦

  // if (typeof (functionOne) === "function" && typeof (functionTwo) === "function") {
  //   console.log("두 인자 모두 함수입니다.")
  // } else {
  //   return new Error("두 인자 모두 함수로 설정하세요")
  // }
  exampleOne(functionOne,functionTwo);

  if (typeof (array) === "object") {
    console.log("인자는 배열 입니다.")
    for (let i of array) {
      if (typeof (i) === "number") {
        console.log("인자는 정수 입니다");
        // if (array.length % 2 === 0) {
        //   console.log("배열의 길이는 짝수입니다.")
        // } else if (array.length % 2 === 1) {
        //   array.length++;
        // }
        if (arrayLengthEven(array) === true) {
          console.log("배열의 길이는 짝수입니다.")
        } else {
          array.length++;
        }
      } else {
        return new Error("인자를 정수로 설정하세요")
      }
    }
  } else {
    return new Error("인자를 배열로 설정하세요");
  }

  let arrayResult = [[null, null], [null, null], [null, null], [null, null]];

  let divide = [];
  for (let i = 0; i < basicData.length; i += 2) {
    if (basicData[i] < basicData[i + 1]) {
      divide.push([basicData[i], basicData[i + 1]])
    } else if (basicData[i] > basicData[i + 1]) {
      divide.push([basicData[i + 1], basicData[i]])

    }
  }
  arrayResult = divide;
  // 매개변수 array는 배열의 순서 한쌍씩 값의 크기를 비교하여 비교한 작은 값은 arrayResult의 원소배열의 0번째
  // 큰 값은 arrayResult의 원소배열의 1번째에 넣어준다.

  return arrayResult;
}

console.log(exampleThree(basicData, exampleOne(), isExampleTwo()));
// Q 위의 콘솔을 확인하여
// 함수 exampleThree()의 리턴값을 통해 재조립된 배열을 만드시오.