import add from './add.js';
import minus from './minus.js';

// const a = 10;
// const b = 20;

// console.log(add(a,b));
// console.log(minus(a,b))

//Q-1 class화 하기
class calculator{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }

  getAdd(){
    return this.a+this.b;
  }

  getMinus(){
    return this.a-this.b;
  }
}

const test = new calculator(10,20);

console.log(test.getAdd());
console.log(test.getMinus());

// Q-2
// class 에서 작성될 메서드는 모두 '정수'로 된 두 개의 인자를 받아서 겨로가를 반환하게끔 제한하려면 어떤 helper function을 사용해야 할까요?
// Number.isInteger를 사용하면 됩니다. 이 함수를 사용하면 typeof를 사용하지 않고 정수인지 판별할 수 있습니다.
// Number.isInteger를 사용하지 않고 typeof로 형을 확인 하면 구현할 수 있습니다.

