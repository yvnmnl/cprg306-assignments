"use client";
import { useState } from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
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
    <section className="mt-2">
      <header className="flex justify-center gap-2 mb-4">
        <button onClick={() => setSortBy("name")} className={`px-3 py-1 rounded-lg font-medium transition-colors duration-200 ${ sortBy === "name" ? "bg-[#FCBACB] text-black shadow-md" : "bg-gray-200 text-black hover:bg-[#FDD3DD]" }`} > Sort by Name </button>

        <button onClick={() => setSortBy("category")} className={`px-3 py-1 rounded-lg font-medium transition-colors duration-200 ${ sortBy === "category" ? "bg-[#FCBACB] text-black shadow-md" : "bg-gray-200 text-black hover:bg-[#FDD3DD]" }`} > Sort by Category </button>
      </header>

      <article className="bg-gray-200/50 rounded-lg shadow-sm p-2">
        <h3 className="text-lg font-semibold text-[#035718] mb-2 text-center"> Item List </h3>

        {sortedItems.length === 0 ? (
          <p className="text-center text-gray-500 italic py-4"> No items yet — add one! </p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {sortedItems.map((item) => (
              <li key={item.id} className="p-2 hover:bg-gray-50 transition">
                <Item {...item} onSelect={() => onItemSelect(item)} />
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}

export default ItemList;
