/* 
API- Application Programming Interface
fetch API- The fetch API provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource(data).
*/

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response); //JSON format
  let data = await response.json();
  factPara.innerText = data[0].text;
};

//Same code using Promise chaining
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[2].text;
//     });
// }

btn.addEventListener("click", getFacts);

/*
XML- Extensible Markup Language
AJAX- Asynchronous JS and XML.
JSON- JavaScript Object Notation
json() method- returns a second promise that resolves with the result of parsing 
the response body text as JSON. (Input is JSON, output is JS object)
*/
