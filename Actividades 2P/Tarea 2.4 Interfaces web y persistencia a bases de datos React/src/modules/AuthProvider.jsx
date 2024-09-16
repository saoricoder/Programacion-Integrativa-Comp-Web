import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  saveUser: (idSession) => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  window.onload = () => {
    if (sessionStorage.getItem("idSession") !== "") {
      setIsAuthenticated(true);
    }
  };

  function saveUser(idSession) {
    if (idSession !== null) {
      setIsAuthenticated(true);
    }
    if (idSession !== "") {
      setIsAuthenticated(true);
    }
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
