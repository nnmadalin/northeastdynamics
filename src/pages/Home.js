import '../styles/Home.css';

import CardResults from '.././layouts/card_results.js'

import video from '.././assets/video/Robot Reveal _ 2021.mp4'
import NED from '.././assets/images/NED.jpg'

function Home() {
  return (
    <>
      {/* VIDEO */}

      <div className='front'>
        <video src={video}  loop muted autoPlay/>
        <div className='fade' />
        <div className='contain'>
          <p>
            RO123
          </p>
          <h1>
            North<span>East</span> 
            <br />
            <span className='remove_space'>Dynamics</span>
          </h1>
          <p>
          Regina Maria High School
          <br />
          Dorohoi - Botosani - Romania
          </p>
        </div>
      </div>
      
      {/* ABOUT */}

      <div className='about'>
        <div className='left'>
          <h1>About Our Team</h1>
          <h3>North East Dynamics</h3>
          <br /> <br />
          <p>We started on this path since 2018. Every year we evolve and see that "Sky is not the limit". We make robots, but it's not enough. We want to make history! Season 8 brings us new challenges, but we're ready to give it our best shot and capitalize on Gracious Professionalism. Gracious team, Gracious work, Gracious minds. The Centerstage Challenge has arrived at our door - we're ready to give it our best (again). Welcome to our website! This is us.</p>
        </div>
        <div className='right'>
          <img src={NED} />
        </div>
      </div>

      {/* RESULTS */}

      <div className='results'>
        <h1>The most important results</h1>
        
        <CardResults 
          image_url={NED} 
          position="l" 
          title="North East Dynamics" 
          description="20th place out of 160"
        />

        <CardResults 
          image_url={NED} 
          position="r" 
          title="North East Dynamics" 
          description="20th place out of 160"
        />

        <CardResults 
          image_url={NED} 
          position="l" 
          title="North East Dynamics" 
          description="20th place out of 160"
        />
        
      </div>
    </>
  );
}

export default Home;
