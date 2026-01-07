export {};

interface User {
  name: string;
  id: number;
}

function deleteUser(user: User) {
  console.log(user.name);
}

deleteUser({
  name: "Ankit",
  id: 1,
});

// here typescript helps me to avoid passing the wrong data in functions so functions can run as expeted no run time crashes
//deleteUser({
//  username: "Ankit",
//  id: 1,
//});
//deleteUser(58)
