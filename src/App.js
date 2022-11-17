import './App.css';
import StateUpdate from './views/StateUpdate';
import Home from './views/Home';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/state-update" element={ <StateUpdate/> } />
      </Routes>
    </div>
  );
}

export default App;
