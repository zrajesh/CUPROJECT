import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import AluminiFeed from "./components/AluminiFeed";
import AluminiLogin from "./components/AluminiLogin";
import AluminiReg from "./components/AluminiReg";
import Login from "./components/Login";
import MsdeFeed from "./components/MsdeFeed";
import MsdeReg from "./components/MsdeReg";
import MsdLogin from "./components/MsdLogin";
import StdentFeed from "./components/StdentFeed";
import StudentReg from "./components/StudentReg";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/student" element={<StudentReg />} />
        <Route path="/register/msde" element={<MsdeReg />} />
        <Route path="/register/alumini" element={<AluminiReg />} />
        <Route path="/feed/student" element={<StdentFeed />} />
        <Route path="/feed/alumini" element={<AluminiFeed />} />
        <Route path="/feed/msde" element={<MsdeFeed />} />
        <Route path="/login/student" element={<Login />} />
        <Route path="/login/msde" element={<MsdLogin />} />
        <Route path="/login/alumini" element={<AluminiLogin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
