"use client";

import React, { useState, useEffect } from "react";
import ItemList from './item-list';
import NewItem from "./new-item";
import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [showMessage, setShowMessage] = useState(false); 

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <main className="flex justify-center min-h-screen py-2 items-start bg-gradient-to-b from-[#035718] via-white to-[#fc9fb1]">
      <section className="w-full max-w-md flex flex-col">
        <header>
          <h1 className="text-2xl font-bold mb-3 text-gray-100">Shopping List</h1>
        </header>
        
        <article>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Add New Item</h3>
          <NewItem onAddItem={handleAddItem} />
          {showMessage && (<p className="mt-2 text-green-700 font-medium text-center">Item added!</p>)}
        </article>

        <article>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Current Items</h3>
          <ItemList items={items} />
        </article>

        <footer className="text-center text-sm text-gray-600 mt-4">
          <p>Items have been added.</p>
        </footer>
      </section>
    </main>
  );
}

export default Page;
