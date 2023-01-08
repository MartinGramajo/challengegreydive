import React from "react";

export default function RespuestasContenido({ dato }) {
  return (
    <div className="card card-body py-4 my-4">
      <p>
        <b> Nombre completo: </b>
        {dato.full_name}
      </p>
      <p>
        <b> Email: </b>
        {dato.email}
      </p>
      <p>
        <b>Fecha de Nacimiento: </b>
        {dato.birth_date}
      </p>
      <p>
        <b>País de origen : </b>
        {dato.country_of_origin}
      </p>
      <p>
        <b>¿Acepta los términos y condiciones? </b>
        {dato.terms_and_conditions === "on" ? (
          <p> Si, acepto los términos y condiciones </p>
        ) : (
          <p> No, acepto los términos y condiciones </p>
        )}
      </p>
    </div>
  );
}
