// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import {
  getLoggedInUser,
  login as loginCookie,
  logout as logoutCookie,
} from "../utils/auth";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    setUser(getLoggedInUser());
  }, []);

  const login = (username: string) => {
    loginCookie(username);
    setUser(username);
  };

  const logout = () => {
    logoutCookie();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
