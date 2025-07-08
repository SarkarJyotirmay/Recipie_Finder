import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, onClose, active, setActive }) => {
  const routes = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "favourite-recipies", label: "Favourite Recipies" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto bg-white/70 backdrop-blur-xs bg-opacity-40" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-200 shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-xl font-bold" onClick={onClose}>
          ✕
        </button>
        <ul className="flex flex-col space-y-4 mt-8">
          {routes.map((route) => (
            <li
              key={`id_${route.id}`}
              onClick={() => {
                setActive(route.label);
                onClose();
              }}
              className={`text-lg font-semibold ${
                route.label === active ? "text-blue-500" : ""
              }`}
            >
              <Link to={`/${route.id}`}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
