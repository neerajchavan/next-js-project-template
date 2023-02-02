import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";

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

DashboardPage.requireAuth = true;
