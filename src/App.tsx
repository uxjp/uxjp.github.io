import { Routes, Route } from "react-router-dom"
import './App.css';
import About from './pages/About.tsx';
import Test from './pages/Test.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Test />} />
      </Routes>
    </>
  )
}

export default App;
