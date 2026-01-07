export {};

let valueAny: any;
let valueUnknown: unknown;
valueAny = "hello";
valueUnknown = "ankit";

valueAny.toUpperCase();
valueAny();
valueAny.length;
valueAny + 10;

//valueUnknown.toUpperCase();
//valueUnknown();
//valueUnknown.length;
//valueUnknown + 10;

if (typeof valueUnknown === "string") {
  valueUnknown.toUpperCase();
}
//here i understood when to use any or when to use unknown and any and what are the side effects
//use-case i must use any when i dont care about type safty and use unknown when i am not sure what is the type
//and the side-effect of using any is i can perform any operation on that but when using type as unkown typescrpts still help us to avoid bugs
