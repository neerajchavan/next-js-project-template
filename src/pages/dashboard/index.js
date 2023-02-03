import { useAuth } from "@/hooks/useAuth";
import React from "react";

export default function DashboardPage ({testProp}) {

  const { signOut } = useAuth();

  console.log('DashboardPage: ', testProp);
  
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={signOut}>Logout</button>
    </>
  )
};

// Not sure if we should use getServerSideProps or Below thing for authentication
export async function getServerSideProps(context) {
  return {
    props: {
      requireAuth: true,
      requireAdmin: false,
      testProp: 'testProp'
    }, // will be passed to the page component as props
  }
}

// To authenticate the page set requireAuth to true 
DashboardPage.requireAuth = true;
DashboardPage.requireAdmin = false;
