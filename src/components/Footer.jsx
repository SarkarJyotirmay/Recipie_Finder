import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Recigo</h2>
          <p className="text-sm text-gray-300">
            Your go-to place for finding delicious and healthy recipes. Powered by AI and curated ingredients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-orange-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400">Contact</Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-orange-400">Recipes</Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-orange-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-orange-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-orange-400" />
            </a>
            <a href="mailto:support@recigo.com">
              <Mail className="w-5 h-5 hover:text-orange-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Recigo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
