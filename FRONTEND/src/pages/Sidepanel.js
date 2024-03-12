import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../Style/Sidepanel.css';

const SidePanel = () => {
  const [userData, setUserData] = useState({
    fullname: '',
    picture: '',
    description: '',
  });

  const [editing, setEditing] = useState(false);

  const sideTextRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/userprofile/${fullname}');
        if (response.ok) {
          setUserData(response.data);
          console.log('Successfully obtained user data:', response.data);
        } else {
          console.error('User profile fetching failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditButtonClick = async () => {
    if (editing) {
      try {
        const response = await axios.put('http://localhost:5000/userprofile', userData);
        if (response.ok) {
          console.log('User profile updated successfully:', response.data);
          // Optionally update local state to reflect changes
          setUserData(response.data);
        } else {
          console.error('Error updating user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    }
    setEditing(!editing);
  };

  const handleFocus = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  return (
    <div className="side-panel">
      <div className="sideCircle">
        <img src={userData.picture} alt="Profile" />
      </div>
      <div className="sideText" ref={sideTextRef}>
        <div>
          <h3 contentEditable={editing ? 'true' : 'false'} onFocus={handleFocus} onBlur={handleBlur}>{userData.fullname}</h3>
          <p contentEditable={editing ? 'true' : 'false'} onFocus={handleFocus} onBlur={handleBlur}>{userData.description}</p>
        </div>
      </div>

      <button className="edit-profile-button" onClick={handleEditButtonClick}>
        {editing ? 'Save' : 'Edit Profile'}
      </button>

      <div className="settings-logout-container">
        <button className="settings-button">Settings</button>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default SidePanel;
