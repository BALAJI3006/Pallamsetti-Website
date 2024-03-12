import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../Style/Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css';
import Mobile from "../Images/Mobile1.png";
import Google from "../Images/Google.png";
import Green from '../Images/GreenComputing.png';
import slider1 from '../Images/Slider1.png';
import Program1 from '../Images/Program1.png';
import Webinar from '../Images/webinars1.png';
import About from '../Images/About.png';
import Course from "../Images/courses.png";
import Workshop from "../Images/workshops.png";
import { Link } from 'react-router-dom';
const ImageSlider = () => (
  <div className='sliderContainer'>
    <Carousel showThumbs={false} autoPlay={false} infiniteLoop interval={2000} showStatus={false} className='carouselContainer'>
      <div>
        <img alt="Slide 1" src={slider1} className="carouselImage" />
      </div>
      <div>
        <img alt="Slide 2" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752088408094/2.png?ex=65d9877b&is=65c7127b&hm=e780502dd16513f61f7f76c66343774757556433a2db3abe78825f00a2b27c29&" className="carouselImage" />
      </div>
      <div>
        <img alt="Slide 3" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752545583144/3.png?ex=65d9877b&is=65c7127b&hm=fdbb401e6ca44b0dde5a61315c99f36d76eea6784d5b0f1e8818fe0d37f876c6&" className="carouselImage" />
      </div>
    </Carousel>
  </div>
);


const EventCard = ({ title, description, imageUrl }) => (
  <Card className='eventCard' style={{ boxShadow: '4px 6px 10px rgba(255, 254, 254, 0.5)' }}>
    <CardMedia
      component="img"
      alt={title}
      height="200"
      image={imageUrl}
      className='eventImage'
    />
    <CardContent className='eventCardContent'>
      <Typography variant="h5" className='eventTitle'>
        {title}
      </Typography>
      <Typography variant="body2" className='eventDescription'>
        {description}
      </Typography>
      <Link to="/enroll"><button className='button-name'>Enroll Now  </button></Link>
    </CardContent>
  </Card>
);
<hr></hr>

const ProgramGrid = () => (
  <div className='programGrid'>
    <div className='programRow1'>
      <div className='programCard'>
        <img alt="Program 1" src={Course} className='programImage' />
        <div className='programName'>Courses</div>
      </div>
      <div className='programCard pc2'>
        <img alt="Program 2" src={Workshop} className='programImage' />
        <div className='programName'>Workshops</div>
      </div>
    </div>
    <div className='programRow2'>
      <div className="programCard pc3">
        <img alt="Program 3" src={Program1} className=" programImage" />
        <div className='programName'>Internships</div>
      </div>
      <div className='programCard pc4'>
        <img alt="Program 4"  src={Webinar} className=" programImage" />
        <div className='programName'>Webinars</div>
      </div>
    </div>


  </div>
);

const ClubCard = ({ imageSrc, clubName }) => {
  return (
    <div className="card">
      <div className="card-details">
        <img className='cardImages' src={imageSrc} alt={clubName} />
        <p className="text-title">{clubName}</p>
        <p className="text-body">Here are the details of the card</p>
      </div>
      <button className="card-button">Join Now</button>
    </div>
  );
};

const MainContent = () => (
  <main className='main'>
    <ImageSlider />
    <h1 style={{marginTop:'3vw'}}>UPCOMING EVENTS</h1>
    <div className='eventsSection'>
      <EventCard
        title="Mobile App Development By Flutter"
        description="Description of event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl={Mobile}
      />
      <EventCard
        title="Google Cloud Platform"
        description="Description of event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl={Google}
      />
      <EventCard
        title="Green Computing"
        description="Description of event 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl={Green}
      />
    </div>



    <h1>Our PROGRAMMES</h1>
    <ProgramGrid />



    <h1>OUR CLUBS</h1>
    <div className="ClubCard" style={{
      display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>

    <ClubCard  imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205786539808784394/15.png?ex=65d9a339&is=65c72e39&hm=cd0999048c7718602ec123238ee9168ab72b5816fe1ebf28138bab7a9fbcb91d&" clubName="Innovation Club" />
      <ClubCard  imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787286873047080/12.jpg?ex=65d9a3eb&is=65c72eeb&hm=0f2ea5049c2bbaaa928563a0439a187735fec06ab9d6686827a4dc953c7b427b&" clubName="Technology Club" />
      <ClubCard  imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787387301732393/14.jpg?ex=65d9a403&is=65c72f03&hm=6b9bb339bd0cf9f542ba52daf632df6829846fc6040e9cace1eb9d6c548e8bab&" clubName="R&D Club" />

    </div>

  </main>
);

const AboutSection = () => (
    <div className='aboutsection'>
      <div className='aboutSection1'>
        <div className='aboutSection2'>
        <img
          className='aboutusImage2'
        src={About}
          alt="Placeholder"
        />
          <h1 className='aboutSectionheading' >About Us</h1>
          <p class='aboutSectionpara'>
            Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars. Our goal is to equip students with the knowledge, skills, and experiences they need to thrive in their academic pursuits and transition seamlessly into the professional realm.
          </p>
        </div>
        <img
          className='aboutusImage1'
          src={About}
          alt="Placeholder"
        />
      </div>
    </div>



);
const StatisticsSection = () => (
  <div className='statisticsSection'>
    <div className="statisticItem" >
      <div className='statisticValue'>1000+ <br></br>Students</div>
      <div className="statisticLine" style={{ left: '97%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div className="statisticItem" >
      <div className='statisticValue'>50+ <br></br>Sections</div>
      {/* <div className="statisticLine" style={{ left: '10%', transform: 'translateX(-50%)' }}></div> */}
    </div>
    <div className="statisticItem" >
      <div className='statisticValue'>20+ <br></br>Events</div>
      <div className="statisticLine" style={{ left: '0%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div className="statisticItem" >
      <div className='statisticValue'>5+ <br></br>Classes</div>
      <div className="statisticLine" style={{ left: '0%', transform: 'translateX(-50%)' }}></div>
    </div>
  </div>
);


const Home = () => (
  <div className="apphome">
    <NavBar />
    <MainContent />
    <AboutSection />
    <StatisticsSection />   <br />   <br />
    <Footer />
  </div>
);

export default Home;