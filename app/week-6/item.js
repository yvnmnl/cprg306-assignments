import React from "react";

function Item({ name, quantity, category }) {
  return (
    <li>
        <div className="mb-2 p-2 border rounded shadow-sm bg-gray-200/50 text-black">
        <span>
          {name}
        </span>
        <span>
          <p>Quantity: {quantity}</p>
        </span>
        <span>
          <p>Category: {category}</p>
        </span>
      </div>
    </li>
  );
}

export default Item;