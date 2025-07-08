import React, { useState } from "react";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  const [active, setActive] = useState("Home");

  const routes = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "favourite-recipies", label: "Favourite Recipies" },
  ];
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
        {routes.map((route) => (
          <li
            key={`id_${route.id}`}
            onClick={()=>setActive(route.label)}
            className={`text-lg font-semibold ${
              route.label === active ? "text-blue-500" : ""
            }`}
          >
            <Link to={route.id}>{route.label}</Link>
          </li>
        ))}
      </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
