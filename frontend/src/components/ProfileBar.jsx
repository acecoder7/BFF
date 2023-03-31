import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import profile from '../assets/profileimg.png';
import trophy from '../assets/trophy.png';
import task from '../assets/task.png';
import buddy from '../assets/buddy.png';

function ProfileBar() {
  const [githubUsername, setGithubUsername] = useState('');
  const [linkedinUsername, setLinkedinUsername] = useState('');

  useEffect(() => {
    // Fetch GitHub username
    fetch('https://api.github.com/users/your-github-username')
      .then(response => response.json())
      .then(data => setGithubUsername(data.login));

    // Fetch LinkedIn username
    fetch('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer your-linkedin-access-token`
      }
    })
      .then(response => response.json())
      .then(data => setLinkedinUsername(data.localizedFirstName));
  }, []);
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };

  async function handleLogOut() {
    const res = await fetch("http://localhost:3007/api/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    toast.success("Logout Successful");
    navigate("/Login");
  }

  return (
    <div className="sidebarp">
      <div className="sidebar-headerp">
        <div className="profilep">
        <img src={profile} alt="Logo" />
        <div className="profile-tag">
          <p style={{fontFamily: 'Cygnito Mono',fontSize:'18px',color:'white'}}>Adeola Ayo</p>
          <p style={{fontSize:'12px',color:'white'}}>shadowhunter37</p>
          <button id="editprofile">.editprofile()</button>
        </div>
        </div>
      </div>
      <div className="social-media-div">
      <div className="social-media">
        <div className="icon">
          <i className="fab fa-github" style={{ verticalAlign: "middle" }} />
        </div>
        <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>{githubUsername}</p>
        </div>
        <div className="social-media">
          <div className="icon">
            <i className="fab fa-linkedin" style={{ verticalAlign: "middle" }} />
          </div>
          <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>your-linkedin-username{linkedinUsername}</p>
    </div>
    </div>
    <div className="dividerp"></div>
    <div className="skills-div">
    <p style={{fontFamily: 'Cygnito Mono',fontSize:'18px',color:'white',marginLeft:'10%'}}>Skills</p>
      <div className="skills">
      <i class="fa fa-circle" style={{fontSize:'8px',color:'red',marginRight:'10px'}}></i>
        <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>DSA</p>
        </div>
        <div className="skills">
        <i class="fa fa-circle" style={{fontSize:'8px',color:'yellow',marginRight:'10px'}}></i>
          <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>Development</p>
    </div>
    <div className="skills">
          <i class="fa fa-circle" style={{fontSize:'8px',color:'green',marginRight:'10px'}}></i>
          <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>Machine Learning</p>
    </div>
    </div>
    <div className="dividerp"></div>
    <div className="skills-div">
    <p style={{fontFamily: 'Cygnito Mono',fontSize:'18px',color:'white',marginLeft:'10%'}}>Codelet stats</p>
      <div className="skills">
      <img src={trophy} style={{height:'20px',width:'20px',color:'red',marginRight:'10px'}}></img>
        <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>1v1 won</p>
        </div>
        <div className="skills">
        <img src={task} style={{height:'20px',width:'20px',color:'yellow',marginRight:'10px'}}></img>
          <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>Contests attempted</p>
    </div>
    <div className="skills">
          <img src={buddy} style={{height:'20px',width:'20px',color:'green',marginRight:'10px'}}></img>
          <p style={{ color: "white", display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}>Code buddies</p>
    </div>
    </div>  
    </div>
  );
}

export default ProfileBar;
