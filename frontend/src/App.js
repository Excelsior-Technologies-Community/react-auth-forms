import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./style/Form.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <div className="form-container">
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
