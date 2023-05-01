example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]]
function flatten(data) {
  const output = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (Array.isArray(item)) {
      output.push(...flatten(item))
    } 
    else {
      output.push(item)
    }
  }
  return output;
}

console.log(flatten(example))