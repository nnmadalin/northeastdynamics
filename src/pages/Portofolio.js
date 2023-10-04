import '../styles/Portofolio.css';
import '../styles/static.css';

import CardNotebook from '.././layouts/card_notebooks'

import notebook_2023 from '.././assets/images/notebook_2023.png'
import tehnic_2023 from '.././assets/docs/North East Dynamics RO12319083.pdf'

function Portofolio() {
   return (
      <main className='page'>
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
            <div className='container'>
               <h3>Our results from the competitions!</h3>
            </div>
         </div>
      </main>
   );
}

export default Portofolio;
