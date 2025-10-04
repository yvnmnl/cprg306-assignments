"use client";
import { useState } from "react";
import React from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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
 
  return (
    <div className="mb-2 p-2 border rounded shadow-sm text-black text-center bg-gray-200/50">
      <p className="mb-2 font-semibold">Quantity: <span style={{color: '#373d20'}}>{quantity}</span></p>
      <div className="flex space-x-2 justify-center">
        <button onClick={decrement} disabled={quantity === 1} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed bg-[#D4BECF]"> - </button>
        <button onClick={increment} disabled={quantity === 20} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed bg-[#BED4C3]"> + </button>
      </div>
      <p className="text-xs">Range must be within 1 - 20</p>
    </div>
  );
}
