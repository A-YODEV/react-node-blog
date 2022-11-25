import React from 'react';
import "./about.css";
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";

function About() {
  return (
    <>
      <Header/>
      <div className='about'>
       <div className="sidebar-wrap">  <Sidebar/> </div>
       <div className="about-wrap">  
       </div>
      </div>
    </>
  )
}

export default About
