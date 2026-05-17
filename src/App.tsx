import { Routes, Route } from "react-router-dom"
import './App.css';
import About from './pages/About.tsx';
import About2 from './pages/About2.tsx';
import About3 from './pages/About3.tsx';
import Test from './pages/Test.tsx';

import Header from './Header.tsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
        <Route path="*" element={<Test />} />
      </Routes>
    </>
  )
}

export default App;
