import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import "./assets/css/style.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import CourseInfo from "./screens/CourseInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/:userID" element={<Dashboard />} />
        <Route path="/course/:courseID" element={<CourseInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
