import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resp from './pages/Resp';
import { db } from "./config/firebase"


function App() {
  const [loading, setLoading] = useState(false);

  const addFirebase = async (dataObject) => {
    setLoading(true);
    await db.collection('Formulario').doc().set(dataObject)
    setLoading(false);
    console.log('nuevo campo agregado en firebase')
  };

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home addFirebase={addFirebase} loading={loading} />} />
        <Route path="/respuestas" element={<Resp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
