//! switch_case

const value = "mahdi"

switch (value) {
    case !"mahdi":
        console.log("ali yores");
        break;
    case "ali":
        console.log("yoring formater");
        break;
    default:
        console.log("id vared konide");
        break;
}
// /// / // // / / / @/ / / / / / / / ////////////////////////////
//? Ternery Operator - Nulish Operator

let User = "MahdiZare", password = "09195021158";
let isTestUser = User == "MahdiZare" && password == "09195021158"
const model = isTestUser ? true : false
console.log(model);
//Nulish
const user = 1
console.log(user ?? "ridi");