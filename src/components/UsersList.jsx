import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import apiUsers from "../hooks/apiUsers";

const UsersList = ({ user, setDataUpdate, setIsShowForm, reset }) => {
  const { getDeleteUser } = apiUsers();

  /* la funcion clickUpdateUser cambia el estado de setIsShowForm, es decir,
     cuando le demos click en el boton de editar que esta en nuestra card, nos abrira el formulario para editarla.
     Y en el setDataUpdate capturamos la informacion de la card para mostrarla en el formulario, para luego ser editada.
  */

  const clickUpdateUser = () => {
    setIsShowForm(true);
    const d = {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      birthday: user.birthday,
    };
    reset(d);
    setDataUpdate(user);
  };

  return (
    <div className="card">
      <ul className="card-data">
        <li>
          <b>Nombre:</b> {user?.first_name} {user?.last_name}
        </li>
        <li>
          <b>Email:</b> {user?.email}
        </li>
        <li>
          <FaBirthdayCake className="date-icon-birthday" />: {user?.birthday}
        </li>
      </ul>
      <div className="card-button">
        <button onClick={() => getDeleteUser(user.id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button onClick={() => clickUpdateUser()}>
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  );
};

export default UsersList;
