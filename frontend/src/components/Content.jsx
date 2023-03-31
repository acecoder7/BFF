import React from 'react'
import landingimg from '../assets/landingimg.png'
import logo from '../assets/ORBS.png'

function Content() {
    return (
        <div>
                <div className='landingtext'>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={logo} className='logoimg' alt="logo" style={{ marginRight: '10px' }} />
                    <p style={{fontFamily: 'Cygnito Mono'}}>Codelet</p>
                 </div>

                <div className='smalltext'>
                    <h4 className='subheading-landing'>Challenge your code</h4> 
                    <h4 className='subheading-landing'>Elevate your skills</h4>
                    </div>
                     
                </div>
                <div className="landingButtons">
                    <button className='landingAdmin' style={{fontFamily: 'Cygnito Mono'}}>.signup()</button>
                    <button className='landingStudent' style={{fontFamily: 'Cygnito Mono'}}>.login()</button>
                </div>
                <figure>
                    <img src={landingimg} alt="micro"  className="microscope" />
                </figure>
        </div>
    )
}

export default Content
