import { type User } from "../types";
interface Props {
  users: User[];
  showColors: boolean;
}

export const UserTable: React.FC<Props> = ({ showColors, users }) => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? "#3333" : "#55555";
          const color = showColors ? backgroundColor : "transparent";

          return (
            <tr key={index} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.medium} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button>Borrar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
