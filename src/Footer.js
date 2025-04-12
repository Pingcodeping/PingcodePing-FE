// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white text-center py-6 mt-12">
      <p>&copy; {new Date().getFullYear()} Pingcode. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
