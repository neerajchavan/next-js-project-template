import { useAuth } from "@/hooks/useAuth";
import React from "react";

export default function DashboardPage () {

  const { signOut } = useAuth();

  console.log('dashboard page -- ',DashboardPage);
  
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={signOut}>Logout</button>
    </>
  )
};

// To authenticate the page set requireAuth to true 
DashboardPage.requireAuth = true;
