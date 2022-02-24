import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import EmptyList from "../../empty-list";
import { List } from "../styles";

const UserList = ({ users }) => (
  <>
    {users.lenght !== 0 ? (
      <List>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/${user.login}`}>
              <Button ariaLabel="link to user detail">User #{user.id}</Button>
            </Link>
          </li>
        ))}
      </List>
    ) : (
      <EmptyList
        title="Something were wrong..."
        description="No users to see. Please, reload."
      />
    )}
  </>
);

export default UserList;
