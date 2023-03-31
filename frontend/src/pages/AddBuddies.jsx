import React from 'react'
import { useState, useEffect } from "react";
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import WelcomeBack from '../components/welcome';
const AddBuddies = () => {
  return (
    <div className='mainlayout'>
        <SideBar></SideBar>
        <SearchBar></SearchBar>
        <WelcomeBack></WelcomeBack>
        <div className="add-buddies">
  <h2 style={{color: 'white', fontSize: '24px', margin: '20px',fontFamily: 'Cygnito Mono'}}>Add to Your Network</h2>
  <div className="divider" style={{marginBottom: '20px'}}></div>
  <ul className="buddy-list">
    <li className="buddy">
      <div className="buddy-info">
        <img src="./assets/profile1.jpg" alt="Profile 1" style={{width: '80px', height: '80px', borderRadius: '50%'}} />
        <h3 style={{color: 'white', fontSize: '18px', marginLeft: '20px',fontWeight:'lighter'}}>John Doe</h3>
      </div>
      <button className="add" style={{backgroundColor: 'white', color: 'black',fontFamily: 'Cygnito Mono'}}>.add()</button>
    </li>
    <li className="buddy">
      <div className="buddy-info">
        <img src="./assets/profile2.jpg" alt="Profile 2" style={{width: '80px', height: '80px', borderRadius: '50%'}} />
        <h3 style={{color: 'white', fontSize: '18px', marginLeft: '20px',fontWeight:'lighter'}}>Jane Smith</h3>
      </div>
      <button className="add" style={{backgroundColor: 'white', color: 'black',fontFamily: 'Cygnito Mono'}}>.add()</button>
    </li>
    <li className="buddy">
      <div className="buddy-info">
        <img src="./assets/profile3.jpg" alt="Profile 3" style={{width: '80px', height: '80px', borderRadius: '50%'}} />
        <h3 style={{color: 'white', fontSize: '18px', marginLeft: '20px',fontWeight:'lighter'}}>Bob Johnson</h3>
      </div>
      <button className="add" style={{backgroundColor: 'white', color: 'black',fontFamily: 'Cygnito Mono'}}>.add()</button>
    </li>
    <div id='bottom-butt'>
  <button className="add" style={{backgroundColor: 'white', color: 'black', fontFamily: 'Cygnito Mono', marginRight: '20px'}}>.accept_all()</button>
  <button className="add" id="view" style={{backgroundColor: 'white', color: 'white', fontFamily: 'Cygnito Mono'}}>.view_more()</button>
</div>

    


  </ul>
</div>

        
      </div>
  )
}

export default AddBuddies;
