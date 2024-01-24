import { useEffect, useState } from "react";
import { type User } from "./types";
import "./App.css";
import { UserTable } from "./components/UserTable";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [showColors, setShowColors] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const handleOrderByCountry = () => {
    setSortByCountry((prevState) => !prevState);
  };

  const sortedUsers = sortByCountry
    ? users.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country);
      })
    : users;

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
        <button onClick={toggleColors}>
          {showColors ? `Ocultar colores` : `Mostrar colores`}
        </button>
        <button onClick={handleOrderByCountry}>
          {sortByCountry ? `No ordernar` : `Ordenar por país`}
        </button>
      </header>
      <UserTable showColors={showColors} users={sortedUsers} />
    </>
  );
}

export default App;
