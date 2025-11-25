"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../../contexts/AuthContext"; 
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

function Page() {
  const [items, setItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const { user } = useUserAuth();
  
  const loadItems = async () => {
  if (user) {
    const fetchedItems = await getItems(user.uid); 
    setItems(fetchedItems); 
    }
  };

  useEffect(() => {
    loadItems(); 
  }, [user]);
   
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
    <main className="min-h-screen bg-gradient-to-b from-[#035718] via-white to-[#fc9fb1] flex items-center justify-center py-8 px-6">
      {user === null ? (
        <section className="bg-gray-200/50 rounded-lg shadow-lg p-8 text-center w-full max-w-md">
          <h1 className="text-2xl font-bold text-black mb-4">Access Denied</h1>
          <p className="text-gray-700 mb-6">You must be logged in to view the shopping list.</p>
          <Link 
            href="/week-9" 
            className="inline-block bg-[#315e26] text-white font-semibold px-6 py-3 rounded hover:bg-[#218838] transition"
          >
            Go to Login
          </Link>
        </section>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-[#035718] via-white via-40% to-[#fc9fb1] flex flex-col items-center py-8 px-6">
          <header className="w-full max-w-6xl mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-100"> Shopping List & Meal Ideas </h1>
          </header>

          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full items-start">
            
            <section className="w-full md:w-1/2 flex flex-col gap-4">
              <article className="bg-gray-200/50 rounded-lg shadow-sm p-4">
                <h3 className="text-xl font-semibold text-black mb-2"> Add New Item </h3>
                <NewItem onAddItem={handleAddItem} />
                {showMessage && (
                  <p className="mt-2 text-green-700 font-medium text-center"> Item added! </p>
                )}
              </article>

              <article>
                <h3 className="text-xl font-semibold text-black mb-2"> Current Items </h3>
                {items.length === 0 ? (
                  <p className="text-gray-500 italic text-center"> No items yet — add one above.</p>
                ) : (
                  <ItemList 
                    items={items} 
                    onItemSelect={(item) => handleSelectItem(item.name)} 
                  />
                )}
              </article>
            </section>

            <section className="w-full md:w-1/2 flex flex-col gap-4">
              <article className="bg-gray-200/50 rounded-lg shadow-sm p-4 h-full">
                <h3 className="text-xl font-semibold text-black mb-2"> Meal Ideas for: </h3>
                <MealIdeas ingredient={selectedItem} />
              </article>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}

export default Page;
