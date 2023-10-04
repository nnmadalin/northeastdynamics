import '../styles/Portofolio.css';
import '../styles/static.css';
import Fade from 'react-reveal/Fade';

import CardNotebook from '.././layouts/card_notebooks'
import CardPortofolioResults from '.././layouts/card_portofolio_resuls'
import CardGallery from '.././layouts/card_gallery'

import notebook_2023 from '.././assets/images/notebook_2023.png'
import tehnic_2023 from '.././assets/docs/North East Dynamics RO12319083.pdf'

import national_championship_2023 from '.././assets/images/national_championship-2023.JPG'


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
                  <h3>You can access all our technical notebooks!</h3>
                  <div className='cards'>
                     <CardNotebook 
                        image_url={notebook_2023} 
                        redirect={tehnic_2023}
                        title="Technical notebook - 2023"
                     />
                     <CardNotebook 
                        image_url={notebook_2023} 
                        redirect=""
                        title="Technical notebook - 2022"
                     />
                  </div>
               </div>

               <hr />

               <div className='container'>
                  <h3>Our results from the competitions!</h3>
                  <div className='cards'>
                     <CardPortofolioResults 
                        image_url={national_championship_2023}
                        result="Locul 1"
                        location="Dorohoi, Botosani"
                     />
                     <CardPortofolioResults 
                        image_url={national_championship_2023}
                        result="Locul 1"
                        location="Dorohoi, Botosani"
                     />
                     <CardPortofolioResults 
                        image_url={national_championship_2023}
                        result="Locul 1"
                        location="Dorohoi, Botosani"
                     />
                     <CardPortofolioResults 
                        image_url={national_championship_2023}
                        result="Locul 1"
                        location="Dorohoi, Botosani"
                     />
                  </div>
               </div>

               <hr />

               <div className='container'>
                  <h3>Photos with our team!</h3>
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
