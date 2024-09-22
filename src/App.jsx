import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/projects";
import ParticlesComponent from './Components/link'

function App() {
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] absolute inset-0">
      <ParticlesComponent/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
