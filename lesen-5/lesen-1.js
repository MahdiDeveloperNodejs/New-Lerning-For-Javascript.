//! Truthy And Falsy
console.log(!!5);
console.log(!!5);
console.log(!!0);
console.log(!!"");
console.log(!!false, !!true, !!null, !!undefined);
console.log(!!0.0);
console.log(!!0n);
console.log(!!NaN);
console.log(!!{}, !![]);
console.log(
  "/////////////////////////////عملگر های منطقی/////////////////////////////////////////////////////////////////////////////////////",
);
//? //////////////////////////عملگر های منطقی//////////////////////////////////

console.log(true && 0 && "mahdi" && false);
let userAge = 11;
let User = 15;

if (true && 1 && userAge < User) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

if (false || 1 || userAge < User) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
