import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


import '../styles/Home.css';

import CardResults from '.././layouts/card_results.js'
import CardSponsors from '.././layouts/card_sponsors.js'
import {CardSocial_TikTok, CardSocial_Youtube, CardSocial_Facebook, CardSocial_Instagram} from '.././layouts/card_social.js'

import video from '.././assets/video/Robot Reveal _ 2021.mp4'
import about from '.././assets/images/about.jpg'

import national_championship_2023 from '.././assets/images/national_championship-2023.JPG'
import national_championship_2021 from '.././assets/images/national_championship-2021.jpg'
import regional_2023 from '.././assets/images/regional-2023.jpg'


import consiliul_local from '.././assets/sponsors/clDorohoi.png'
import dorohoinews from '.././assets/sponsors/dorohoinews.png'
import magistra from '.././assets/sponsors/magistra.png'
import miracom from '.././assets/sponsors/miracom.png'
import cucorani from '.././assets/sponsors/popascucorani.png'
import soofa from '.././assets/sponsors/soofa.png'
import symm from '.././assets/sponsors/symmetrica.png'

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

      <div className='about' name='about'>
        <div className='left'>
          <h1>About Our Team</h1>
          <h3>North East Dynamics</h3>
          <br /> <br />
          <p>We started on this path since 2018. Every year we evolve and see that "Sky is not the limit". We make robots, but it's not enough. We want to make history! Season 8 brings us new challenges, but we're ready to give it our best shot and capitalize on Gracious Professionalism. Gracious team, Gracious work, Gracious minds. The Centerstage Challenge has arrived at our door - we're ready to give it our best (again). Welcome to our website! This is us.</p>
        </div>
        <div className='right'>
          <img src={about} />
        </div>
      </div>

      {/* RESULTS */}

      <div className='results' id='results'>
        <h1>The most important results</h1>
        
        <div className='cards'>
          <CardResults 
            image_url={national_championship_2023} 
            position="l" 
            title="National Championship 2023" 
            description="20th place out of 160"
          />

          <CardResults 
            image_url={regional_2023} 
            position="r" 
            title="Regional robotics 2023" 
            description="Control Award 2nd place"
          />

          <CardResults 
            image_url={national_championship_2021} 
            position="l" 
            title="National Championship 2021" 
            description="Winning Alliance 3rd place, Innovate Award 3rd place"
          />
        </div>
      </div>

      {/* SPONSORS */}

      <div className='sponsors' id='sponsors'>
        <div className='title'>
          <h1>Our Sponsors</h1>
          <h3>We thank all the sponsors for supporting us!</h3>
        </div>

        <div className='cards'>
          <CardSponsors 
            image_url={consiliul_local}
            redirect_url="https://www.primariadorohoi.ro/"
          />
          <CardSponsors 
            image_url={dorohoinews}
            redirect_url="https://www.dorohoinews.ro"
          />
          <CardSponsors 
            image_url={soofa}
            redirect_url="https://www.sweetony.ro/"
          />
          <CardSponsors 
            image_url={magistra}
            redirect_url="https://www.facebook.com/farmaciamagistra/?locale=ro_RO"
          />
          <CardSponsors 
            image_url={symm}
            redirect_url="https://www.symmetrica.ro/"
          />
          <CardSponsors 
            image_url={miracom}
            redirect_url="https://www.miracom.eu/"
          />
          <CardSponsors 
            image_url={cucorani}
            redirect_url="https://www.popascucorani.ro/"
          />
        </div>
      </div>

      {/* SOCIAL MEDIA */}

      <div className='social' id='media'>
        <h1>The lates posts on our social relays</h1>

        <div className='cards'>
          <CardSocial_Instagram 
            image_url="https://www.dorohoinews.ro/app/gethumbDetails.php?id=193653&w=1500&h=1500"
            description="display: -webkit-box;"
            redirect_url="https://www.popascucorani.ro/"
          />
          <CardSocial_Facebook
            image_url="https://www.dorohoinews.ro/app/gethumbDetails.php?id=193653&w=1500&h=1500"
            description="display: -webkit-box;"
          />
          <CardSocial_Youtube
            image_url="https://www.dorohoinews.ro/app/gethumbDetails.php?id=193653&w=1500&h=1500"
            description="display: -webkit-box;"
          />
          <CardSocial_TikTok
            image_url="https://www.dorohoinews.ro/app/gethumbDetails.php?id=193653&w=1500&h=1500"
            description="display: -webkit-box;"
          />
        </div>
      </div>

    </>
  );
}

export default Home;
