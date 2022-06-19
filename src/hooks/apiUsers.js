import axios from "axios";
import { useEffect, useState } from "react";

const apiUsers = () => {
  const [usersData, setUsersData] = useState();

  const URL = "https://users-crud1.herokuapp.com/users/";

  const appUsers = () => {
    axios
      .get(URL)
      .then((res) => setUsersData(res.data))
      .catch((err) => console.log(err));
  };

  const getDeleteUser = (id) => {
    const URLID = URL + id + "/";
    axios
      .delete(URLID)
      .then((res) => {
        console.log(res);
        appUsers();
      })
      .catch((err) => console.log(err));
  };

  const createUser = (newUser) => {
    axios
      .post(URL, newUser)
      .then((res) => {
        console.log(res.data);
        appUsers();
      })
      .catch((err) => console.log(err));
  };

  const updateUsers = (id, updateUser) => {
    const URLID = URL + id + "/";
    axios
      .patch(URLID, updateUser)
      .then((res) => {
        console.log(res.data);
        appUsers();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    appUsers();
  }, [appUsers]);

  return { usersData, getDeleteUser, createUser, updateUsers };
};

export default apiUsers;
