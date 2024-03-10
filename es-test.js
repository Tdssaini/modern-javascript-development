let x = 10;
const PI = 3.14;

const [a,b] = [1,2];
console.log(a,b);

const { firstName, lastName } = { firstName: "John", lastName: "Doe" };
console.log(firstName,lastName);

const { firstName : userFirstName, lastName : userLastName } = { firstName: "John", lastName: "Doe" };
console.log(userFirstName,userLastName);

const username = "World";
const greeting = `Hello, ${username}!`;
console.log(greeting);

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); 

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3); // Returns: 6

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const cat = new Animal("Cat");
cat.speak(); // Outputs: Cat makes a sound.

const myMap = new Map();
myMap.set('key', 'value');
console.log(myMap.get('key')); // Outputs: value

// Set
const mySet = new Set([1, 2, 3, 4, 5]);

const person = { name: 'John' };
person.name ??= 'User 1';
console.log(person.name);
// output: John
person.age ??= 18;
console.log(person.age);
// output: 18

let product = { stocks: 10 };
product.stocks &&= 20;
console.log(product.stocks);
// output: 20
product.exp &&= '12/31/2021';
console.log(product.exp);
// output: undefined

product = {
  stocks: 0,
  exp: '12/31/2021'
};
product.stocks ||= 10;
console.log(product.stocks);
// output: 10
product.exp ||= '01/31/2022';
console.log(product.exp);
// output: 12/31/2021

let billion = 1_000_000_000;
console.log(billion); //output: 1000000000

class Auth {
  #getToken() {
   return "12345678";
  }
  isAuth() {
   return this.#getToken();
  }
}
const auth = new Auth();
console.log(auth.isAuth()); //output: 12345678
console.log(auth.getToken()); //output: auth.getToken is not a function

