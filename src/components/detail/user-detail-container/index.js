import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router";

import Section from "../../common/section";
import { UserContext } from "../../../context/userContext";
import UserDetail from "../user-detail";
import { getUser } from "../../../service";

const UserDetailContainer = () => {
  const { userName } = useParams();
  const [user, setUser] = useState({});
  const { loading } = useContext(UserContext);

  useEffect(() => {
    getUser(userName).then((user) => {
      setUser(user);
    });
  }, [userName]);

  return (
    <Section>
      {loading ? <h4>Cargando...</h4> : <UserDetail item={user} />}
    </Section>
  );
};

export default UserDetailContainer;
