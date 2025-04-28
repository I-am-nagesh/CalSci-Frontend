import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account, ID } from "../lib/appwrite";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initSession = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      }
    };
    initSession();
  }, []);

  //register new user
  const register = async ({ email, password, name }) => {
    await account.create(ID.unique(), email, password, name);
    await account.createEmailPasswordSession(email, password);
    const currentUser = await account.get();
    setUser(currentUser);
    navigate("/dashboard");
  };

  //log in an existing user
  const login = async ({ email, password }) => {
    await account.createEmailPasswordSession(email, password);
    const currentUser = await account.get();
    setUser(currentUser);
    navigate("/dashboard");
  };

  //logout user
  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
