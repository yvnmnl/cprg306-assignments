import React from "react";

function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-items-center flex-col border-1 border-style:solid rounded-sm p-2 mx-22 mb-2">
      <div>
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