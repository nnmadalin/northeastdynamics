import '../styles/OurTeam.css';
import '../styles/static.css';

import CardTeam from '../layouts/card_team';

import Amarie from '../assets/team/Amarie.png'
import Bolohan from '../assets/team/Bolohan.png'
import Oprita from '../assets/team/Oprita.png'
import Rotariu from '../assets/team/Rotariu.png'


function Home() {
   return (
      <main className='page'>
         <div className='title'>
            <h1>Our Mentors</h1>
         </div>
         <div className='content'>
            <div className='cards'>
               <CardTeam  
                  image_url={Amarie} 
                  full_name={"Amarie Bogdan"} 
                  occupation={"Computer science teacher"} 
                  id_name="amarie"
               />
               <CardTeam  
                  image_url={Bolohan} 
                  full_name={"Bolohan Mihai"} 
                  occupation={"Computer science teacher"} 
                  id_name="bolohan"
               />
               <CardTeam  
                  image_url={Oprita} 
                  full_name={"Oprița Petru Simion"} 
                  occupation={"Computer science teacher"} 
                  id_name="oprita"
               />
               <CardTeam  
                  image_url={Rotariu} 
                  full_name={"Rotariu Oana"} 
                  occupation={"Teacher of entrepreneurial education"} 
                  id_name="rotariu"
               />
            </div>
         </div>

         <div className='title'>
            <h1>Team members</h1>
         </div>
         <div className='content'>
            <div className='cards'>
               <CardTeam 
                  full_name={"Amarie Tudor"} 
                  occupation={"Programmer"} 
                  id_name="programmer"
               />
               <CardTeam 
                  full_name={"Chelariu Răzvan"} 
                  occupation={"Programmer"} 
                  id_name="programmer"
               />
               <CardTeam 
                  full_name={"Damian Tudor"} 
                  occupation={"Programmer"} 
                  id_name="programmer"
               />
               <CardTeam 
                  full_name={"Padurariu Ricardo"} 
                  occupation={"Programmer"} 
                  id_name="programmer"
               />

               <div className='blank_space' />

               <CardTeam 
                  full_name={"Cheptănaru-Atomei George"} 
                  occupation={"Designer"} 
                  id_name="designer"
               />
               <CardTeam 
                  full_name={"Palimariu Razvan"} 
                  occupation={"Designer"} 
                  id_name="designer"
               />

               <div className='blank_space' />

               <CardTeam 
                  full_name={"Cohal Vlad"} 
                  occupation={"Mechanic"} 
                  id_name="mechanic"
               />
               <CardTeam 
                  full_name={"Pomârleanu Florin"} 
                  occupation={"Mechanic"} 
                  id_name="mechanic"
               />
               <CardTeam 
                  full_name={"Oprița Maria "} 
                  occupation={"Mechanic"} 
                  id_name="mechanic"
               />

               <div className='blank_space' />

               <CardTeam 
                  full_name={"Țârlea Teodora"} 
                  occupation={"Public Relations"} 
                  id_name="pr"
               />
               <CardTeam 
                  full_name={"Brumă Gabriela"} 
                  occupation={"Public Relations"} 
                  id_name="pr"
               />
               <CardTeam 
                  full_name={"Zaharia Ana-Maria"} 
                  occupation={"Public Relations"} 
                  id_name="pr"
               />
               <CardTeam 
                  full_name={"Filip Lorena"} 
                  occupation={"Public Relations"} 
                  id_name="pr"
               />

               <div className='blank_space' />

               <CardTeam 
                  full_name={"Neaună Mădălin"} 
                  occupation={"Web Designer"} 
                  id_name="wd"
               />

            </div>
         </div>

      </main>
   );
}

export default Home;
