// src/components/NavbarLoggedIn.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NavbarLoggedIn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
    <header className="bg-indigo-600 text-white p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">PingCode</h1>
        <nav>
          <ul className="flex gap-6">
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                Logout
            </button>
          </ul>
        </nav>
      </div>
    </header> 
    </>
  );
};

export default NavbarLoggedIn;
