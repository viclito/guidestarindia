import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Hompage from '../pages/Hompage'
import Login from '../pages/Login';

function App() {

  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Hompage/>}/>
            <Route path="/login" element={<Login/>}/>
            
        </Routes>
    </Router>
    </>
  )
}

export default App
