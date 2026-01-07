function wrapInArray(value) {
  return [value];
}

const num = wrapInArray(5);
num.push("ankit");

console.log(num);
