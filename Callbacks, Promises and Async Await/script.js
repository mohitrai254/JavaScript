const datas = [
  { name: "Aman", Profession: "Software developer" },
  { name: "Mohit", Profession: "Software developer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name} - ${data.Profession}</li>`;
    });
    document.body.innerHTML = output;
  }, 3000);
}

// getDatas();

//Callback
// function createData(newData, callback) {
//   setTimeout(() => {
//     datas.push(newData);
//     callback();
//   }, 2000);
// }
// createData({ name: "Robert", Profession: "Software developer" }, getDatas);

//Promises
// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.push(newData);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Some error occured");
//       }
//     }, 2000);
//   });
// }
// createData({ name: "Robert", Profession: "Software developer" })
//   .then(getDatas)
//   .catch((err) => console.log(err));

//Async await

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Some error occured");
      }
    }, 2000);
  });
}

async function start() {
  await createData({ name: "Robert", Profession: "Software developer" });
  getDatas();
}
start();
