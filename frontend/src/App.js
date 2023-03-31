import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SheetsnCourses from "./pages/SheetsnCourses";
import AddBuddies from "./pages/AddBuddies";
import Login from "./pages/Loginpage.jsx";
import SignUp from "./pages/Signpage";
import LandingPage from "./pages/Landingpage";
function App() {
  const location = useLocation();
  return (
    <>
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addbuddies" element={<AddBuddies />} />
        <Route path="/sheetsncourses" element={<SheetsnCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
