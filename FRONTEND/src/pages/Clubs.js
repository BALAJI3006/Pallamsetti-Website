import React from 'react';
import '../Style/Clubs.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css';
import Image3 from '../Images/3.png';
import Image2 from '../Images/2.png';
import Image1 from '../Images/1.png';

const SliderContainer = () => {
  return (
    <div className="sliderContainers">
      <p>"I am always doing that which I cannot do, in order that I may learn how to do it."</p>
      <p style={{ marginTop: "0% ", marginLeft: "55%" }}>- Pablo Picasso</p>
    </div>
  );
};

// const InnovationClub = () => {
//   return (
//       <div className="innovationclub">
//       <div className="innovationheader">
//         <p className="iclubheading" style={{ fontSize: "40px", color: "white" }}>Innovation Club.</p>
//         <button className="iclubbutton" style={{ marginLeft: "37%", height: "50px", marginBottom: "1%", backgroundColor: "orange", width: "120px" }}>Join Now</button>
//       </div>
//       <div>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>About the Club.</h1>
//         <p className='para'>
//           Welcome to the Innovation Club at Dr. Palamsetty Innovations, where creativity knows no bounds. Our club serves as a catalyst for innovation, bringing together creative minds from all disciplines to tackle challenges and explore new possibilities.
//         </p>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>What We Provide:</h1>
//         <ul className='para'>
//           <li>        Workshops: Engaging sessions designed to spark creativity and foster innovative thinking.</li>
//           <li>        Brainstorming Sessions: Collaborative environments where members can share ideas and develop innovative solutions.</li>
//           <li>        Project Opportunities: Hands-on projects that encourage experimentation and real-world application of innovative ideas.</li>
//         </ul>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>What We Do:</h1>
//         <ul className='para'>
//           <li>        Ideation: Generating and refining ideas through brainstorming sessions and design thinking methodologies.</li>
//           <li>        Prototyping: Bringing ideas to life through prototyping and iterative design processes.</li>
//           <li>        Impactful Solutions: Developing innovative solutions to address real-world challenges and drive positive change.</li>
//         </ul>
//       </div>
//       <p style={{ fontSize: "35px", color: "white" }}>"Igniting Creativity, Driving Change"</p>
//     </div>

//   );
// };

// const TechnologyClub = () => {
//   return (
//       <div>
//       <div style={{
//         display: "flex",
//         marginLeft: "40%"
//       }}>
//         <p style={{ fontSize: "50px", color: "white" }}>Technology Club.</p>
//         <button style={{ marginLeft: "35%", height: "50px", marginTop: "7%", backgroundColor: "orange", width: "120px" }}>Join Now</button>
//       </div>

//       <div >
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>About the Club.</h1>
//         <p className='para'>
//           Welcome to the Technology Club at Dr. Palamsetty Innovations, where we're passionate about all things tech. Our club provides a platform for students to explore emerging technologies, enhance their technical skills, and stay ahead in the ever-evolving world of technology.
//         </p>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>What We Provide:</h1>
//         <ul className='para'>
//           <li>        Coding Challenges: Opportunities to sharpen coding skills and tackle coding challenges.</li>
//           <li>        Tech Talks: Informative sessions on the latest trends, tools, and technologies in the tech industry.</li>
//           <li>        Hackathons: Intensive events where members collaborate to build innovative tech solutions within a limited timeframe.</li>
//         </ul>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>What We Do:</h1>
//         <ul className='para'>
//           <li>        Skill Development: Offering workshops and tutorials to help members learn new programming languages and tools.</li>
//           <li>        Innovation Projects: Collaborating on tech projects ranging from app development to hardware hacking.</li>
//           <li>        Industry Engagement: Connecting members with industry professionals and providing networking opportunities in the tech sector.</li>
//         </ul>

//         <p style={{ fontSize: "35px", color: "white" }}>"Exploring the Frontiers of Technology"</p>
//       </div>
//     </div>
//   );
// };

// const ResearchAndDevelopmentClub = () => {
//   return (
//       <div>
//       <div style={{
//         display: "flex",
//         marginLeft: "28%"
//       }}>
//         <p style={{ fontSize: "50px", color: "white" }}>Research & Development (R&D) Club. </p>
//         <button style={{
//           marginLeft: "10%",
//           height: "50px",
//           marginTop: "5%",
//           backgroundColor: "orange",
//           width: "120px"
//         }}>Join Now</button>
//       </div>
//       <div>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>About the Club.</h1>
//         <p className='para'>
//           Welcome to the Research & Development (R&D) Club at Dr. Palamsetty Innovations, where curiosity meets discovery. Our club is dedicated to advancing knowledge and driving innovation through cutting-edge research and experimentation.
//         </p>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>What We Provide:</h1>
//         <ul className='para'>
//           <li>            Mentorship: Guidance and support from experienced researchers and industry experts.</li>
//           <li>        Seminars: Presentations and discussions on groundbreaking research topics and methodologies.</li>
//           <li>        Project Funding: Resources and funding opportunities to support research projects and experiments.</li>
//         </ul>
//         <h1 className='para1' style={{ color: "white", textAlign: "left" }}>What We Do:</h1>
//         <ul className='para'>
//           <li>            Exploration: Exploring interdisciplinary research topics and pushing the boundaries of knowledge.</li>
//           <li>        Experimentation: Designing and conducting experiments to test hypotheses and gather data.</li>
//           <li>        Collaboration: Collaborating with peers and experts to tackle complex research challenges and make meaningful discoveries.</li>
//         </ul>
//       </div>
//       <p style={{ fontSize: "35px", color: "white" }}>"Pushing the Boundaries of Knowledge"</p>
//     </div>
//   );
// };




const Card = ({ title, description, imageSrc }) => {
  return (
    <section className="card_club">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </section>
  );
};





const Clubs = () => {
  return (
    <div className="appclubs">
      <NavBar />
      <SliderContainer />
      <h1>OUR CLUBS</h1>
      <div className="card-container">
      <Card
        title="Innovation Club"
        description="Welcome to the Innovation Club at Dr. Palamsetty Innovations, where creativity knows no bounds."
        imageSrc={Image3}

      />

      <Card
        title="Technology Club"
        description="Welcome to the Technology Club at Dr. Palamsetty Innovations, where we're passionate about all things tech."
        imageSrc={Image1}
      />

      <Card
        title="Research & Development (R&D) Club"
        description="Welcome to the Research & Development (R&D) Club at Dr. Palamsetty Innovations, where curiosity meets discovery."
        imageSrc={Image2}

      />
      </div>

      <Footer />
    </div>
  );
};
export default Clubs;
