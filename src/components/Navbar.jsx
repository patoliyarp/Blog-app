import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.js';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLogin, setIsLogin } = useAuthContext();

  return (
    <nav className="bg-secondary opacity-95 sticky  top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={'/'}>
            <div className="text-btn font-bold text-xl">Logo</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex justify-center items-center space-x-4">
              <Link
                to={'/'}
                className="text-primary-text hover:bg-primary hover:text-white border  border-transparent hover:border-primary-100 px-3 py-2 rounded-xl text-sm"
              >
                Home
              </Link>
              <Link
                to={'/blogs'}
                className="text-primary-text hover:bg-primary hover:text-white border  border-transparent hover:border-primary-100 px-3 py-2 rounded-xl text-sm"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-primary-text hover:bg-primary hover:text-white border  border-transparent hover:border-primary-100 px-3 py-2 rounded-xl text-sm"
              >
                About
              </Link>

              {isLogin ? (
                // <div className="rounded-full h-8 w-8 overflow-hidden">
                //   <img
                //     src="https://avatars.githubusercontent.com/u/255820632?v=4&size=64"
                //     alt="profile pic"
                //   />
                // </div>
                <Menu as="div" className="relative inline-block">
                  <MenuButton className="">
                    <div className="rounded-full h-8 w-8 overflow-hidden">
                      <img
                        src="https://avatars.githubusercontent.com/u/255820632?v=4&size=64"
                        alt="profile pic"
                      />
                    </div>
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary-200  outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <Link
                          to={'/addblog'}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                        >
                          Add Blog
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <button
                          type="submit"
                          onClick={() => setIsLogin(false)}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                        >
                          Sign out
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              ) : (
                <Link
                  to={'/login'}
                  className="text-black bg-btn px-4 border  border-transparent hover:border-primary-100  py-2 rounded-xl text-sm"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-text"
            >
              {isMenuOpen ? 'X' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-200 p-2">
          <Link
            to={'/'}
            className="text-primary-text hover:bg-primary hover:text-white border  border-transparent hover:border-primary-100 px-3 py-2 rounded-xl text-sm"
          >
            Home
          </Link>
          <Link
            to={'/blogs'}
            className="text-primary-text hover:bg-primary hover:text-white border  border-transparent hover:border-primary-100 px-3 py-2 rounded-xl text-sm"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-primary-text hover:bg-primary hover:text-white border  border-transparent hover:border-primary-100 px-3 py-2 rounded-xl text-sm"
          >
            About
          </Link>
          {isLogin ? (
            <div className="rounded-full h-8 w-8 overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/255820632?v=4&size=64"
                alt="profile pic"
              />
            </div>
          ) : (
            <Link
              to={'/login'}
              className="text-black bg-btn px-4 border  border-transparent hover:border-primary-100  py-2 rounded-xl text-sm"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
