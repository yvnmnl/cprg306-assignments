import React from "react";
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="flex justify-center min-h-screen py-2 items-start bg-gradient-to-b from-[#035718] via-white to-[#fc9fb1]">
      <div className="w-full max-w-md flex flex-col">
        <h1 className="text-2xl font-bold mb-3">Shopping List</h1>
        <StudentInfo />
      </div>
    </main>
  );
}
