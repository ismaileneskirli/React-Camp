import "./App.css";
import User from "./components/User";
import { useState } from "react";
// const friends = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];
// state and props lessons
function App() {
  // mehmet is inital value of name
  const [name, setName] = useState("Mehmet");
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [user, setUser] = useState({ name: "no name", age: 0 });
  return (
    // conditional render
    <div>
      <User
        name={name}
        surname="Kırlı"
        isLoggedIn={true}
        friends={friends}
        age={10}
        address={{
          title: "İstanbul/Ümraniye",
          zip: "34",
        }}
      />
      <button onClick={() => setName("Enes")}> Change name to Enes </button>;
      <button onClick={() => setFriends([...friends, "ayşe"])}>
        Add new friend
      </button>
      <br></br>
      <h1>{user.name}</h1>
      <button onClick={() => setUser({ ...user, name: "enes" })}>
        {" "}
        Change user name
      </button>
    </div>
  );
}

export default App;
