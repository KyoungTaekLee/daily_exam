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
  basicData.header = fromJsonData.header.content
  value = basicData.header;
  return value;
}

// 특정 HTML 요소에 값을 넣는 것을 가정한다.
const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);

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
    } else {
      console.error("문자가 아닙니다!");
    }
  }

  get width() {
    return this.width;
  }
  set width(newWidth) {
    if (typeof newWidth === "string") {
      this.width = newWidth;
    } else {
      console.error("문자가 아닙니다!")
    }
  }

  get height() {
    return this.height;
  }
  set height(newHeight) {
    if (typeof newHeight === "string") {
      this.height = newHeight;
    } else {
      console.error("문자가 아닙니다!")
    }
  }

  get backgroundColor() {
    return this.backgroundColor;
  }
  set backgroundColor(newBackGroundColor) {
    if (typeof newBackGroundColor === "string") {
      this.backgroundColor = newBackGroundColor;
    } else {
      console.error("문자가 아닙니다!")
    }
  }
}

const a = new ExampleTwo(1, 100, "100vh", "red");
console.log(a);