"use client";

import { useState, useEffect} from "react";
import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);
  
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
    <main className="min-h-screen bg-gradient-to-b from-[#035718] via-white via-40% to-[#fc9fb1] flex items-center justify-center py-8 px-6">
      {user === null ? (
        <section className="bg-gray-200/50 rounded-lg shadow-lg p-8 text-center w-full max-w-md">
          <h1 className="text-2xl font-bold text-[#373d20] mb-4">Welcome</h1>
          <p className="text-gray-700 mb-6">Please log in to continue.</p>
          <button
            onClick={handleLogin}
            className="inline-block bg-[#218838] text-white font-semibold px-6 py-3 rounded hover:bg-[#315e26] transition"
          >
            Login with GitHub
          </button>
        </section>
      ) : (
        <section className="bg-gray-200/50 rounded-lg shadow-lg p-8 text-center w-full max-w-md">
          <h1 className="text-2xl font-bold text-[#373d20] mb-4"> Welcome {user.displayName} </h1>
          <p className="text-[#373d20] mb-8">{user.email}</p>
          <div className="flex flex-col gap-4">
            <Link
              href="/week-10/shopping-list"
              className="bg-[#fc9fb1] text-white font-semibold px-6 py-3 rounded hover:bg-[#e08495] transition"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={handleLogout}
              className="inline-block bg-[#218838] text-white font-semibold px-6 py-3 rounded hover:bg-[#315e26] transition"
            >
              Logout
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
