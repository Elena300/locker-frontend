import { useState, useContext } from 'react';
import './App.css';
import Register from './Register';
import axios from 'axios';
import { UserContext, UserContextProvider } from './UserContext';
import Routes from './Routes';


function App() {
 axios.defaults.baseURL = "http://localhost:4000";
 axios.defaults.withCredentials = true;
 const { username } = useContext(UserContext);
  console.log(username);
  return (
        <UserContextProvider>
          <Routes /> 
        </UserContextProvider>
  )
}

export default App
