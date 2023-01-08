import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resp from './pages/Resp';
import { db } from "./config/firebase"
import Footer from './components/Footer';


function App() {
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState([])

  // guardar datos en firebase
  const addFirebase = async (dataObject) => {
    setLoading(true);
    await db.collection('Formulario').doc().set(dataObject)
    setLoading(false);
    console.log('nuevo campo agregado en firebase')
  };

  // Obtener los datos de firebase 
  const getData = async () => {
    db.collection('Formulario').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
      })
      setDatos(docs);
    });
  }

  //Mostrar las respuestas de firebase
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='fixed-footer'>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home addFirebase={addFirebase} loading={loading} />} />
          <Route path="/respuestas" element={<Resp datos={datos} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
