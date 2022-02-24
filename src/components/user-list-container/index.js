import React, { useContext } from "react";

import { UserContext } from "../../context/userContext";
import UserList from "./user-list";

const UserListContainer = () => {
  const { userList, loading } = useContext(UserContext);

  return <>{loading ? <h4>Cargando...</h4> : <UserList users={userList} />}</>;
};

export default UserListContainer;
