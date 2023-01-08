import React, { useState } from "react";
import Item from "../components/Item";
import datos from "../db/db.json";
import { Spinner } from "react-bootstrap";

export default function Home({ addFirebase, loading }) {
  // state initial de los inputs
  const initialStateValues = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "Argentina",
    terms_and_conditions: "",
  };

  const items = datos.items;
  const [values, setValues] = useState(initialStateValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    addFirebase(values);
    setValues({ ...initialStateValues });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container p-md-4 my-2">
      {loading ? (
        <div className="d-flex justify-content-center align-content-center align-items-center p-5 my-5">
          <Spinner
            className="fs-6"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <form className="card card-body" onSubmit={handleSubmit}>
          {items.map((item) => (
            <Item dato={item} handleInputChange={handleInputChange} />
          ))}
        </form>
      )}
    </div>
  );
}
