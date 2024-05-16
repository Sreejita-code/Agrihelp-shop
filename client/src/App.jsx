import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Shop from './components/Shop';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={
            <div className="front-page">
              <h1>Welcome to the Agricultural Website</h1>
              <div className="front-buttons">
                <a href="/login">Login</a>
                <a href="/shop">Shop</a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
