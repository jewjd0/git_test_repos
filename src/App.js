import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './data.js';
import Board from './pages/board';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
