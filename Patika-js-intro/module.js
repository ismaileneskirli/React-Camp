// How to export modules

const data = [
  { name: "enes", id: 1 },
  { name: "ahmet", id: 2 },
];

const showData = (data) => {
  console.log(data);
};

export { data, showData };
