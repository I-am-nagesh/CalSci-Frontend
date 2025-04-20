import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <p
          onClick={() => navigate("/")}
          className="text-4xl font-bold cursor-pointer animate-colorChange hover:text-blue-300 transition-colors duration-300"
        >
          CalSci
        </p>
      </div>
    </nav>
  );
}
