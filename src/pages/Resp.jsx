import React from "react";
import Back from "../components/Back";
import RespuestasContenido from "../components/RespuestasContenido";

export default function Resp({ datos }) {
  return (
    <div className="container p-4 ">
      <h1 className="fs-4 text-center">Formulario Firebase Data</h1>
      {datos.map((dato, id) => {
        return <RespuestasContenido dato={dato} key={id} />;
      })}
      <Back />
    </div>
  );
}
