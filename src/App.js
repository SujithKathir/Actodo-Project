

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
 import "./index.css";
import Landing from './pages/Landing';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {

  const [user, setuser] = useState(
    [
      {
        username:"sujith",
        password:"1234"
      }
    ]
  )
  
  return (

   
  
    <BrowserRouter>
     
      <Routes>
       
        <Route path="/signup" element={<Signup user={user} setuser={setuser}/>} />
        <Route path="*" element={<Login user={user} setuser={setuser} />} /> {/* Default route */}
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
