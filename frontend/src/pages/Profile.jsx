import React from 'react'
import { useState, useEffect } from "react";
import ProfileBar from '../components/ProfileBar';
import coins from '../assets/coins.png';
import ringchart from '../assets/ringchart.png';
import button1 from '../assets/button1.png';
import button2 from '../assets/button2.png';
import button3 from '../assets/button3.png';
const Profile = () => {
  return (
    <div className='mainlayout'>
      <ProfileBar></ProfileBar>
      <div className="containerq">
        <div className="left-columnq">
          <p style={{ marginLeft: "18px" ,fontFamily: 'Cygnito Mono',fontSize:'24px',color:'white'}}>Solved problems</p> 
          <div className="dividerp"></div>
          <img src={ringchart} alt="ring" style={{width:'100px',height:'100px',marginLeft:'10%'}}></img>

        </div>
        <div className="right-columnq">
          <p style={{ marginLeft: "18px" ,fontFamily: 'Cygnito Mono',fontSize:'24px' ,color:'white'}}>Coins Earned</p>
          <div className="dividerp"></div>
          <img src={coins} alt="coin" style={{width:'100px',height:'100px',marginLeft:'60%'}}></img>
        </div>
        <div className="bottom-rowq">
        <span style={{marginTop:"20px", display: 'flex',marginLeft:"5%"}}>
          <img src={button1} alt="button1" style={{width:'190px',height:'25px', display:'inline-block'}} />
          <img src={button2} alt="button2" style={{width:'190px',height:'25px', display:'inline-block'}} />
          <img src={button3} alt="button3" style={{width:'170px',height:'25px', display:'inline-block'}} />
          <button style={{backgroundColor:'black',borderColor:'none',borderWidth:'0px',padding:' 1px 20px',cursor: 'pointer'}}> <p style={{color:'rgba(26, 133, 255, 1)',margin:'0'}}>View all</p> </button>
        </span>
        <div className="dividerp"></div>
        <div className="questionsp">
          <div className="qrow" style={{color:'white',fontSize:'18px',background: 'rgba(25, 132, 255, 0.18)',boxShadow: 'inset 5px 0px 10px 6px rgba(69, 69, 69, 0.25)',borderRadius: '12px'}}>
            Count square submatrices with all ones
          </div>
          <div className="qrow" style={{color:'white',fontSize:'18px'}}>
            Partition Array for Maximal Sum
          </div>
          <div className="qrow" style={{color:'white',fontSize:'18px',background: 'rgba(25, 132, 255, 0.18)',boxShadow: 'inset 5px 0px 10px 6px rgba(69, 69, 69, 0.25)',borderRadius: '12px'}}>
            Maximal Triangle
          </div>
          <div className="qrow" style={{color:'white',fontSize:'18px'}}>
            Burst Balloons
          </div>
          <div className="qrow" style={{color:'white',fontSize:'18px',background: 'rgba(25, 132, 255, 0.18)',boxShadow: 'inset 5px 0px 10px 6px rgba(69, 69, 69, 0.25)',borderRadius: '12px'}}>
            Parsing a Boolean Expression
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
