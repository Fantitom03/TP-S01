import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarLinks = [
    { id: 1, title: "Inicio", link: "#" },
    { id: 2, title: "Propiedades", link: "#propiedades" },
    { id: 3, title: "Servicios", link: "#servicios" },
    { id: 4, title: "Contacto", link: "#contacto" }
  ];

const navbarRedes = [
    {
      id: 1,
      title: "WhatsApp",
      link: "#",
      icon: "bi bi-whatsapp",
    },
    {
      id: 2,
      title: "Instagram",
      link: "https://www.instagram.com",
      icon: "bi bi-instagram",
    },
  ];

  return (
    <nav className="w-full fixed z-50 bg-gray-900/70 backdrop-blur-md text-white">
      {/* Contenedor principal */}
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo y Nombre */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="src/assets/logo-simplificado.png"
            alt="Logo"
            className="w-12 h-12 rounded-full hover:scale-110 transition-transform"
          />
          <span className="font-bold text-xl hidden md:block hover:text-orange-500 hover:scale-105 cursor-pointer">
            Los Naranjos Alquileres
          </span>
        </motion.div>

        {/* Botón Hamburguesa (Mobile) */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" // X
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" // Burger
              />
            )}
          </svg>
        </button>

        {/* Menú Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-6">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-white hover:text-orange-500 font-medium transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes Sociales Desktop */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navbarRedes.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 transform hover:scale-125"
                  >
                    <i
                      className={`${link.icon} sm:text-2xl text-lg text-white transition-all duration-300 hover:text-orange-500`}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Menú Mobile */}
      <div
        className={`md:hidden fixed w-full bg-gray-900/80 backdrop-blur-md shadow-lg transition-all duration-300 ${
            isOpen ? "top-16 opacity-100" : "-top-full opacity-0"
          }`}
      >
        <ul className="py-4">
          {navbarLinks.map((link) => (
            <li key={link.id} className="border-b">
              <a
                href={link.link}
                className="block py-3 px-6 text-white hover:bg-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(true)}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li className="flex justify-center gap-4 py-4">
            {navbarRedes.map((red) => (
              <a
                key={red.id}
                href={red.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white hover:scale-110 transition-transform hover:text-orange-500"
              >
                <i className={red.icon}></i>
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;