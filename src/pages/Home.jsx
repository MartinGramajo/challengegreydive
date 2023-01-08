import React, { useState } from "react";
import Item from "../components/Item";
import datos from "../db/db.json";

export default function Home({ addFirebase }) {
  const items = datos.items;
  // state initial de los inputs
  const initialStateValues = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "Argentina",
    terms_and_conditions: "",
  };

  const [values, setValues] = useState(initialStateValues);
  console.log("file: Home.jsx:17 ~ Home ~ values", values);

  const handleSubmit = (e) => {
    e.preventDefault();
    addFirebase(values);
    setValues(...initialStateValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container p-4">
      <h1 className="text-center pb-2"> Challenge Greydive</h1>
      <form className="card card-body" onSubmit={handleSubmit}>
        {items.map((item) => (
          <Item dato={item} handleInputChange={handleInputChange} />
        ))}
      </form>
    </div>
  );
}
