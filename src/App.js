import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resp from './pages/Resp';
import { db } from "./config/firebase"


function App() {


  const addFirebase = async (dataObject) => {
    await db.collection('Formulario').doc().set(dataObject)
    console.log('nuevo campo agregado en firebase')
  };

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home addFirebase={addFirebase} />} />
        <Route path="/respuestas" element={<Resp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
