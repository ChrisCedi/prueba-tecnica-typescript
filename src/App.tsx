import { useEffect, useState } from "react";
import { type User } from "./types";
import "./App.css";
import { UserTable } from "./components/UserTable";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Lista de usuarios</h1>
      <header>
        <button onClick={toggleColors}>Mostrar color</button>
      </header>
      <UserTable showColors={showColors} users={users} />
    </>
  );
}

export default App;
