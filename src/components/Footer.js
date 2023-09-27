import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
  <footer className='bg-black py-8 text-center
  text-white'>
    <div className='container mx-auto '>
    Accommodation Companion © 2023
    <br/>
    <Link className="hover:text-violet-900 transition mb-1" to={`/aboutus`}>
            About Us{" "}
          </Link>
    </div>
  </footer>
  );
};

export default Footer;
