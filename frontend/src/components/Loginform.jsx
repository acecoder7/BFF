import React, { useState } from 'react';
import "./Loginform.css";
import Card from "./Card";
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
// import {database} from '../../utils/database'


const Loginform = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessages,setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "please provide username",
    noPassword: "please provide password"
  };

  const handleSubmit = (e) => {
    //prevent the page from reloading
    e.preventDefault();

    if(!username){
      //username input is empty
      setErrorMessages({name:"noUsername", message: errors.noUsername});
      return;
    }

    if(!password){
      //password input is empty
      setErrorMessages({name:"noPassword", message: errors.noPassword});
      return;
    }

    //search for user credentials
    // const currentUser = database.find((user) => user.username === username);

    // if(currentUser){
    //   if(currentUser.password != password){
    //     //wrong password
    //     setErrorMessages({name:"password", message: errors.password});
    //   }
    //   else{
    //     //correct password login user
    //   }

    // }
    else{
      //username doesn't exist in the database
      setErrorMessages({name:"Username", message: errors.username});
    }

  };

  //Render Error Messages
  const renderErrorMsg = (name) =>
   name === errorMessages.name && (
    <p className="error_msg">{errorMessages.message}</p>
   );

  return <Card>
    
    <h1 className='title'>Log In</h1>
    <hr className="horizontal-line" />
    <form onSubmit={handleSubmit}>
        <div className='input_Container'>
            <input type="text" placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)} />
            {renderErrorMsg("username")}
            {renderErrorMsg("noUsername")}
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {renderErrorMsg("password")}
            {renderErrorMsg("noPassword")}
        </div>
        <input type='submit' value=".login()" className='login_button' style={{fontFamily: 'Cygnito Mono'}}/>
    </form>
    <div className='link_container'>
        <a href="" className='small'>
           Forgot password?
        </a>
    </div>
    <div className='icons'><FaGoogle style={{ color: 'black', fontSize: '24px' }} />
    <FaGithub style={{ color: 'black', fontSize: '24px' }} />
    <FaTwitter style={{ color: 'black', fontSize: '24px' }} />
    </div>



  </Card>;
}

export default Loginform
