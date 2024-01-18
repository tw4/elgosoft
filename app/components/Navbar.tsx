'use client';

import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseSharp } from 'react-icons/io5';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div className="fixed flex flex-row justify-center w-full">
        <nav className="w-fit flex flex-row rounded-2xl space-x-5 bg-opacity-50 items-center bg-white backdrop-blur-2xl mt-10 pt-3 pb-3 pr-10 pl-10 md:pr-10 md:pl-10 sm:hidden">
          <a href="#howitworks">
            <img className="w-24" src="/assets/logo.png" alt="logo" />
          </a>
          <ul className="flex flex-row justify-center space-x-5">
            <li>
              <a className="hover:text-blue-500 sm:hidden" href="#howitworks">
                Nasıl Çalışır
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#about">
                Hakkımızda
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#work">
                İşlerimiz
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-500"
                href="https://blog.elgosoft.com/"
              >
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#faq">
                SSS
              </a>
            </li>
          </ul>

          <button className="bg-blue-600 rounded-xl text-white pr-5 pl-5 pt-1 pb-1 sm:hidden">
            Hadi Başlayalım
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="hidden fixed bg-white bg-opacity-50 backdrop-blur-2xl w-full cursor-pointer sm:block">
        <div
          onClick={handleNavbar}
          className="flex flex-row justify-between p-5"
        >
          <a href="#howitworks">
            <img className="w-24" src="/assets/logo.png" alt="logo" />
          </a>
          {navbarOpen ? (
            <IoCloseSharp className="hiddensx:block" size={25} />
          ) : (
            <RxHamburgerMenu className="hiddensx:block" size={25} />
          )}
        </div>
        {navbarOpen && (
          <nav>
            <ul className="flex flex-col text-center space-y-3">
              <li>
                <a className="hover:text-blue-500 sm:hidden" href="#howitworks">
                  Nasıl Çalışır
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500" href="#about">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500" href="#work">
                  İşlerimiz
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://blog.elgosoft.com/"
                >
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500" href="#faq">
                  SSS
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};
