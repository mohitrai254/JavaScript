// Ctrl+K -> To clear console in browser
// Ctrl+R -> Chrome refresh
// Shift + ! -> To generate boilerplate code

/* HTML is linked to browser via console. 
We can connect JavaScript to HTML by using script tag.
JS will be connected to console. */

/* JS is dynamically typed i.e., we don't need to define datatype before.
Example- No need to write int a. let a is correct. 
Here a can be number, string, etc.*/

/*Variable can have $, _, alphabet, alphanumeric.
Variable can't start with a number*/

/* 
2015- ES6 (ECMA script) -> let and const are introduced.
var - can be redeclared and updated. Global scope variable.
let - can't be redeclared, but updated. Block scope variable.
const - can't be redeclared and updated. Block scope variable.
*/

fullName = "Tony Stark";
console.log(typeof fullName);
console.log("Apna College");
console.log(fullName);

x = null;
typeof null; //object

y = undefined;
console.log(x, y);

isFollow = false;
console.log(isFollow);
console.log(typeof isFollow);

const student = {
  fullName: "Rahul Kumar",
  age: 20,
  cgpa: 8.2,
  isPass: true,
};
console.log(student["age"]);
console.log(student.age);
console.log(typeof student["age"]);

// Change variables inside an object
student["age"] = student["age"] + 1;
student["name"] = "Rahul Sharma";
console.log(student["age"]);
console.log(student["name"]);

let a = "5";
let b = 5;
console.log(a == b);
console.log(a === b); // strict mode- checks data type as well
console.log(a + b);

// alert("Hello"); //alert will display a message
// prompt("Enter a number"); //prompt will show a msg and ask for a input
//Prompt is a temporary way to take a input from a user

// let num = prompt("Enter a number");
// if (num % 5 === 0) {
//   console.log(num, "is a multiple of 5");
// } else {
//   console.log("Bhakk");
// }

/* Loops
1. for
2. while
3. do while
*/

// for-of loop- used for strings and arrays
let str = "JavaScript";
let size = 0;

for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("String size is", size);

//for-in loop- used for objects and arrays
let studentDetail = {
  name: "Rahul Kumar",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};

for (let i in studentDetail) {
  console.log(i); // i return keys from object
}

for (let key in studentDetail) {
  console.log("key=", key, "value=", studentDetail[key]);
}

// Print numbers from 0 to 100
for (let num = 0; num <= 100; num++) {
  console.log(num);
}
// Print even numbers from 0 to 100
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) console.log(num);
}

//Strings
let str1 = "ApnaCollege";
console.log(str1.length);
console.log(str[5]);

//Template Literals- The phenomena is called string interpolation
let specialString = `This is a template literal`;
console.log(typeof specialString);

let obj = {
  item: "pen",
  cost: 10,
};
let output = `The cost of ${obj.item} is ${obj.cost} rupees`;
console.log(output);

//Escape characters- /n,/t
console.log("Apna\nCollege");
console.log("Apna\tCollege");
let str2 = "Apna\nCollege";
console.log(str2.length); //12
//Escape character only takes length of a single character

// String methods
str.toUpperCase(); //This will not change original string because strings are immutable in JavaScript
str.toLowerCase(); //This will not change original string because strings are immutable in JavaScript
let str3 = "   ApnaCollege    JS     ";
console.log(str3.trim()); //This will not change original string because strings are immutable in JavaScript
// trim will remove spaces before and after the string

let str4 = "0123456";
console.log(str4.slice(2, 4)); //23 (last index will not be printed)
console.log(str4.slice(1)); //Everything will be printed from current index

let str5 = str3.concat(str4);
let str6 = str3 + str4;
console.log(str5);
console.log(str6);

console.log(str4.replace("0", "a")); //only replace once i.e., first instance in string
console.log(str4.replaceAll("0", "a")); //replace everywhere in string

console.log(str4.charAt(4));

let str7 = "ILoveJS";
str[0] = "S";
console.log(str7); //ILoveJS
//Strings are immutable, if you want to change the value, create a new string
str7 = str7.replace("I", "S");
console.log(str7); //SLoveJS

//Practice Question
// let fullNameNew = prompt("Enter full name without spaces");
// let username = "@" + fullNameNew + fullNameNew.length;
// console.log(username);

//Arrays- Collection of items. We can also store items in objects.
let marks = [97, 45, 87];
console.log(marks);
console.log(marks.length); //property
// property and methods are different. method does some work. property just returns some value which is already stored.

let heroes = ["ironman", "thor", "hulk"];
console.log(heroes);
console.log(typeof heroes); //object. Array is a special type of object.

//Arrays are mutable. We can change any particular index.
heroes[2] = "shaktiman";
console.log(heroes);

//for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

//for of - preferred over for in
for (let hero of heroes) {
  console.log(hero);
  // console.log(hero.toUpperCase());
}

// Practice 1
// let sum = 0;
// let studentMarks = [85, 97, 44, 37, 76, 60];
// for (let marks of studentMarks) {
//   sum += marks;
// }
// let averageMarks = sum / studentMarks.length;
// console.log(averageMarks);

// Practice 2
let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
  prices[i] = 0.9 * prices[i];
}
console.log(prices);

// Array methods
//push- changes the original array
let foodItems = ["potato", "apple", "litchi", "tomato"];
foodItems.push("pizza", "burger");
console.log(foodItems);

//pop- returns deleted item, changes the original array
let deleted = foodItems.pop();
console.log(deleted);
console.log(foodItems);

//toString - doesn't change the original arrray
let convertToString = foodItems.toString();
console.log(typeof convertToString);

//concat
let marvelHeroes = ["ironman", "captain", "thor"];
let dcHeroes = ["batman", "superman"];
let indianHeroes = ["Shaktiman"];
let ourHeroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(ourHeroes);

//unshift - starts at the beginning
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

//shift - deletes from start and returns the deleted value
let deletedHero = marvelHeroes.shift();
console.log(deletedHero);
console.log(marvelHeroes);

//slice - does not change the original array
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1, 3)); //last index will not be included
console.log(marvelHeroes.slice(1)); // print everything from 1 to end
console.log(marvelHeroes.slice()); //returns complete array

//splice - change original array
//splice(startIndex, deleteCount, newElements)
let arr = [1, 2, 3, 4, 5, 6, 7];
//arr.splice(2, 2, 101, 102);
// arr.splice(2, 0, 101); // add element
//arr.splice(3, 1); //delete element
//arr.splice(3, 1, 101); //Replace element
console.log(arr.splice(4)); //deletes everything from index 4 and returns the deleted value
arr.splice(); //no change
console.log(arr);

//Functions
function test() {
  console.log("test");
}
test();

function myFunction(msg) {
  //parameter->input-> parameter is in function definition
  console.log(msg);
}
myFunction("I love JS"); //argument- argument is in fiunction call

function sum(x, y) {
  //x,y are local variables
  //function parameters are local variables of function. Block scope.
  s = x + y;
  return s;
  console.log("after return"); //no code will be executed after return
}
let val = sum(2, 3);
console.log(val);

//Arrow functions- part of modern JS
const arrowSum = (x, y) => {
  console.log(x + y);
};
arrowSum(4, 5);

const printHello = () => {
  console.log("hello");
};
printHello();

//Practice
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

const arrowCountVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

//Methods and functions
/*
"abc".toUpperCase();  //Method- always string is required to use this function.
Function associated with an object(or any other data structure) is a method.
*/
//Callback function- A callback is a function passed as an argument to another function.

// forEach loop in array- cannot be used for strings
//forEach does not create a new array
let arrNew = [1, 2, 3, 4, 5];

arrNew.forEach(function printVal(val) {
  console.log(val);
});

arrNew.forEach((val) => {
  console.log(val);
});

arrNew.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

/*
Higher order function/methods- Can use other functions as parameter, or returns a function
Example- forEach.
*/

let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//   console.log(num * num); //num**2;
// });
let calcSquare = (num) => {
  console.log(num * num);
};
nums.forEach(calcSquare);

//map method- similar to forEach but map creates a new array
let newMapArray = nums.map((val) => {
  return val;
});
console.log(newMapArray);

//filter method- creates a new array of elements that give true for a condition/filter.
//e.g. all even elements
let arrFilter = [1, 2, 3, 4, 5, 6, 7, 8];
let evenArr = arrFilter.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);

//reduce method- can have many values in input, but output will be one value
let arrReduce = [1, 2, 3, 4];
const outputReduce = arrReduce.reduce((prev, curr) => {
  return prev + curr;
});
console.log(outputReduce);

//To find the largest number
const largest = arrReduce.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(largest);

//Practice
let marksABC = [97, 65, 34, 99, 56];
let toppers = marksABC.filter((val) => {
  return val > 90;
});
console.log(toppers);

//Practice
// let n = prompt("Enter a number");
// let arrN = [];
// for (let i = 0; i < n; i++) {
//   arrN[i] = i + 1;
// }
// console.log(arrN);

// Find sum using reduce method
let arrSum = [1, 2, 3, 4, 5];
let sumReduce = arrSum.reduce((res, curr) => {
  return res + curr;
});
console.log(sumReduce);

/*
DOM- Document object model
Link CSS in head (using style tag)
Link JS in body (using script tag)
Elements- contains HTML code of a web page
Styles- contains CSS code
Console- JS console.log details

Window object- represents an open window in a browser.
It is browser's object (not JavaScript's) and is automatically created by browser.
It is a global object with lots of properties and methods. 
e.g- window.console.log("Hello");
window.alert("Hello");
window.prompt("Enter name")
These all are window objects, code already know even when you have not defined it.
No need to write window. everywhere.
*/

/*
We use DOM to access HTML from JavaScript, document object is created 
under window object. 
If we write script tag in head, DOM elements will not be accessible in body.
*/

//DOM Manipulation
let heading = document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let paras = document.getElementsByTagName("p");
console.dir(paras);

let firstEl = document.querySelector("p"); //first element
console.dir(firstEl);
let allEl = document.querySelectorAll("p"); // all element
console.dir(allEl);

//tagName- return tag for element nodes
//innerText- return the test content of the element and all its children
//innerHTML- returns the plain text or HTML contents in the element
//textContent- returns textual content even for hidden elements

let headingNew = document.querySelector("h1");
console.log(headingNew.textContent);

//Practice 1
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + "from Apna College";
console.log(h2.innerText);

//Practice 2
let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

let i = 1;
for (div of divs) {
  div.innerText = `new unique value ${i}`; //string interpolation
  i++;
}

//getAttribute(attr);
//setAttribute(attr, value);

//Create elements
let newBtn = document.createElement("button"); //can be anything in place of button like h1, h2, p
newBtn.innerText = "Click me";
console.log(newBtn);

//Insert elements
let divBtn = document.querySelector("div");
// divBtn.append(newBtn);  //adds at the end of node (inside)
// divBtn.prepend(newBtn); //adds at the start of node (inside)
// divBtn.before(newBtn); //adds before the node (outside)
// divBtn.after(newBtn); //adds after the node (outside)

//Delete element
let paraDelete = document.querySelector("p");
paraDelete.remove();

//Practice
let newBtnPractice = document.createElement("button");
newBtnPractice.innerText = "Click Me";
newBtnPractice.style.color = "white";
newBtnPractice.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtnPractice);

/*
Events in JS
The change in the state of an object is known as an event.
E.g., Mouse events(click, doubleclick, etc.), keyboard events(keypress, keyup, keydown),
Form events(submit, etc.), Print event, etc.
*/

let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("button 1 was clicked");
// };

let div1 = document.querySelector("div");
div1.onmouseover = () => {
  console.log("You are inside div");
};

// JS handle will have higher priority than Inline handle
// You can't handle same event multipple times, last code will overwrite above codes

// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
// };

//Event listeners- we can use it multiple times for same event
btn1.addEventListener("click", () => {
  console.log("button was clicked- handler 1");
});

btn1.addEventListener("click", () => {
  console.log("button was clicked- handler 2");
});

const handler3 = () => {
  console.log("button was clicked- handler 3");
};
btn1.addEventListener("click", handler3);
btn1.removeEventListener("click", handler3); //the callback reference should be same to remove

//Practice- toggle button for light and dark mode
let modeBtn = document.querySelector("#mode");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("body").classList.add("dark");
    // document.querySelector("body").classList.remove("light");
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    // document.querySelector("body").classList.add("light");
    // document.querySelector("body").classList.remove("dark");
  }
  console.log(currMode);
});

const studentObj = {
  fullName: "Mohit Rai", //state/property/variable
  marks: 94, //state/property/variable
  printMarks: function () {
    //method/behaviour
    console.log("marks= ", this.marks); //studentObj.marks
  },
};

//Prototype
const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};
const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("tax rate is 20%"); //if object and prototype have same method, object's method will be used.
  },
};
karanArjun.__proto__ = employee;

//Classes- Program-code template for creating objects.
class ToyotaCar {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brandName = brand; //this means the object jiske liye function call kiya jaa raha hai
  }
}
//Constructor- object ke bante he initialize kar deta hai //Object initialization
let fortuner = new ToyotaCar("fortuner", 10); //constructor
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 12); //constructor

//Inheritance- passing down properties and methods from parent class to child class
//If child and parent have same method, child's method will be used (Method overriding)
class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name); // to invoke parent class constructor
    // this.branch = branch;
  }
  work() {
    super.eat(); //to access parent class properties and methods
    console.log("build something");
  }
}

class Doctor extends Person {
  work() {
    console.log("treat patients");
  }
}
//super keyword- used to call the constructor of its parent class to access the parent's properties and methods
// let mohitObj = new Engineer("chemical engg");
let mohitObj = new Engineer("Mohit");

//Practice 1
let data = "Secret Info";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Data is ", data);
  }
}

let student1 = new User("Mohit", "test@123");
let student2 = new User("Aman", "test@123");

//Practice 2
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    data = "edited value";
  }
}
let admin1 = new Admin("admin", "admintest@gmail.com");

//Error Handling- try catch blocks
let test1 = 5;
let test2 = 6;
console.log(test1);
console.log(test2);
console.log(test1 + test2);
try {
  console.log(test1 + test3); //error
} catch (err) {
  console.log(err);
}
console.log(test1 + test2);
console.log(test1 + test2);
console.log(test1 + test2);

// async await >> promise chains >> callback hell
/*
Synchronous- means the code runs in a particular sequence of instructions
given in the program. Each instruction waits for the previous one to complete
its execution.

Asynchronous- Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which caused a delay in the UI.
Asynchronous code execution allows to execute next instructions immediately 
and does not block the flow.
*/

// function hello() {
//   console.log("hello");
// }
// setTimeout(hello, 3000);

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

//callback- a callback is a function passed as an argument to another function
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(1, 2, sum);

/*
Callback Hell- Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
Difficult to understand and manage
*/
// function getData(dataId, getNextData) {
//   //2s
//   setTimeout(() => {
//     console.log("data ", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

//callback hell
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

/*
Promises- Promise is for eventual completion of task. It is an object in JS.
It is a solution to callback hell.
resolve and reject are callbacks provided by JS.
*/
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   // resolve("success");
//   reject("some error occured");
// });

//resolve and reject are handlers which are automatically created by JS

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

//Promise chain 2
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });

//Promise chain 1 (mostly used Promise chain)
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

/*
A JS Promise object can be-
1. Pending- the result is undefined
2. Resolved- the result is a value(fulfilled)    resolve(result)
3. Rejected- the result is an error object       reject(error)
*/

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("error");
  });
};

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise fulfilled", res); //res is msg passed in resolve, here success
// });

// promise.catch((err) => {
//   console.log("rejected", err); //err is msg passed in reject, here error
// });

//Promise Chain
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching data 1");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log(res);
// });

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("success");
    }, 4000);
  });
}

// console.log("Fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log("Fetching data 2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {});
// });

// console.log("Fetching data 1");
// asyncFunc1().then((res) => {
//   console.log("Fetching data 2");
//   asyncFunc2().then((res) => {});
// });

//Async-Await
/*
async function always returns a promise.
await pauses the execution of its surrounding async function until the promise is settled.
*/

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}
async function getWeatherData() {
  await api(); //1st
  await api(); //2nd
}
// getWeatherData();

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
}
// getAllData();

//IIFE- Immediately Invoked Function Expression
//IIFE is a function that is called immediately as soon as it is defined.
(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})();
