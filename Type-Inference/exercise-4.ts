export {};

interface User {
  name: string;
  age: number;
}
const user: User = {
  name: "Ankit",
  age: 25,
};
//in that i understand how interface protects object structure for example if I try

//const user: User = {
//  name: 25,
//  age: 25,
//};
//type script says Type 'number' is not assignable to type 'string'.
//similarly if I try

//const user: User = {
//  name: "ankit",
//  isLoggedIn: true,
//};
// tyepscript syas 'isLoggedIn' does not exist in type 'User'
