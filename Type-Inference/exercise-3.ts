const user = {
  name: "Ankit",
  age: 24,
};
//user.name = 12 here i did not described the type of user object but typescript infer the type of its properties by the value i assigned so this will give me the error that type string is not assignable to type number and its not about the values even here type scripts helps when i try to access the not defined property for example user.isLoggedIn = false;  Property 'isLoggedIn' does not exist on type '{ name: string; age: number; }'
