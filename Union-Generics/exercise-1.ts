type Status = "loading" | "success" | "error";
function printStatus(status: Status) {
  console.log(status);
}

printStatus("success");
//printStatus("done") will thorw error because we have defined union or collaction of same typed values
type Num = 2 | 4 | 6 | 8 | 10;
function printEven(num: Num) {
  console.log(num);
}
printEven(2);
