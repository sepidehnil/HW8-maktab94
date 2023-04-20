//soal1
// const obj = {};
// const addProperty = function (key) {
//   return function (name) {
//     this[key] = name;
//   };
// };
// const nameSetter = addProperty("name");
// nameSetter.call(obj, "jack");
// console.log(obj);

//soal2
// function callback(create) {
//   create.textContent = "This is a paragraph";
// }
// function elemCreator(elem, callback) {
//   const create = document.createElement(elem);
//   document.body.appendChild(create);
//   callback(create);
// }
// elemCreator("p", callback);

//soal3
// let counter = 0;
// function counterMaker() {
//   return function (step = 0) {
//     counter += step;
//     return counter;
//   };
// }
// const count = counterMaker();
// console.log(count()); // 0
// console.log(count()); // 0
// console.log(count(1)); // 1
// console.log(count()); // 1
// console.log(count(3)); // 4
// console.log(count(7)); // 11
// console.log(count(-5)); // 6
