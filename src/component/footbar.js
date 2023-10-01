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
                     <a href="https://www.instagram.com/northeastdynamics" target="_blank"><FaInstagram /></a>
                     <a href="https://www.facebook.com/p/North-East-Dynamics-100067168255177/" target="_blank"><FaFacebook /></a>
                     <a href="https://www.youtube.com/@northeastdynamics395" target="_blank"><FaYoutube /></a>
                     <a href="https://www.tiktok.com/@northeastdynamics" target="_blank"><FaTiktok /></a>
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
                  </div>
               </div>
            </div>
            <span className='reserv'>© 2023 • All rights reserved</span>
            <span>
               Design made with the help of: 
               <a href='https://app.uizard.io' target="_blank"><b> uizard.io</b></a>
            </span>
         </footer>
      </>
   );
}

export default FootBar;
