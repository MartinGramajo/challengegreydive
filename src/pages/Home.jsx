import React from "react";
import Item from "../components/Item";
import datos from "../db.json";

export default function Home() {
  const items = datos.items;

  return (
    <div className="container p-5">
      <h1 className="text-center pb-5"> Challenge Greydive</h1>
      <form className="card card-body">
        {items.map((item) => (
          <Item dato={item} />
        ))}
      </form>
    </div>
  );
}
