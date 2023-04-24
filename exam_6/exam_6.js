let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array){
  // basic 객체의 children 속성이 null 데이터타입이 할당되어있는지를 판별하고 null 데이터타입이 할당되어있으면 매개변수를 각각 할당한다.
  for (let i in object){
    if(object[i].children === null){
      object[i].children = array
      console.log(object[i].children)
    }
  }
  let value = [];
  // header, main, footer HTML 태그를 생성하는 로직으로 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/펀집하시오.
  const a = [];
  const type = []
  const id = []
  for(let i in object){
    a.push(i);
    id.push(object[i].id)
    type.push(object[i].type) 

  }
  // console.log(a)
  // console.log(id)
  // console.log(type)
  for(let i = 0; i < type.length; i++){
    value.push(`<${type[i]} id="${id[i]}">${array[i]}</${type[i]}>`);
  }
  return value;
}

console.log(exampleOne(basicData, elementData))