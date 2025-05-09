import React from 'react';
import { LINKS } from '../../static';
import HeaderActions from '../headerActions/HeaderActions';
import { NavLink, useNavigate, useLocation, useSearchParams } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-white text-black shadow-lg border-b-2 border-gray-600">
      <div className="max-w-[1296px] mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <a
            href=""
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 hover:from-pink-600 hover:to-blue-400 transition duration-300 ease-in-out transform hover:scale-115"
          >
          </a>
          <div className="flex items-center bg-white
          ">
            <img src="./Logo.png" alt="" />
          </div>
          <ul className="flex gap-10">
            {LINKS?.map((link) => (
             <NavLink to={link.url} key={link.id} className={({ isActive }) => isActive ? "text-cyan-500" : ""}>{link.title}</NavLink>
             ,
              <li key={link.id} className="text-base text-gray-400 hover:text-cyan-500 transition duration-300 ease-in-out transform hover:scale-110">
                <NavLink to={link.url}>{link.title}</NavLink>
              </li>

            ))}
          </ul>
          <HeaderActions />
        </nav>
      </div>
    </header>
  );
};

export default Header;
