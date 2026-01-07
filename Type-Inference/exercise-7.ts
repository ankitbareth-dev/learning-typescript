export {};

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello TypeScript");

//when a function is marked void as its return type so we can not return anything from the fuction typescript will complain and it helps us to not returning value acsidently to crash our app
//function wrongVoid(): void {
//  return "hello";
//}
