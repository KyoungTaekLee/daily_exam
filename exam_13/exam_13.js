// 1번 적용

// function exampleOne(numberValue, callback) {
//   function integerCheck(data, callback) {
//     if (Number.isInteger(data) === true) {
//       callback(null, data);
//     } else {
//       callback(new Error('이 함수는 정수가 필요합니다'));
//     }
//   }

//   function innerOne(one, callback) {
//     callback(null, one + 1);
//   }

//   function innerTwo(two, callback) {
//     callback(null, two + 2);
//   }

//   function innerThree(three, callback) {
//     callback(null, three + 3);
//   }

//   function innerFour(four, callback) {
//     callback(null, four + 4);
//   }

//   integerCheck(numberValue, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       innerOne(data, (err, data) => {
//         if (err) {
//           callback(err);
//         } else {
//           innerTwo(data, (err, data) => {
//             if (err) {
//               callback(err);
//             } else {
//               innerThree(data, (err, data) => {
//                 if (err) {
//                   callback(err);
//                 } else {
//                   innerFour(data, (err, data) => {
//                     if (err) {
//                       callback(err);
//                     } else {
//                       callback(null, data);
//                     }
//                   });
//                 }
//               });
//             }
//           });
//         }
//       });
//     }
//   });
// }

// exampleOne(10, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result); // 20 출력
//   }
// });

// 2,3번 함께 적용
function exampleOne(numberValue) {
  function integerCheck(data) {
    return new Promise((resolve, reject) => {
      if (Number.isInteger(data) === true) {
        resolve(data);
      } else {
        reject(new Error('이 함수는 정수가 필요합니다'));
      }
    });
  }

  function innerOne(one) {
    return new Promise((resolve, reject) => {
      resolve(one + 1);
    }
    )
  }

  function innerTwo(two) {
    return new Promise((resolve, reject) => {
      resolve(two + 2);
    }
    )
  }

  function innerThree(three) {
    return new Promise((resolve, reject) => {
      resolve(three + 3);
    }
    )
  }

  function innerFour(four) {
    return new Promise((resolve, reject) => {
      resolve(four + 4);
    }
    )
  }

  return integerCheck(numberValue)
    .then(innerOne)
    .then(innerTwo)
    .then(innerThree)
    .then(innerFour);
}

async function asyncExampleOne(numberValue) {
  try {
    const result = await exampleOne(numberValue);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

asyncExampleOne(10);