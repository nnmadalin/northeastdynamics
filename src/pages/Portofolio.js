import '../styles/Portofolio.css';
import '../styles/static.css';
import Fade from 'react-reveal/Fade';

import CardNotebook from '.././layouts/card_notebooks'
import CardPortofolioResults from '.././layouts/card_portofolio_resuls'
import CardGallery from '.././layouts/card_gallery'

import notebook_2023 from '.././assets/images/notebook_2023.png'
import tehnic_2023 from '.././assets/docs/North East Dynamics RO12319083.pdf'

import Control_Award_Regională_București_2023 from '.././assets/foto_results/Control Award Regională București 2023.png'
import Winning_Alliance_Captain_Demo_Quartz_Iasi_2021 from '.././assets/foto_results/Winning Alliance Captain Demo Quartz Iasi 2021.png'
import Regional_Iasi_2021_scoring from '.././assets/foto_results/Regional Iasi 2021 scoring.png';
import Connect_Motivate_Regional_Iasi_2020 from '.././assets/foto_results/Connect-Motivate Regional Iasi 2020.png';
import national_championship_2023 from '.././assets/foto_results/national_championship-2023.JPG'

function Portofolio() {
   return (
      <main className='page'>
         <Fade>
            <div className='title'>
               <h1>Portofolio</h1>
               <h2><b>All information about our team!</b></h2>
            </div>
            <div className='content'>
               <div className='container'>
                  <h2>You can access all our technical notebooks!</h2>
                  <div className='cards'>
                     <CardNotebook 
                        image_url={notebook_2023} 
                        redirect={tehnic_2023}
                        title="Technical notebook - 2023"
                     />
                  </div>
               </div>

               <hr />

               <div className='container'>
                  <h2>Our results from the competitions!</h2>
                  <div className='cards'>
                     <CardPortofolioResults 
                        image_url={national_championship_2023}
                        result="20th place out of 160"
                        location="National Championship 2023"
                     />
                     <CardPortofolioResults 
                        image_url={Control_Award_Regională_București_2023}
                        result="2nd place"
                        location="Bucharest Regional Control Award 2023"
                     />
                     <CardPortofolioResults 
                        image_url={Winning_Alliance_Captain_Demo_Quartz_Iasi_2021}
                        result="1st place"
                        location="Winning Alliance Captain Demo Quartz Iasi 2021"
                     />
                     <CardPortofolioResults 
                        image_url={Regional_Iasi_2021_scoring}
                        result="1st place"
                        location="Regional Iasi 2021 scoring"
                     />
                     <CardPortofolioResults 
                        image_url={Connect_Motivate_Regional_Iasi_2020}
                        result="1st place"
                        location="Connect-Motivate Regional Iasi 2020"
                     />
                     <CardPortofolioResults 
                        image_url={Connect_Motivate_Regional_Iasi_2020}
                        result="2nd place"
                        location="Inspire Award Regional Iasi 2020"
                     />
                  </div>
               </div>

               <hr />

               <div className='container'>
                  <h2>Photos with our team!</h2>
                  <div className='gallery'>
                     <CardGallery />
                  </div>
               </div>

            </div>
         </Fade>
      </main>
   );
}

export default Portofolio;
