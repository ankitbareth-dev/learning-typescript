export {};
function wrapInArray(value: string | number) {
  return [value];
}

const num = wrapInArray(5);
num.push("ankit");

function wrapInArrayWithTypes<T>(value: T): T[] {
  return [value];
}

const result = wrapInArrayWithTypes(15);
//result.push("ankit") here it will give error because the type of results value is number so passing string is invalid
