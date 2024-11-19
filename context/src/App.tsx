import { Text } from '@chakra-ui/react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='App'>
      <Text>Context</Text>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
