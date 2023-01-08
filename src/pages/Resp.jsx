import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import RespuestasContenido from "../components/RespuestasContenido";

export default function Resp({ datos }) {
  const [loading, setLoading] = useState(false);

  const cargando = () => {
    setLoading(true);
  };

  const completado = () => {
    setLoading(false);
  };

  return (
    <div className="container p-4 ">
      <h1 className="fs-4 text-center">Formulario Firebase Data</h1>
      <div>
        {datos.map((dato) => {
          return (
            <div>
              <RespuestasContenido dato={dato} />
            </div>
          );
        })}
      </div>
      <Back />
    </div>
  );
}
