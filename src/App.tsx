import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/test-2/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
