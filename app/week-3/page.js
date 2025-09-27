import React from "react";
import ItemList from './item-list';

function Page() {
  return (
    <main className="flex justify-center min-h-screen py-2 items-start bg-gradient-to-b from-[#035718] via-white to-[#FC5A67]">
      <div className="w-full max-w-md flex flex-col">
        <h1 className="text-2xl font-bold mb-3 text-gray-100">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
} 

export default Page;