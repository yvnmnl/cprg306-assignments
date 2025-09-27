import React from "react";

function Item({ name, quantity, category }) {
  return (
    <li>
      <div>
        <span>
          {name}
        </span>
        <span>
          {quantity}
        </span>
        <span>
          {category}
        </span>
      </div>
    </li>
  );
}

export default Item;