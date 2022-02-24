const USER_LIST = process.env.REACT_APP_USER_LIST;

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/vnd.github.v3+json");

export const getUsers = async () => {
  const parameters = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const result = await fetch(USER_LIST, parameters);
    const users = await result.json();
    const userLimit = users.splice(0, 5);

    return userLimit;
  } catch (error) {
    console.log("error users", error);
  }
};

export const getUser = async (useName) => {
  const parameters = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const result = await fetch(`${USER_LIST}/${useName}`, parameters);
    const user = await result.json();

    return user;
  } catch (error) {
    console.log("error user", error);
  }
};
