import inquirer from "inquirer";

function oddElevator(floorNumber) {
  if ((floorNumber % 2) === 1 || floorNumber === 1 || floorNumber === -1) {
    console.log("홀수 전용 엘리베이터")
  } else {
    process.exit()
  }
}

function evenElevator(floorNumber) {
  if ((floorNumber % 2) === 0 || floorNumber === 1 || floorNumber === -1) {
    console.log("짝수 전용 엘리베이터")
  } else {
    process.exit()
  }
}

// 홀수 전용 짝수 전용 엘리베이터 두개가 마련되어 있지만, 예외가 발생한다.
// 짝수 엘리베이터는 1층도 가능하게 설계되어있다.
// 호수 엘리베이터는 10층도 가능하게 설계되어있다.
// 짝수 홀수 엘리베이터 둘다 지하일층 -1 까지 가능하게 설계되어있다.

// ESM 모듈 방식으로 사용가능한 npm install inquirer 모듈을 설치하여 지하1층 부터 10층까지의 숫자를 입력할 수 있는 인터페이스를 제작한다.
// "문을 열겠습니다" 라는 문구가 나오게 한다.
// 1초뒤에 "n층에 도착하였습니다" 라는 문구가 나오게 한다.
// "문을 닫습니다" 라는 문구가 나오게 한다.

async function elevator(floorNumber) {
  if (floorNumber < -1 || floorNumber > 10) {
    console.error("잘못된 층수")
  } else {

    console.log("문을 열겠습니다")
    await wait(1000);
    console.log(floorNumber + "층에 도착하였습니다.")
    console.log("문을 닫겠습니다.")
  }
}

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  })
}

inquirer
  .prompt([
    {
      type: 'list',
      name: 'elevatorType',
      message: '엘리베이터를 고르시오',
      choices: ['짝수 전용', '홀수 전용']
    },
    {

      type: 'number',
      name: 'floor',
      message: '몇 층으로 가시겠습니까?'
    }
  ])
  .then(function (ans) {
    if (ans.elevatorType === '짝수 전용') {
      evenElevator(ans.floor);
    } else if (ans.elevatorType === '홀수 전용') {
      oddElevator(ans.floor)
    }
    elevator(ans.floor)
  })
 
