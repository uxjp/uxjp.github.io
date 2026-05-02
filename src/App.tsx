import { Routes, Route } from "react-router-dom"
import './App.css';
import About from './pages/About.tsx';
import Test from './pages/Test.tsx';

import Header from './Header.tsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Test />} />
      </Routes>
    </>
  )
}

export default App;
