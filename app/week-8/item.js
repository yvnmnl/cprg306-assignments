import React from "react";

function Item({ name, quantity, category }) {
  return (
    <article className="p-2 text-black">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </article>
  );
}

export default Item;
