"use client";
import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

function ItemList() {
  const [items, setItems] = useState(itemsData);

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}

export default ItemList;
