import Fade from 'react-reveal/Fade';
import '../styles/Home.css';

import CardResults from '.././layouts/card_results.js'
import CardSponsors from '.././layouts/card_sponsors.js'
import { CardSocial_TikTok, CardSocial_Youtube, CardSocial_Facebook, CardSocial_Instagram } from '.././layouts/card_social.js'

import video from '.././assets/video/Robot Reveal _ 2021.mp4'
import about from '.././assets/images/about.jpg'

import national_championship_2023 from '.././assets/images/national_championship-2023.JPG'
import national_championship_2021 from '.././assets/images/national_championship-2021.jpg'
import regional_2023 from '.././assets/images/regional-2023.jpg'

import img_insta from '.././assets/images/img_insta.png'
import img_fb from '.././assets/images/img_fb.png'
import img_yt from '.././assets/images/img_yt.png'
import img_tk from '.././assets/images/img_tk.png'

import consiliul_local from '.././assets/sponsors/clDorohoi.png'
import dorohoinews from '.././assets/sponsors/dorohoinews.png'
import magistra from '.././assets/sponsors/magistra.png'
import miracom from '.././assets/sponsors/miracom.png'
import cucorani from '.././assets/sponsors/popascucorani.png'
import soofa from '.././assets/sponsors/soofa.png'
import symm from '.././assets/sponsors/symmetrica.png'
import uizard from '.././assets/sponsors/uizard_logo_yellow.png';
import vegas from '.././assets/sponsors/vegas.png';
import prospexi from '.././assets/sponsors/prospexi.png';
import megatitan from '.././assets/sponsors/megatitan.png';
import gmarms from '.././assets/sponsors/gmarms.png';
import apolodora from '.././assets/sponsors/apolodora.png';

function Home() {
  return (
    <main>
      {/* VIDEO */}

      <div className='front'>
        <video
          autoPlay={true} 
          muted
          loop={true}
          controls={false} 
          playsInline
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={video} type="video/mp4" />
        </video>
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

      <Fade>
        <div className='about' id='about'>
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
            <CardSponsors
              image_url={vegas}
              redirect_url="https://www.facebook.com/vegaspubdorohoi/"
            />
            <CardSponsors
              image_url={prospexi}
              redirect_url="https://edituraprospexi.com/"
            />
            <CardSponsors
              image_url={megatitan}
              redirect_url="https://www.megatitan.ro/"
            />
            <CardSponsors
              image_url={gmarms}
              redirect_url="https://www.facebook.com/GavroMarm/"
            />
            <CardSponsors
              image_url={apolodora}
            />
            <CardSponsors
              image_url={uizard}
              redirect_url="https://app.uizard.io/"
            />
          </div>
        </div>

        {/* SOCIAL MEDIA */}

        <div className='social' id='media'>
          <h1>The lates posts on our social relays</h1>

          <div className='cards'>
            <CardSocial_Instagram
              image_url={img_insta}
              description="Suntem bucuroși că am acceptat provocarea celor de la @cnapsys 🍬, echipa noastră s-a distrat mult costumând robotul!💛🖤🎃"
              redirect_url="https://www.instagram.com/p/CzEX3uIMV1h/?img_index=1"
            />
            <CardSocial_Facebook
              image_url={img_fb}
              redirect_url="https://www.facebook.com/photo/?fbid=690072602898602&set=pcb.690072956231900"
            />
            <CardSocial_Youtube
              image_url={img_yt}
              description="North East Dynamics Rewind 2020-2021"
              redirect_url="https://www.youtube.com/watch?v=uJ4tLyrJ44o&t=2s"
            />
            <CardSocial_TikTok
              image_url={img_tk}
              description="#firsttechchallengeromania cei mai supportive fani"
              redirect_url="https://www.tiktok.com/@northeastdynamics/video/7205669745054551301"
            />
          </div>
        </div>
      </Fade>
    </main>
  );
}

export default Home;
