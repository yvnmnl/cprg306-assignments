import React from "react";
import NewItem from './new-item';

function Page() {
  return (
    <main className="flex justify-center min-h-screen py-2 items-start bg-gradient-to-b from-[#035718] via-white to-[#fc9fb1]"> 
      <div className="w-full max-w-md flex flex-col">
        <h1 className="text-2xl font-bold mb-3">Add New Item</h1>
        <NewItem /> 
      </div>
    </main>
  );
} 
export default Page;