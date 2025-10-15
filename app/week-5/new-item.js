"use client";
import { useState } from "react";
import React from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  
  const categories = ["produce", "dairy", "bakery", "meat", "canned goods", "dry goods", "household"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {name, quantity, category};
    console.log(item);
    alert(`Item Added: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 p-4 border rounded shadow-sm text-black bg-gray-200/50">

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Item Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Quantity: <span style={{color: '#373d20'}}>{quantity}</span></label>
        <div className="flex space-x-2 justify-center">
          <button type="button" onClick={decrement} disabled={quantity === 1} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed bg-[#D4BECF]"> - </button>
          <button type="button" onClick={increment} disabled={quantity === 20} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed bg-[#BED4C3]"> + </button>
        </div>
        <p className="text-xs">Range must be within 1 - 20</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="category">Category:</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="w-full px-3 py-2 border rounded">
          
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">Add Item</button>
    </form>
  );
}

