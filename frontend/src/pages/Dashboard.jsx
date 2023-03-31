import React from 'react'
import { useState, useEffect } from "react";
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import chart from '../assets/completion-progress.png';
import profile3 from "../assets/profile3.png"
import profile2 from "../assets/profile2.png"
import profile1 from "../assets/profile1.png"
const Dashboard = () => {
  return (
    <div className='mainlayout'>
      <SideBar></SideBar>
      <SearchBar></SearchBar>
      <div class="flex-container">
        <div class="flex-item1"><img src={chart} alt="chart" className='chart'/></div>
        <div class="flex-item2">
          <div className="completion-progress">
          <div className="completion-header">
            <h3 style={{fontWeight:'lighter'}}>Completion Progress</h3>
            <div className="dividerc" style={{marginBottom: '5px',width:'220px'}}></div>
          </div>
          <div className="completion-header">
            <h4>Dynamic Programming</h4>
            <p>Chapter 4</p>
          </div>
          <div className="completion-header">
            <h4>Javascript Fundamentals</h4>
            <p>Chapter 2</p>
          </div>
          <div className="completion-header">
            <h4>Graphs Algorithms</h4>
            <p>Chapter 1</p>
          </div>
      </div>

        </div>
        <div class="flex-item3">
        <div className="messages">
  <h2 style={{color: 'white', fontSize: '18px', fontWeight:'normal' }}>Messages</h2>
  <div className="divider" style={{marginBottom: '20px'}}></div>
  <ul className="message-list">
    <li className="message">
      <img src={profile1} alt="Profile 1" style={{width: '50px', height: '50px', borderRadius: '50%'}} />
      <div className="message-info">
        <div className="message-header">
          <h3 style={{color: 'white', fontSize: '18px', fontWeight: 'bold'}}>John Doe</h3>
          <span style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px'}}>3:24 PM</span>
        </div>
        <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginTop: '8px'}}>Hey, how's it going?</p>
      </div>
    </li>
    <li className="message">
      <img src={profile2} alt="Profile 2" style={{width: '50px', height: '50px', borderRadius: '50%'}} />
      <div className="message-info">
        <div className="message-header">
          <h3 style={{color: 'white', fontSize: '18px', fontWeight: 'bold'}}>Jane Smith</h3>
          <span style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px'}}>2:57 PM</span>
        </div>
        <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginTop: '8px'}}>How was your weekend?</p>
      </div>
    </li>
    <li className="message">
      <img src={profile3} alt="Profile 3" style={{width: '50px', height: '50px', borderRadius: '50%'}} />
      <div className="message-info">
        <div className="message-header">
          <h3 style={{color: 'white', fontSize: '18px', fontWeight: 'bold'}}>Bob Johnson</h3>
          <span style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px'}}>1:36 PM</span>
        </div>
        <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginTop: '8px'}}>Can we meet tomorrow?</p>
      </div>
    </li>
  </ul>
</div>

        </div>
        <div class="flex-item4"></div>
      </div>

    </div>
  )
}

export default Dashboard;
