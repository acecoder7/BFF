import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SheetsnCourses from "./pages/SheetsnCourses";
import AddBuddies from "./pages/AddBuddies";
function App() {
  const location = useLocation();
  return (
    <>
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addbuddies" element={<AddBuddies />} />
        <Route path="/sheetsncourses" element={<SheetsnCourses />} />
      </Routes>
    </>
  );
}

export default App;
