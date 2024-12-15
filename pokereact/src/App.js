import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Pokemon from './components/pokemon';
import PokeLista from './components/pokelista';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PokeLista />}/>
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
