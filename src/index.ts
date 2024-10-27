let sales = 123_456_789; //  without annoation is also acceptable
let course: string = "TypeScript";
let is_published: boolean = true;
let level; //  it will assume as if its any worst thing <dont use any>
level = 1;
level = "String";

function render(document: number) {
  console.log(document);
}

/*  javascript array elements can be of different type 
    we can restrict them here  
*/
let numbers: number[] = [1, 2, 2];

numbers.forEach((n) => n.toString); // compilation friendly compiler know whats its type

let user: [number, string] = [1, "tanmay"];

const enum Size {
  Small = 2,
  Medium = 4,
  Large,
} //  const make it more optimised
let mySize: Size = Size.Small;
console.log(Size.Large);

// Function in TypeScript
function calculateTax(income: number, taxYear?: number): number {
  if (income < 5000) return income * 1.2;
  // javascript return by default undefined
  return 1.5 * income * (taxYear || 2020);
}
calculateTax(1000, 10);

//object growing is stopped in typescript
let emp: Exmployee = {
  id: 1,
  name: "Tanmay",
  retire: (date: Date) => {
    console.log(date);
  },
};

//type alias
type Exmployee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

// union and narrowing
function mass(weight: string | number): number {
  // this is union thing
  if (typeof weight === "string") {
    //  this is narrowing
    console.log(weight);
    return 0;
  } else {
    console.log("1kg");
    return 1;
  }
}
mass("2kg");

//intersection

type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizeable;

let textBox: UiWidget = {
  resize: () => {
    console.log("hye");
  },
  drag: () => {
    console.log("drag");
  },
};

// lietaral type to restirct the values
type QuanityValue = 20 | 1000;
let quantity: 50 | 100 = 100;

// nullable  type
function greet(name: string | null) {
  if (!name) {
    console.log("ola");
    return;
  }
  console.log(name.toLowerCase());
}
greet(null); // else it will give error

// optional chaining

type BirthDate = {
  date: Date;
};
function getCustomer(id: number): BirthDate | null | undefined {
  return id == 0 ? null : { date: new Date() };
}
let customer = getCustomer(1)?.date?.getFullYear; //  optional chaining if not present it will result in undefined

let arrayelement: number[] = [1, 2, 3];
console.log(arrayelement?.[4]);

// same goes with the function assignment  for optional chaining
