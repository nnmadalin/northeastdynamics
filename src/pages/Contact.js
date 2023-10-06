import '../styles/Contact.css';
import '../styles/static.css';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaStreetView, FaPhoneAlt, FaRegEnvelope, FaEnvelope } from "react-icons/fa";


function Home() {
   const notify_error = (customMessage) => {
      toast.error(customMessage, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
   };
   const notify_warn = (customMessage) => {
      toast.warn(customMessage, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
   };
   const notify_success = (customMessage) => {
      toast.success(customMessage, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
   };
   const notify = (customMessage) => {
      toast.info(customMessage, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
   };

   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   }

   const validateForm = () => {
      let valid = true;
      var newErrors;
      if (formData.firstName.trim() === '') {
         newErrors = 'First Name is required!';
         valid = false;
      }
      else if (formData.lastName.trim() === '') {
         newErrors = 'Last Name is required!';
         valid = false;
      }
      else if (formData.email.trim() === '') {
         newErrors = 'Email is required!';
         valid = false;
      }else if (formData.message.trim() === '') {
         newErrors = 'Message is required!';
         valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
         newErrors = 'Invalid email address';
         valid = false;
      }

      notify_error(newErrors);
      return valid;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = validateForm();

      if (isValid) {
         notify_success("The email was sent successfully! I have emailed you a copy of the message!");
         console.log('Form submitted:', formData);
         setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
         });
      
      }
   }

   return (
      <main className='page'>
         <div className='title'>
            <h1>Contact</h1>
         </div>
         <div className='content'>
            <div className='card'>
               <div className='card_title'>
                  <h2>Just say Hello</h2>
                  <h3>Leave a message</h3>
               </div>
               <form>
                  <input type="text" placeholder='First Name' name = "firstName" value={formData.firstName} onChange={handleChange} className='input_flex focus-border' />
                  <input type="text" placeholder='Last Name' name="lastName" value={formData.lastName} onChange={handleChange} className='input_flex' />
                  <input type="email" placeholder='Mail' name="email" value={formData.email} onChange={handleChange} className='input_flex' />
                  <input type="tel" placeholder='Phone' name="phone" value={formData.phone} onChange={handleChange} className='input_flex' />
                  <textarea placeholder='Message' name="message" value={formData.message} onChange={handleChange} className='input_flex_full'/>
                  <div className='div_btn'>
                     <button
                        onClick={handleSubmit}
                     >Send Message!</button>
                  </div>
               </form>
            </div>
            <div className='card info'>
               <div className='section'>
                  <h3>Information</h3>
                  <div className='rows'>
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
               <div className='section'>
                  <h3>Follow Us</h3>
                  <div className='columns'>
                     <a href="https://www.instagram.com/northeastdynamics" target="_blank"><FaInstagram /></a>
                     <a href="https://www.facebook.com/p/North-East-Dynamics-100067168255177/" target="_blank"><FaFacebook /></a>
                     <a href="https://www.youtube.com/@northeastdynamics395" target="_blank"><FaYoutube /></a>
                     <a href="https://www.tiktok.com/@northeastdynamics" target="_blank"><FaTiktok /></a>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
         />
      </main>
   );
}

export default Home;
