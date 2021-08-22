import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function User() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {loading && <div> Loading</div>}
      id = {id}
      <code>{JSON.stringify(user)}</code>
      <br></br>
      <div>
        <Link to={`/user/${parseInt(id) + 1}`}>
          Next User {parseInt(id) + 1}
        </Link>
      </div>
    </div>
  );
}
