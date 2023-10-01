import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaStreetView, FaPhoneAlt, FaRegEnvelope, FaEnvelope} from "react-icons/fa";

import '.././styles/Footbar.css'
import logo from '.././assets/images/logo_full.png'


function FootBar() {
   return (
      <>
         <footer>
            <div className='container'>
               <div className='card left'>
                  <img src={logo} alt="image"/>
                  <div className='social_links'>
                     <FaInstagram />
                     <FaFacebook />
                     <FaYoutube />
                     <FaTiktok />
                  </div>
               </div>
               <div className='card center'>
                  <div className="rows">
                     <div className='row'>
                        <FaStreetView />
                        <div>
                           Victoriei Boulevard 112
                           <br />
                           Dorohoi, Botosani, Romania
                        </div>
                     </div>
                     <div className='row'>
                        <FaPhoneAlt />
                        +40000000000
                     </div>
                     <div className='row'>
                        <FaEnvelope />
                        northeastdynamics19@gmail.com
                     </div>
                  </div>
               </div>
               <div className='card right'>
                  <div className="contain">
                     <p>Made by: </p>
                     <p>Administered by: </p>
                     <p>Team Leader: </p>
                     <p>Design made with the help of: 
                        <a href='https://app.uizard.io' target="_blank"><b> uizard.io</b></a>
                     </p>
                  </div>
               </div>
            </div>
            <span className='reserv'>© 2023 • All rights reserved</span>
         </footer>
      </>
   );
}

export default FootBar;
