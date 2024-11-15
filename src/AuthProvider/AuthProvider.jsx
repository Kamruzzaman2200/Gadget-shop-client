/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { app } from "./../firebase-config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // eslint-disable-next-line no-unused-vars
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // eslint-disable-next-line no-unused-vars
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // eslint-disable-next-line no-unused-vars
  const logout = () => {
    return signOut(auth);
  };

  // eslint-disable-next-line no-unused-vars
  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const authInfo = {
    user,
    loading,
    CreateUser,
    Login,
    logout,
    GoogleLogin,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
