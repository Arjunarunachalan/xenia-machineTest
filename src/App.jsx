import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Recharge from './components/Recharge'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recharge" element={<Recharge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
