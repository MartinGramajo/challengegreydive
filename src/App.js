import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resp from './pages/Resp';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/respuestas" element={<Resp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
