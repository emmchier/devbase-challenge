import { useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { getUsers } from "../service";

const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers().then((list) => {
      setUserList(list);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ userList, setUserList, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
