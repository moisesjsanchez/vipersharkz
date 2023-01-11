import './App.css';
import Home from './endpoints/Home';
import { Routes, Route } from 'react-router-dom';
import Ata from './endpoints/Ata';
import David from './endpoints/David';
import Jason from './endpoints/Jason';
import Jonathan from './endpoints/Jonathan';
import Moises from './endpoints/Moises';
import Sergio from './endpoints/Sergio';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ata" element={ <Ata />} />
        <Route path="/David" element={ <David />} />
        <Route path="/Jason" element={ <Jason />} />
        <Route path="/Jonathan" element={ <Jonathan />} />
        <Route path="/Moises" element={ <Moises />} />
        <Route path="/Sergio" element={ <Sergio />} />
      </Routes>
    </div>
  );
}

export default App;
