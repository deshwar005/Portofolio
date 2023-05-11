import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import About from './Components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" Component={Home} />
        <Route  path="/contact" Component={Contact} />
        <Route  path="/contact" Component={Projects} />
        <Route  path="/about" Component={About} />
      </Routes>
    </Router>
  );
};

export default App;