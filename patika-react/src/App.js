import "./App.css";
import User from "./components/User";
const friends = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];
function App() {
  // conditional render

  return (
    <div>
      <User
        name="enes"
        surname="Kırlı"
        isLoggedIn={true}
        friends={friends}
        age={10}
        address={{
          title: "İstanbul/Ümraniye",
          zip: "34",
        }}
      />
      ;
    </div>
  );
}

export default App;
