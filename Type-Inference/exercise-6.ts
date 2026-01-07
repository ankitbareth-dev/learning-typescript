export {};

interface User {
  name: string;
  id: number;
}

function getUser(): User {
  return {
    name: "Ankit",
    id: 2,
  };
}

const user = getUser();
console.log(user.name);

// here i understood that if i mentioned the return type in function declaration that this fun must
//return the value where it should be an obj containing the properties of user interface and its type other wise typescript will throw an error and this will prevent my code to get wrong values
//function getBrokenUser(): User {
//  return {
//   name: "Ankit",
// };
//}
