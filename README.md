# Week 1 - Hello Typescript

Week 1 codealongs, excersies and workshop.

## Lesson example

- [Presentation Teori Vecka 1](https://docs.google.com/presentation/d/196_YOu_yrTxDcgs9t7szT6vj-2qPI0fs4Y3I0zWEbCk/edit?usp=sharing)
- [Lesson code](./lesson-code/)
- [Card Game](./card-game/)

## Exercises

**1.** Create a TypeScript program that defines variables of the following types with example values: `string`, `number`, `boolean`, and `any`. Print each variable to the console.

// Solution for Exercise 1
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myAny: any = { message: "I can be anything" };

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Any:", myAny);

**2.** Create a _Type_ of `Product` containing the following keys: `id`, `name`, `description` and `price`.

// Solution for Exercise 2
type Product = {
id: number;
name: string;
description: string;
price: number;
};

// Example usage
let exampleProduct: Product = {
id: 1,
name: "Laptop",
description: "A high-end laptop",
price: 1500,
};
console.log(exampleProduct);

**3.** Create a _Type_ of `Profile` containing the following keys: `firstName`, `lastName`, `email` and `tel`.

// Solution for Exercise 3
type Profile = {
firstName: string;
lastName: string;
email: string;
tel: string;
};

// Example usage
let myProfile: Profile = {
firstName: "John",
lastName: "Doe",
email: "john.doe@example.com",
tel: "123-456-7890",
};
console.log(myProfile);

**4.** Define an _array_ of numbers and calculate the sum of its elements. Use TypeScript’s array type syntax.

// Solution for Exercise 4
let numbersArray: number[] = [10, 20, 30, 40, 50];
let sum: number = numbersArray.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

**5.** In the `Profile` type, add a `address` key, containing a `Address` type containing the following keys: `street`, `postNr`, `city`.

// Solution for Exercise 5
type Address = {
street: string;
postNr: string;
city: string;
};

type ProfileWithAddress = {
firstName: string;
lastName: string;
email: string;
tel: string;
address: Address;
};

// Example usage
let profileWithAddress: ProfileWithAddress = {
firstName: "John",
lastName: "Doe",
email: "john.doe@example.com",
tel: "123-456-7890",
address: {
street: "Main St",
postNr: "12345",
city: "Metropolis",
},
};
console.log(profileWithAddress);

**6.** In the `Profile` type, add a `role` key, wich can only allow following roles: `guest`, `user`, `admin` and `superadmin`.

// Solution for Exercise 6
type Role = "guest" | "user" | "admin" | "superadmin";

type ProfileWithRole = {
firstName: string;
lastName: string;
email: string;
tel: string;
role: Role;
};

// Example usage
let profileWithRole: ProfileWithRole = {
firstName: "Jane",
lastName: "Smith",
email: "jane.smith@example.com",
tel: "123-456-7890",
role: "admin",
};
console.log(profileWithRole);

**7.** Define an _array_ that allows only `Product` type.

// Solution for Exercise 7
let productsArray: Product[] = [
{ id: 1, name: "Phone", description: "Smartphone", price: 999 },
{ id: 2, name: "Tablet", description: "Large screen tablet", price: 699 },
];
console.log(productsArray);

**8.** Create a _Type_ of `Book` containing the following keys: `title`, `author`, `publishedYear`, `publisher`, `numOfPage`. The `author` key should be a `Author` type containing the following keys: `firstName`, `lastName`.

// Solution for Exercise 8
type Author = {
firstName: string;
lastName: string;
};

type Book = {
title: string;
author: Author;
publishedYear: number;
publisher: string;
numOfPage: number;
};

// Example usage
let exampleBook: Book = {
title: "TypeScript in Depth",
author: { firstName: "John", lastName: "Doe" },
publishedYear: 2021,
publisher: "TechBooks Publishing",
numOfPage: 400,
};
console.log(exampleBook);

**9.** Define an _array_ that allows both `Product` and `Book` types.

// Solution for Exercise 9
let mixedArray: (Product | Book)[] = [
{ id: 1, name: "Headphones", description: "Noise-cancelling", price: 299 },
{
title: "JavaScript: The Good Parts",
author: { firstName: "Douglas", lastName: "Crockford" },
publishedYear: 2008,
publisher: "O'Reilly Media",
numOfPage: 176,
},
];
console.log(mixedArray);

**10.** Write a small TS-program that has a `button` and a `h1`. When you click the `button`, a random number between 1-100 should appear in the `h1`. All variables etc must be typed. Top it of with a nice super awesome (S)CSS.

// Solution for Exercise 10
document.addEventListener("DOMContentLoaded", () => {
const button = document.createElement("button");
button.textContent = "Generate Random Number";
document.body.appendChild(button);

const heading = document.createElement("h1");
heading.textContent = "Random Number: 0";
document.body.appendChild(heading);

button.addEventListener("click", () => {
const randomNum = Math.floor(Math.random() \* 100) + 1;
heading.textContent = `Random Number: ${randomNum}`;
});
});

// SCSS for styling
/\*
button {
padding: 10px 20px;
font-size: 16px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
}

h1 {
color: #333;
font-family: Arial, sans-serif;
}
\*/

## Workshop project

```
TO BE ANNOUNCED
Ooooh, how exciting!
```

###

```sh
parcel watch index.html
```

tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "outDir": "./dist", // Specify the output directory for compiled files (optional)
    "target": "es5", // Target JavaScript version (optional)
    "module": "commonjs" // Module system (optional)
  },
  "include": [
    "./js/*.js" // Specify the folder where your JS files are located
  ]
}
```

types.ts

```ts
export type Card = {
  suits: '$spades;' | '$hearts;' | '$clubs;' | '$diams;'
  color: 'red' | 'black'
  display: any
  values: any
}
```
