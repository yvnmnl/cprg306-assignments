import React from "react";

function Item({ name, quantity, category, onSelect }) {
  return (
    <article className="p-2 text-black cursor-pointer hover:bg-gray-100 transition" onClick={onSelect}>
      <p className="font-semibold"> {name} </p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </article>
  );
}

export default Item;
