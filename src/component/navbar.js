import '.././styles/Navbar.css'
import logo from '.././assets/images/logo.png'

function App() {
   return (
      <>
         <nav>
            <div className="left">
               <a href="#" data-text="About us">About us</a>
               <a href="#" data-text="Our results">Our results</a>
               <a href="#" data-text="Sponsors">Sponsors</a>
               <a href="#" data-text="Media">Media</a>
            </div>
            <div className="center">
               <a href='/'>
                  <img src={logo} />
               </a>
            </div>
            <div className="right">
               <a href="#" data-text="Support the team">Support the team</a>
               <a href="#" data-text="Our team">Our team</a>
               <a href="#" data-text="Portofolio">Portofolio</a>
               <a href="#" data-text="Contact">Contact</a>
            </div>
         </nav>
      </>
   );
}

export default App;
