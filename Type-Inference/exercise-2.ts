export {};
let age: number;

age = 24;
//in that case i need to explicitly specify the type of variable while declaring it because typescript is not able to infer the type here because there is no assigned value at the time of declaration so it could be of any type so if I try to decalre the varibale without its type so later i can assigne any value to it like string or boolean which may lead to errors in the code so to avoid that i need to explicitly specify the type of variable while declaring it
