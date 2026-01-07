function union(value) {
    if (typeof value === "string") {
        console.log("String is passed");
    }
    else if (typeof value === "number") {
        console.log("Number is passed");
    }
}
union(52);
union("ankit");
//union(true) this will throw an error
