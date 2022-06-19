import React from "react";

const UsersForm = ({
  createUser,
  dataUpdate,
  setDataUpdate,
  updateUsers,
  handleSubmit,
  register,
  reset,
}) => {
  /* debo revisar que pasa con el setDataUpdate, porque no lo uso en ningun momento y la app funcionai igual */

  /* updateUsers es el patch que esta en apiUsers.js.
    en dataUpdate vien la data de la card. 
  */

  const defaultForm = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };

  // console.log(dataUpdate);

  const submit = (data) => {
    if (dataUpdate !== undefined) {
      updateUsers(dataUpdate.id, data);
      reset(defaultForm);
    } else {
      createUser(data);
      reset(defaultForm);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <div className="form-item">
        <label htmlFor="name">Nombre: </label>
        <input type="name" id="name" {...register("first_name")} />
      </div>
      <div className="form-item">
        <label htmlFor="lname">Apellido: </label>
        <input type="name" id="lname" {...register("last_name")} />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div className="form-item">
        <label htmlFor="pass">Password: </label>
        <input type="password" id="pass" {...register("password")} />
      </div>
      <div className="form-item">
        <label htmlFor="date">Fecha de cumpleaños: </label>
        <input type="date" id="date" {...register("birthday")} />
      </div>
      <button>Create</button>
    </form>
  );
};

export default UsersForm;
