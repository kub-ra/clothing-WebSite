import './App.css';
import Navbar from'./components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Category from './components/Category';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
