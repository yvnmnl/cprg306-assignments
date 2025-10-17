"use client";
import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

function ItemList() 
{
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-lg font-medium transition-colors duration-200 ${
            sortBy === "name"
              ? "bg-[#FCBACB] text-black shadow-md"
              : "bg-gray-200 text-black hover:bg-[#FDD3DD]"}`}> Sort by Name
          </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-lg font-medium transition-colors duration-200 ${
            sortBy === "category"
              ? "bg-[#FCBACB] text-black shadow-md"
              : "bg-gray-200 text-black hover:bg-[#FDD3DD]"}`}> Sort by Category
          </button>

      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
