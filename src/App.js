import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import './assets/css/style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/ProjectInfo/:projectIndex" element={<ProjectInfo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
