import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "../src/components/Login/Login.js";
import Register from "../src/components/Register/Register.js";
import AddClient from "../src/components/AddClient/AddClient.js"


class App extends  React.Component {
  render(){  
    return (      
      <Router>
        <Header/>         
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route exact path="/home" element={<Main />}/>          
          <Route exact path="/about" element={<Main />}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>  
          <Route path="/add" element={<AddClient/>}/>     
        </Routes>
      </Router>  
    );
  }
}

export default App;
