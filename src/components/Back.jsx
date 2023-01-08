import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import back from "../assets/back.png";

export default function Back() {
  return (
    <div className="fixed-bottom me-auto d-flex justify-content-end mb-4 px-2">
      <Link to="/" className="text-decoration-none ">
        <Image src={back} alt="flecha de regreso al home " fluid />
      </Link>
    </div>
  );
}
