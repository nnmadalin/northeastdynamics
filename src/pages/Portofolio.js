import '../styles/Portofolio.css';
import '../styles/static.css';

import national_championship_2023 from '.././assets/images/national_championship-2023.JPG'
import national_championship_2021 from '.././assets/images/national_championship-2021.jpg'
import regional_2023 from '.././assets/images/regional-2023.jpg'

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
            </div>
            <div className='container'>
               <h3>Our results from the competitions!</h3>
            </div>
         </div>
      </main>
   );
}

export default Portofolio;
