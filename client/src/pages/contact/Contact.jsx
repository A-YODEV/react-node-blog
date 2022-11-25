import React from 'react';
import "./contact.css";
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";

function Contact() {
  return (
    <>
      <Header/>
      <div className='contact'>
       <div className="sidebar-wrap">  <Sidebar/> </div>
       <div className="contact-wrap">  
       </div>
      </div>
    </>
  )
}

export default Contact
