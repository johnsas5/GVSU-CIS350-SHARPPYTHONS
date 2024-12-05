import React, {useContext, useEffect, useState} from 'react';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext()

export function AuthProvider({children, value}) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}