import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Students from "./Pages/Students";
import Attendance from './Pages/Attendance';
// import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;
