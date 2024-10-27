"use strict";
var _a, _b;
let sales = 123456789; //  without annoation is also acceptable
let course = "TypeScript";
let is_published = true;
let level; //  it will assume as if its any worst thing <dont use any>
level = 1;
level = "String";
function render(document) {
    console.log(document);
}
/*  javascript array elements can be of different type
    we can restrict them here
*/
let numbers = [1, 2, 2];
numbers.forEach((n) => n.toString); // compilation friendly compiler know whats its type
let user = [1, "tanmay"];
let mySize = 2 /* Size.Small */;
console.log(5 /* Size.Large */);
// Function in TypeScript
function calculateTax(income, taxYear) {
    if (income < 5000)
        return income * 1.2;
    // javascript return by default undefined
    return 1.5 * income * (taxYear || 2020);
}
calculateTax(1000, 10);
//object growing is stopped in typescript
let emp = {
    id: 1,
    name: "Tanmay",
    retire: (date) => {
        console.log(date);
    },
};
// union and narrowing
function mass(weight) {
    // this is union thing
    if (typeof weight === "string") {
        //  this is narrowing
        console.log(weight);
        return 0;
    }
    else {
        console.log("1kg");
        return 1;
    }
}
mass("2kg");
let textBox = {
    resize: () => {
        console.log("hye");
    },
    drag: () => {
        console.log("drag");
    },
};
let quantity = 100;
// nullable  type
function greet(name) {
    if (!name) {
        console.log("ola");
        return;
    }
    console.log(name.toLowerCase());
}
greet(null); // else it will give error
function getCustomer(id) {
    return id == 0 ? null : { date: new Date() };
}
let customer = (_b = (_a = getCustomer(1)) === null || _a === void 0 ? void 0 : _a.date) === null || _b === void 0 ? void 0 : _b.getFullYear; //  optional chaining if not present it will result in undefined
let arrayelement = [1, 2, 3];
console.log(arrayelement === null || arrayelement === void 0 ? void 0 : arrayelement[4]);
//# sourceMappingURL=index.js.map