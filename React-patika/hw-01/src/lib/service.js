import axios from "axios";

const getData = async (number) => {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  console.log(user);

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number
  );
  console.log(post);
};

export default getData;
