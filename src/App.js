import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import "./assets/css/style.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import CourseInfo from "./screens/CourseInfo";
import About from "./screens/About";
import Membership from "./screens/Membership";
import Services from "./screens/Services";
import Education from "./screens/Education";
import Careers from "./screens/Careers";
import JoinUs from "./screens/JoinUs";
import MemberForm from "./screens/MemberForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/service" element={<Services />} />
        <Route path="/education" element={<Education />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard/:userID" element={<Dashboard />} /> */}
        <Route path="/course/:courseID" element={<CourseInfo />} />
        <Route path="/membershipform/:membershipIndex" element={<MemberForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
