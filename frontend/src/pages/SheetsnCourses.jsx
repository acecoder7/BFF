import React from 'react'
import { useState, useEffect } from "react";
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import WelcomeBack from '../components/welcome';
const SheetsnCourses = () => {
  return (
    <div className='mainlayout'>
      <SideBar></SideBar>
      <SearchBar></SearchBar>
      <WelcomeBack></WelcomeBack>
      <div className="sheet-course">
  <div className="sheet-progress">
        <div className="sheet-header">
          <h3>Sheet Completion Progress</h3>
          <p>Striver's a2z DSA Sheet</p>
          <button className="detail-button">
            View Detail <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        {/* <img src={sheetImage} alt="Sheet Completion Progress"/> */}
  </div>
<br />
    <div className="course-progress">
      <div className="course-header">
        <h3>Course Completion Progress</h3>
        <p>Code with Harry JS</p>
        <button className="continue-button">
          Continue Watching <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      {/* <img src={courseImage} alt="Course Completion Progress"/> */}
      </div>
  
      </div>

    </div>
  )
}

export default SheetsnCourses;
