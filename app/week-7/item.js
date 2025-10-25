import React from "react";

function Item({ name, quantity, category }) {
  return (
    <article className="mb-2 p-2 border rounded shadow-sm bg-gray-200/50 text-black">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </article>
  );
}

export default Item;
