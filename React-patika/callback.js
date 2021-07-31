// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// setInterval(() => {
//   console.log("1 sec");
// }, 1000);

// const bark = (cb) => {
//   cb();
// };

// bark(() => {
//   console.log("hav");
// });

import axios from "axios";

// callback functions
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log(users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => console.log(post));
//   });

// async-await

// async function getData() {
//   // await koymassan promise döner

//   // içteki await fetch için dıştaki await json çevirmesi için
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   console.log(users);

//   const post = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   console.log(post);
// }

// getData();

//  anonymous funtions : (()=>{

// })();

// axios kullanımı:
(async () => {
  const users = await axios("https://jsonplaceholder.typicode.com/users");

  console.log(users.data);

  const post = await axios("https://jsonplaceholder.typicode.com/posts/1");

  console.log(post.data);
})();

// another way to use
// axios json döndürüyor, json içinde data elemanında istediklerimiz var.
(async () => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(users);

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  console.log(post);
})();
