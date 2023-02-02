import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const redirectKey = "sign_in_redirect";

export const AuthContext = React.createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const signIn = () => {
    try {
      // call the post API here
      const res = {
        name: "Ivan",
        email: "test@mail.com",
        token: "dfasdfadsf.asdfasdf.afsdfasd",
      };

      setUser(res);
      window.localStorage.setItem("user", JSON.stringify(res));
      router.push('/');

    } catch (err) {
      setError(err);
    }
  };

  const signOut = () => {
    console.log("sign out");
    window.localStorage.removeItem("user");
    setUser(null);
    setError(null);
  };

  const getUser = () => {
    if (window) {
      const signedInUser = window.localStorage.getItem("user");
      if (signedInUser) {
        return JSON.parse(signedInUser);
      } else {
        return null;
      }
    }
  };

  useEffect(() => {
    const user = getUser();
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, []);

  const value = {
    user,
    error,
    signIn,
    signOut,
    isLoading,
    setRedirect,
    getRedirect,
    clearRedirect,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function setRedirect(redirect) {
  window.sessionStorage.setItem(redirectKey, redirect);
}

function getRedirect() {
  return window.sessionStorage.getItem(redirectKey);
}

function clearRedirect() {
  return window.sessionStorage.removeItem(redirectKey);
}
