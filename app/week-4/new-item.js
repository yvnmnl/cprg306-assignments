"use client";
import { useState } from "react";

export default function NewItem({ addItem }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }; 
} 

return (
  <div>
    <p>Quantity:</p>
    <div>
      <button onClick ={increment} diabled={quantity === 20}> + </button>
    </div>
  </div>
)