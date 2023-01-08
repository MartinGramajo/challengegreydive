import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resp from './pages/Resp';
import Footer from './components/Footer';
import { useFirebase } from './hooks/useFirebase';


function App() {
  const { datos, addFirebase, loading } = useFirebase()

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
