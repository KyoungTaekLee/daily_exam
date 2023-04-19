let basicData = {
  header: {},
  main: {},
  footer: {}
}

let fromJsonData = {
  header: {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc"
    }
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333"
    }
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666"
    }
  }
}

function exampleOne(basicData, fromJsonData) {
  let value = "";
  // 아래의 호출부를 참고하여, 지역변수 value에
  // 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.
  return value;
}

// 특정 HTML 요소에 값을 넣는 것을 가정한다.
const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);

// 위의 fromJsonData과 같은 객체나 JSON을 생성하기 위한 생성자 함수, 클래스를 작성한다.
// setter 기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록 안정성을 확보한다.

class ExampleTwo {
  constructor(headerContent, width, height, backgroundColor) {
    this._header = {
      content: headerContent,
      style: {
        width: width,
        height: height,
        backgroundColor: backgroundColor
      }
    }
  }
  get headerContent() {
    return this._header
  }
  set headerContent(newHeaderContent) {
    if (typeof newHeaderContent === "string") {
      this._header.content = newHeaderContent;
    }else{
      console.error("문자가 아닙니다!");
    }
  }

  get width(){
    return this.width;
  }
  set width(newWidth){
    if(typeof newWidth ==="string"){
      this.width = newWidth;
    }else{
      console.error("문자가 아닙니다!")
    }
  }

  get height(){
    return this.height;
  }
  set height(newHeight){
    if(typeof newHeight ==="string"){
      this.height = newHeight;
    }else{
      console.error("문자가 아닙니다!")
    }
  }

  get backgroundColor(){
    return this.backgroundColor;
  }
  set backgroundColor(newBackGroundColor){
    if(typeof newBackGroundColor ==="string"){
      this.backgroundColor = newBackGroundColor;
    }else{
      console.error("문자가 아닙니다!")
    }
  }
}

const a = new ExampleTwo(1,100,"100vh","red");
console.log(a);
