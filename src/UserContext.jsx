import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [loggedUsername, setLoggedUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get('/profile').then(response => {
        setId(response.data.userID);
        setLoggedUsername(response.data.username)
    })
  });

  return (
    <UserContext.Provider
      value={{ loggedUsername, setLoggedUsername, id, setId }}
    >
      {children}
    </UserContext.Provider>
  );
}
