import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png';
import defaultDp from "../Images/user.png";

const  NavBar =() => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const userEmail =JSON.parse(localStorage.getItem('loggedInUserEmail'));
  const userGmail =JSON.parse(localStorage.getItem('loggedInUserGmail'));
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
};
const logout = async () =>{
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('loggedInUserGmail');
    toggleDropdown();
  }

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className='logo'>
      <a href="/" className="nav__brand">
      <img
        alt="Logo"
        src= {Logo}
        style={{ height: '30px', width: '120px' }}  
      />
      </a>
    </div>
      
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/programmes" className="nav__link">
            Our Programmes
          </a>
        </li>
        <li className="nav__item">
          <a href="/clubs" className="nav__link">
            Clubs
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="/contact" className="nav__link">
            Contact Us
          </a>
          
        </li>
       
      </ul>
      {/* <button className='loginButton' ><Link to="/login" className="navLink">Login</Link></button> */}
      {console.log("userGmail:",userEmail)}
           
                {userEmail ?  <div  onClick={toggleDropdown}>
                    <div className='dropDown'><p>{userEmail.fullname}</p>
                                              <img className="imageDp" src={defaultDp} alt="User Profile" />
                                              </div>
                 </div>: userGmail ?  <div  onClick={toggleDropdown}> 
                    <div className='userEmail'>
                        <p>{userGmail.given_name}</p>
                        <img src={userGmail.picture} alt="User Profile" />
                    </div>
                </div> : (
                    <div className='loginButton'><Link  to="/login" className="navLink">Login</Link></div>
                )}
                {showDropdown && (
                    <div className='dropdownContent' >
                        <Link to="/dashboard1/">My Profile</Link>
                        <Link to="/"><div className='loginButton' onClick={logout}>Sign Out</div></Link>
                    </div>
                )}

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> 
    </nav>
  );
};

export default NavBar;