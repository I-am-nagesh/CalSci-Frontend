import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Sign Up") {
      if (!name || !number || !email || !password) {
        alert("Please fill in all fields to create an account.");
        return;
      }
      // Simulate signup logic (replace with API call)
      navigate("/otp", { state: { email, number, flow: "signup" } });
    } else {
      if (!email || !password) {
        alert("Please fill in email and password to login.");
        return;
      }
      // Simulate login logic (replace with API call)
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>

        {state === "Sign Up" && (
          <>
            <div className="w-full">
              <p>Full Name</p>
              <input
                className="border border-zinc-300 rounded-lg shadow-lg w-full p-2 mt-1"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="w-full">
              <p>Phone Number</p>
              <input
                className="border border-zinc-300 rounded-lg shadow-lg w-full p-2 mt-1"
                type="tel"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                required
              />
            </div>
          </>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded-lg shadow-lg w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded-lg shadow-lg w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md text-base cursor-pointer hover:bg-blue-600 transition-colors duration-300"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-500 underline cursor-pointer hover:text-blue-700"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-500 underline cursor-pointer hover:text-blue-700"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
