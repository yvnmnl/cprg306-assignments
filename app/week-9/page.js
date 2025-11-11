"use client";

import React from "react";
import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main>
      {!user ? (
        <section style={{ textAlign: "center", marginTop: "4rem" }}>
          <header>
            <h1>Welcome to the App</h1>
            <p>Please log in to continue.</p>
          </header>

          <article>
            <button onClick={handleLogin}>Login with GitHub</button>
          </article>
        </section>
      ) : (
        <section style={{ textAlign: "center", marginTop: "4rem" }}>
          <header>
            <h1>Welcome, {user.displayName}</h1>
            <p>{user.email}</p>
          </header>

          <article>
            <button onClick={handleLogout}>Logout</button>
          </article>

          <footer style={{ marginTop: "1rem" }}>
            <Link href="/week-9/shopping-list">
              Go to <strong>Shopping List</strong>
            </Link>
          </footer>
        </section>
      )}
    </main>
  );
}
