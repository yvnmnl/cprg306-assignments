"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const handleSelectItem = (itemName) => {
    const mainIngredient = itemName.split(",")[0].split(" ")[0];
    setSelectedItem(mainIngredient);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#035718] via-white to-[#fc9fb1] flex justify-center items-start py-8 px-6">
      <div className="flex flex-col md:flex-row gap-8 max-w-6x1 mx-auto items-start">
        <section className="w-full md:w-1/2 flex flex-col">
          <header>
            <h1 className="text-2xl font-bold mb-3 text-gray-100"> Shopping List & Meal Ideas </h1>
          </header>

          <article>
            <h3 className="text-xl font-semibold text-gray-200 mb-2"> Add New Item </h3>
            <NewItem onAddItem={handleAddItem} />
            {showMessage && (<p className="mt-2 text-green-700 font-medium text-center"> Item added! </p>)}
          </article>

          <article>
            <h3 className="text-xl font-semibold text-gray-100 mb-2"> Current Items </h3>
              <div>
                {items.length === 0 ? (
                  <p className="text-gray-500 italic text-center"> No items yet — add one above. </p>
                  ) : (
                  <ul className="divide-y divide-gray-300 bg-white/70 rounded-lg shadow-sm p-2 text-center">
                    {items.map((item) => (
                      <li key={item.id} className="p-2 hover:bg-gray-100 cursor-pointer transition"
                        onClick={() => handleSelectItem(item.name)} >
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600"> {item.quantity} × {item.category}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
          </article>
        </section>

        <section className="w-full md:w-1/2 flex flex-col pt-7">
          <h3 className="text-xl font-semibold text-gray-100 mb-2"> Meal Ideas </h3>
          <div classname="bg-white/70 rounded-lg shadow-sm p-2 text-center">
            <MealIdeas ingredient={selectedItem} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;
