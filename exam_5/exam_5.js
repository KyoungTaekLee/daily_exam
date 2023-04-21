const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 }
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" }
};

// for (let i in currency){
//   console.log(currency[i]);
// }
function exampleOne(inputPrice, currency, basicData) {
  if (inputPrice === 1000) {
    console.log(currency.thousand.name + "을 넣었습니다");
  }

  if (inputPrice === 1000) {
    let a = [];
    for (let i in basicData) {
      if (basicData[i].price === 1000) {
        a.push(basicData[i])
      }
    }
    for (let i = 0; i < a.length; i++) {
      console.log(a[i].name)
    }
  }

  // 최소값, 최대값 구하는 방법

  // let pirceArray = [];
  // for (let i in basicData) {
  //   pirceArray.push(basicData[i].price)
  // }
  // console.log(pirceArray)
  // for (let i = 0; i < pirceArray.length; i++) {
  //   if (pirceArray[0] < pirceArray[i]) {
  //     pirceArray[0] = pirceArray[i]
  //   } else if (pirceArray[0] >= pirceArray[i + 1]) {
  //     pirceArray[0]=pirceArray[0]
  //   }

  // }
  // console.log(pirceArray[0])


  // ----------------------------------------


  // price 배열 생성하는 방법

  // const Array = [];

  // for(let i in basicData){
  //   Array.push(basicData[i].price);
  // }
  // console.log(Array);

  // ----------------------------------------


  // price 배열 생성하는 방법2
  
  const priceArray = basicData.map(function (a) {
    return a.price
  }
  )
  const maxPrice = Math.max(...priceArray)
  const minPrice = Math.min(...priceArray)
  console.log(priceArray)
  // console.log(maxPrice)
  // console.log(minPrice)

  if (inputPrice < minPrice) {
    console.log("잔액이 부족합니다.")
  } else if (inputPrice > maxPrice) {
    console.log("당신은 부자입니다.")
  } else {
    console.log("평범하시네요")
  }

}

exampleOne(10000, currency, basicData);