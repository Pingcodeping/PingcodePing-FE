// src/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'; // Import the Footer component

const Layout = ({ children }) => {
  return (
    <>
      {/* Header Section */}
      <header className="bg-indigo-600 text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">PingCode</h1>
          <nav>
            <ul className="flex gap-6">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/features" className="hover:underline">Features</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer Section */}
      <Footer /> {/* Use the Footer component here */}
    </>
  );
};

export default Layout;
