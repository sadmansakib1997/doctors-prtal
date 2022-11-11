import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
// import useFirebase from "../hooks/useFirebase/useFirebase";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    localStorage.removeItem("genius-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // const [user, setUser] = useState({});
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  // // signin in google
  // const signInUsingGoogle = () => {
  //   setIsLoading(true);
  //   const googleProvider = new GoogleAuthProvider();
  //   return signInWithPopup(auth, googleProvider);
  // };
  // // observer with user state changed
  // useEffect(() => {
  //   const unsubscribed = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     }
  //     setIsLoading(false);
  //   });
  //   return () => unsubscribed;
  // }, []);
  // // function for signout
  // const logOut = () => {
  //   setIsLoading(true);
  //   signOut(auth)
  //     .then(() => {
  //       setUser({});
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  // const allContext = {
  //   user,
  //   error,
  //   setError,
  //   signInUsingGoogle,
  //   logOut,
  //   isLoading,
  //   setIsLoading,
  // };

  const allContext = {
    user,
    loading,
    createUser,
    login,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
