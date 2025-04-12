// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home'; // Create this for the home page content
import Register from './Register';
import Login from './Login';
import Preferences from './Preferences';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/preferences"
          element={
               
              <Preferences />
            
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
