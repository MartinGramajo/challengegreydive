import React from "react";
import Back from "../components/Back";
import RespuestasContenido from "../components/RespuestasContenido";

export default function Resp({ datos }) {
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
