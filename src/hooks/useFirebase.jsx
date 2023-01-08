import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../config/firebase";

export const useFirebase = () => {
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState([]);

  // guardar datos en firebase
  const addFirebase = async (dataObject) => {
    setLoading(true);
    await db.collection("Formulario").doc().set(dataObject);
    setLoading(false);
    Swal.fire({
      icon: "info",
      html: `<h1 class="fs-4">Formulario enviado</h1>
    <br>
    <a class="text-info text-decoration-none " href="/respuestas">Ver Respuestas</a>
    `,
    });
  };

  // Obtener los datos de firebase
  const getData = async () => {
    db.collection("Formulario").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    });
  };

  //Mostrar las respuestas de firebase
  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    datos,
    addFirebase,
  };
};
