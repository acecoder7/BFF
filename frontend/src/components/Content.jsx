import React from 'react'
import landingimg from '../assets/landingimg.png'
import logo from '../assets/logo.png'

function Content() {
    return (
        <div>
                <div className='landingtext'>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={logo} alt="logo" style={{ marginRight: '10px' }} />
                    <p>CODELET</p>
                 </div>

                <div className='smalltext'>
                    <h4>Challenge your code</h4>
                    <h4>elevate your skills</h4>
                    </div>
                     <h2 className='landinglogin'>Login as:</h2>
                </div>
                <div className="landingButtons">
                    <button className='landingAdmin'>Login</button>
                    <button className='landingStudent'>Signup</button>
                </div>
                <figure>
                    <img src={landingimg} alt="micro"  className="microscope" />
                </figure>
        </div>
    )
}

export default Content
