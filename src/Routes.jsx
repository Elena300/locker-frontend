import Register from './Register';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Routes() {
 const { loggedUsername, id } = useContext(UserContext);
 if (loggedUsername) {
   return "logged in" + loggedUsername;
 }
    return (
    <Register />
    )
}