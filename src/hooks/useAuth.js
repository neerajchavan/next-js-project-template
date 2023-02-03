import { AuthContext } from "@/components/auth/AuthProvider";
import React from "react";

export function useAuth() {
  const auth = React.useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return auth;
}
