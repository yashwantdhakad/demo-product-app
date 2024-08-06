import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
