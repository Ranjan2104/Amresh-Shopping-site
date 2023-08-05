import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Appbar from './Components/Appbar';

function App() {
  return (
    <div>
      <Router>
        <Appbar />
        <Routes>
          <Route exact path='/' element = { <Home/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
