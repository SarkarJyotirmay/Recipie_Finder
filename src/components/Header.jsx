import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // or use 🧭 emoji/hamburger icon

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <>
      <header className="flex justify-between items-center px-5 py-4 bg-gray-100 relative">
        <div className="logo text-3xl font-bold text-orange-500">
          <Link to="/">
            <h1>Recigo</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <DesktopNav />
        </div>
      </header>

      {/* Mobile Nav Popup */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default Header;
