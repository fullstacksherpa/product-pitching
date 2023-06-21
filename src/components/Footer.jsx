import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="mb-4">
          <p className="text-sm">Subscribe to our newsletter:</p>
          <div className="flex mt-2">
            <input
              type="email"
              className="bg-gray-800 rounded-l-lg py-2 px-4 text-white w-64"
              placeholder="Enter your email"
            />
            <button
              className="bg-blue-500 rounded-r-lg py-2 px-4 text-white ml-2 hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-sm">Powered by <a href='https://ongchen.com/' target="_blank"> <span className='font-bold hover:underline hover:text-blue-500' >Ongchen </span>   </a>&copy; 2023 GradeBook. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
