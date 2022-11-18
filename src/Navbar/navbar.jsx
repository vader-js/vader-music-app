import SearchIcon from '@mui/icons-material/Search';
import "./navbar.css";
import firstlogo from "../images/firstlogo.png";
import secondlogo from "../images/secondlogo.png";
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from "../images/Home.png";
import playlist from "../images/playlist.png";
import radio from "../images/radio.png";
import videos from "../images/videos.png";
import profile from "../images/profile.png";
import Vector from "../images/Vector.png";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';

function Navbar() {
  const sidepanel= useRef(null);
  const [active, setActive] = useState(null);

  
  useEffect(()=>{
   setActive(sidepanel.current);

  },[active])

  const HandleClick=()=>{
    return active.classList.add("active");
  }

  const HandleCancel=()=>{
    return active.classList.remove("active");
  }
 return (
    <div className='navbarwrapper'>
     <div className="logo">
        <div className="firstlogo">
            <img src={firstlogo} alt="music halfnote" />
        </div>
        <div className="secondlogo">
            <img src={secondlogo} alt="music note" />
        </div>
     </div> 
     <div className="searchinput">
        <input type="text" name="searchinput" id="" placeholder='search artist' />
        <span className="searchicon"><SearchIcon fontSize='inherit' color='inherit'/></span>
     </div>  
     <div className="hamburgermenu" onClick={HandleClick}>
      <span className="menu"></span>
      <span className="menu"></span>
     </div>
     <div className="sidepanel" ref={sidepanel}>
      <div className="X" onClick={HandleCancel}><CloseOutlinedIcon/></div>
      <ul className="panellist">
        <Link to={"/"}><li className="list"><div className="panelsvg"><img src={Home} alt="" />
        <p>Home</p></div></li></Link>
        <li className="list"><div className="panelsvg"><img src={playlist} alt="" /> <p>My collection</p></div></li>
        <li className="list"><div className="panelsvg"><img src={radio} alt="" /> <p>Radio</p></div> </li>
        <li className="list"><div className="panelsvg"><img src={videos} alt="" /> <p>Music video</p></div></li>
        <li className="list"><div className="panelsvg"><img src={profile} alt="" /> <p>Profile</p></div> </li>
        <li className="list"> <div className="panelsvg"><img src={Vector} alt="" /> <p>Log out</p></div></li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar
