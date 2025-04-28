import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogoClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p
          onClick={handleLogoClick}
          className="text-4xl font-bold cursor-pointer animate-colorChange hover:text-blue-300 transition-colors duration-300"
        >
          CalSci
        </p>
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <span className="text-black text-2xl font-medium">
                {user.name}
              </span>
              <button
                onClick={async () => {
                  await logout();
                  navigate("/");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
