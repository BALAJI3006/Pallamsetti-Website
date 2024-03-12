import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';
  import SidePanel from './Sidepanel';
  import '../Style/contactus.css';
  import '../Style/dashboard1.css';
  import '../Style/scrollbar.css';

  const Dashboard = () => {
    const handleFileInputChange = (event) => {
      const files = event.target.files;
      console.log(files);
      // Do something with the selected file(s)
    };

    const [activities, setActivities] = useState([]);
  const [suggestedActivities, setSuggestedActivities] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/activities');
        if (response.ok) {
          const activities = await response.json(); // Parse the JSON response
          setActivities(activities);
          console.log('Successfully obtained activities data:', activities);
        } else {
          console.error('Activities fetching failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetching activities:', error);
      }
    }
  
    fetchData(); // Call the function inside useEffect
  }, []);
  
  // useEffect(() => {
  //   // Fetch activities data from the backend
  //   axios.get('/activities')
  //     .then(response => {
  //       setActivities(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching activities:', error);
  //     });
  // }, []);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/suggestedActivities');
        if (response.ok) {
          const suggestedActivities = await response.json(); // Parse the JSON response
          setSuggestedActivities(suggestedActivities);
          console.log('Successfully obtained activities data:', suggestedActivities);
        } else {
          console.error('Activities fetching failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetching activities:', error);
      }
    }
  
    fetchData(); // Call the function inside useEffect
  }, []);
 

    // useEffect(() => {
    //   // Replace the following placeholder data with data from the actual API
    //   setActivities([
    //     {
    //       title: 'Activity 1',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //       image: 'url_to_image_1', // Add the image URL property
    //     },
    //     {
    //       title: 'Activity 2',
    //       description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //       image: 'url_to_image_2', // Add the image URL property
    //     },
    //     {
    //       title: 'Activity 3',
    //       description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //       image: 'url_to_image_3', // Add the image URL property
    //     },
    //     {
    //       title: 'Activity 4',
    //       description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //       image: 'url_to_image_4', // Add the image URL property
    //     },
    //     {
    //       title: 'Activity 5',
    //       description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //       image: 'url_to_image_4', // Add the image URL property
    //     },
      
    //   ]);
    // }, []);


   
  
    return (
      <div className="app">
        <NavBar />
        <div className='mainpart'>
          <SidePanel />
          <div className="activities-container">
            <div className="activity-header">
              <div className='date'> 06 MAR</div>
              <div className='Activity'>Todays Activity</div>
            </div>
            <h3 style={{marginLeft:'20px'}}>ACTIVITIES</h3>
            {activities.length === 0 ? (
              <p className="placeholder-message">No activities available.</p>
            ) : (
              <div className="activity-list">
                {activities.map((activity, index) => (
                  <div className="activity-item" key={`activity-${index}`}>
                    <img src={activity.image} alt={activity.title} />
                    <div className="title-description-container">
                      <h2>{activity.title}</h2>
                      <p >{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}  
            <h3 style={{marginLeft:'20px',marginTop:'20px'}}>SUGGESTED FOR YOU</h3>
            {suggestedActivities.length === 0 ? (
              <p className="placeholder-message">No suggested activities available.</p>
            ) : (
              <div className="suggested-activity-list">
                {suggestedActivities.map((activity, index) => (
                  <div className="suggested-activity-item" key={`suggested-activity-${index}`}>
                    <img src={activity.image} alt={activity.title} />
                    <div className="title-description-container">
                      <h2>{activity.title}</h2>
                      <p>{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Dashboard;