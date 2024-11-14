/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { app } from "./../firebase-config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = () => {
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

  // eslint-disable-next-line no-unused-vars
  const authInfo = {
    CreateUser,
    Login,
    logout,
    GoogleLogin,
  };

  return <div>AuthProvider</div>;
};

export default AuthProvider;
