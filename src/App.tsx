import { Routes, Route } from "react-router-dom"
import './App.css';
import About from './pages/About.tsx';
import Post1 from './pages/Post1.tsx';
import Post2 from './pages/Post2.tsx';
import Post3 from './pages/Post3.tsx';

import Header from './Header.tsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Post1" element={<Post1 />} />
        <Route path="/Post2" element={<Post2 />} />
        <Route path="/Post3" element={<Post3 />} />
        <Route path="*" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
