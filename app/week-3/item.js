function Item ([ name, quantity, category ]) {
  return (
    <li>
      <div>
        <p>
          {name}
        </p>
        <span>
          {quantity}
        </span>
        <p>
          {category}
        </p>
      </div>
    </li>
  );
}