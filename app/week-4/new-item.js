"use client";
import { useState } from "react";
import React from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div>
      <p>Quantity: {quantity}</p>
      <div>
        <button onClick={increment} disabled={quantity === 20}> + </button>
      </div>
    </div>
  );
}
