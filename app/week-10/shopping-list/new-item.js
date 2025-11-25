"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const categories = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "canned goods",
    "dry goods",
    "beverages",
    "snacks",
    "household",
    "other",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem({ ...item });

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <section className="w-full">
      <article className="mb-2 text-black flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-sm space-y-4">
          <div className="flex flex-col items-center w-full">
            <label htmlFor="name" className="block mb-1 text-[#035718] font-semibold text-center"> Item Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded text-center"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <label htmlFor="quantity" className="block mb-1 text-[#035718] font-semibold text-center"> Quantity: </label>

            <div className="flex justify-center items-center space-x-2 mb-1">
              <button type="button" onClick={decrement} disabled={quantity === 1} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed bg-[#FCBACB]"> - </button>

              <p className="font-medium text-[#373d20]">{quantity}</p>

              <button type="button" onClick={increment} disabled={quantity === 20} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed bg-[#b9dca9]"> + </button>
            </div>

            <p className="text-xs text-center text-gray-700"> Range must be within 1 - 20 </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <label htmlFor="category" className="block mb-1 text-[#035718] font-semibold text-center"> Category: </label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded text-center" > {categories.map((cat) => ( <option key={cat} value={cat}> {cat}</option> ))}
            </select>
          </div>

          <div className="flex justify-center w-full">
            <button type="submit" className="bg-[#a8c686] text-[#373d20] px-6 py-2 rounded hover:bg-[#95b566] transition" > Add Item </button>
          </div>
        </form>
      </article>
    </section>
  );
}
