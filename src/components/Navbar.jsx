import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white border-b border-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="font-bold">UEFA</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded hover:bg-blue-800">
              Matches
            </Link>
            <div className="relative group">
              <Link
                to="/favorites"
                className="px-3 py-2 rounded hover:bg-blue-800 flex items-center"
              >
                Favorites
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded text-white hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Matches
            </Link>
            <Link
              to="/favorites"
              className="block px-3 py-2 rounded text-white hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
