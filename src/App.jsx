import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import apiUsers from "./hooks/apiUsers";

function App() {
  const { usersData, createUser, updateUsers } = apiUsers();

  const [isShowForm, setIsShowForm] = useState(false);

  const [dataUpdate, setDataUpdate] = useState();
  // le mando setDataUpdate a UsersList para capturar la informacion del boton update

  const { handleSubmit, register, reset } = useForm();

  const showForm = () => {
    const o = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    };
    reset(o);
    setIsShowForm(!isShowForm);
  };

  return (
    <div className="App">
      <div className="description">
        <h3>Descripcion de la App:</h3>
        <p>
          En esta App consumi una API de usuarios e hice un CRUD, es decir,
          podemos leer, actualizar y borrar un usuario. Puse en practica todo lo
          aprendido hasta el momento, hooks, componentes, useEffect, useState y
          tambien React Hook Form.
        </p>
      </div>
      <button onClick={showForm}>
        {isShowForm ? "Close Form" : "Open Form"}
      </button>
      {isShowForm && (
        <UsersForm
          createUser={createUser}
          updateUsers={updateUsers}
          dataUpdate={dataUpdate}
          setDataUpdate={setDataUpdate}
          handleSubmit={handleSubmit}
          register={register}
          reset={reset}
        />
      )}
      <div className="container-card">
        {usersData?.map((user) => (
          <UsersList
            user={user}
            key={user.id}
            setDataUpdate={setDataUpdate}
            setIsShowForm={setIsShowForm}
            reset={reset}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
