import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/projects";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
