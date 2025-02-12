import React, { useState, useEffect } from 'react';
import './home.css';
import 'animate.css';
import robocorLogo from '../assets/robocorLogo.png';
import line from '../assets/underline.png';
import Footer from '../components/Footer.jsx';
import Menu from '../components/menu.jsx';
import Map from '../components/map.jsx'
import Btn from '../components/btn.jsx'
import BtnDesktop from '../components/btnDesktop.jsx'
import rulebook from '../assets/rulebook.pdf';
import byteWars from '../assets/compressed/bytewars.jpg'
import droidKick from '../assets/compressed/droidkick.jpg'
import droidRace from '../assets/compressed/droidrace.jpg'
import projectSymposium from '../assets/compressed/projectSymposium.jpg'
import quiz from '../assets/compressed/quiz.jpg'
import starCrawl from '../assets/compressed/starcrawl.jpg'
import starLink from '../assets/compressed/starlink.jpg'
import handleDownload from '../functions/handleDownload.jsx';
import bgVideo from '../assets/videoplayback.webm'

import sponsor1 from '../assets/sponsors/sponsor1.jpg'
import sponsor2 from '../assets/sponsors/sponsor2.jpeg'
import sponsor4 from '../assets/sponsors/sponsor3.jpg'
import sponsor3 from '../assets/sponsors/sponsor4.png'

function App() {
    const [scrolling, setScrolling] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.onload = () => {
            setLoaded(true);
        };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };




    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
  
        window.addEventListener('scroll', handleScroll);
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  

  

    const scrollToElement = (id) => {
      const miscDiv = document.getElementById(id);
      if (miscDiv) {
        window.scrollTo({
          top: miscDiv.offsetTop,
          behavior: 'smooth'
        });
      }
    };


    useEffect(() => {
        window.onload = () => {
            setLoaded(true);
        };
    }, []);





    if (!loaded) {
        // Show loading screen until loaded
        return(
            <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontFamily: "jedi",
                fontSize: "7rem",
                backgroundColor: "#110302"
            }}>
               <span style={{
                 background: "linear-gradient(to right, #D4AE7E, #856550)", /* Define your gradient colors */
                 webkitBackgroundClip: "text", /* Clip text to the background shape (the gradient) */
                 webkitTextFillColor: "transparent" /* Set text color to transparent */
               
               }}> corsit</span>
            </div>
            </>
        );
    }

    return (
        <div>
        {(window.innerWidth>700)?(null):(<Menu />)} 
       {/*-----------------------------------------------HEADER---------------------------------------------------------*/ }  
       <img id="robocorLogo" src={robocorLogo}></img>
           <header className={`header ${scrolling ? 'scrolled' : ''}`}>
               <div className="container l-header__container u-relative">
                   <div className="l-header__row row u-flex u-align-items-center">
                       <div className="col-12 u-flex u-align-items-center">
                           <div className="l-header__burger u-none--lg">
                               <svg className="c-icon c-icon--lg isOpen">
                                   <use xlinkHref="#icon-burger-close" x="0" y="0" className="u-fill-"></use>
                               </svg>
                           </div>
                           <ul className="l-nav u-flex u-flex-column u-flex-row--lg u-align-items-start u-none u-flex--lg" data-v-6ddf8e5c="">
                               <li className="l-nav__item" data-v-6ddf8e5c="">
                                   <a onClick={()=>scrollToElement('landing')} className="t-text-gradient t-link  t-link--gradient " data-text="Home" data-v-6ddf8e5c="">
                                       <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="">Home</span>
                                   </a>
                               </li>
                               <li className="l-nav__item" data-v-6ddf8e5c="">
                                   <a  onClick={()=>scrollToElement('events')}  className="t-text-gradient t-link  t-link--gradient " data-text="Events" data-v-6ddf8e5c="">
                                       <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="">Events</span>
                                   </a>
                               </li>
                               <li className="l-nav__item" data-v-6ddf8e5c="">
                                   <a onClick={()=>scrollToElement('footer')} className="t-text-gradient t-link  t-link--gradient " data-text="About" data-v-6ddf8e5c="">
                                       <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="">About</span>
                                   </a>
                               </li>
                               <li className="l-nav__item" data-v-6ddf8e5c="">
                                   <a href={rulebook} download="Robocor'24(RuleBook).pdf" className="t-text-gradient t-link  t-link--gradient " data-text="About" data-v-6ddf8e5c="">
                                       <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="" >Rule Book</span>
                                   </a>
                               </li>
                           </ul>
                           
                           <div className="l-header__container__nl u-justify-content-end u-none u-flex--lg">
                            <a href='/certificate'>  <button className="c-cta u-justify-content-center u-align-items-center u-cursor-pointer" data-v-8f71f97c="" to="">
                                   <span className="c-cta__name" data-v-8f71f97c="" data-text="Certificates">
                                       <span data-v-8f71f97c="">Certificates</span>
                                   </span>
                                   <span className="u-wrapper-panel u-pointer-none" data-v-8f71f97c="">
                                     <svg data-v-8f71f97c="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 47" preserveAspectRatio="none">
                          <linearGradient data-v-8f71f97c="" id="xhrlr" gradientUnits="userSpaceOnUse" x1="15.247" y1="767.5" x2="196.052" y2="767.5" gradientTransform="translate(0 -744)">
                             <stop data-v-8f71f97c="" offset="0" stop-color="#d6b07f"></stop>
                             <stop data-v-8f71f97c="" offset="1" stop-color="#82624f"></stop>
                          </linearGradient>
                          <path data-v-8f71f97c="" fill="none" stroke="url(#xhrlr)" stroke-miterlimit="10" d="m195.8 32.5-4.7 14H20.2l-4.7-14m0-18 4.7-14h170.9l4.7 13.9"></path>
                          <linearGradient data-v-8f71f97c="" id="ejirl" gradientUnits="userSpaceOnUse" x1="12.245" y1="767.5" x2="199.053" y2="767.5" gradientTransform="translate(0 -744)">
                             <stop data-v-8f71f97c="" offset="0" stop-color="#d6b07f"></stop>
                             <stop data-v-8f71f97c="" offset="1" stop-color="#82624f"></stop>
                          </linearGradient>
                          <path data-v-8f71f97c="" fill="none" stroke="url(#ejirl)" stroke-miterlimit="10" d="m12.5 16.5 4.8-14H194l4.8 14.1m0 13.9-4.7 14H17.2l-4.7-14.1"></path>
                       </svg>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 47" preserveAspectRatio="none" data-v-8f71f97c="">
                                           <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M198 21l-1 1.999L198 25l7-2.001L198 21zM13 25l1-2.001L13 21l-7 1.999L13 25z"></path>
                                       </svg>
                                   </span>
                               </button>
                               </a> 
                           </div>

                       </div>
                   </div>
               </div>
           </header>
       {/*-----------------------------------------------HEADER---------------------------------------------------------*/ }       
<div className="overlay">
<video className="video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</div>
<div id='landing'className="landing">  
   <div className="title">
      
   <span className='gradient-text tagMain animate__animated animate__backInDown custom-animation' >
       RoBoCoR'24
     </span>
           <img src={line} className='img glow animate__animated animate__pulse'></img>
      
       <div className='tag animate__animated  animate__headShake'>
       <span 
       style={{
 fontSize: "1.5rem",
 color: "#AE8A68",
 
}}>
 unleashing Tech Wonders
</span>

       </div>
      <div className="tagDate">
        {(window.innerWidth>700) ? (<BtnDesktop data="9th MAY 2024"/>) : (<Btn data="9th MAY 2024"/>)}
      </div>
 
   </div>
   
</div>




{/*-----------------------------------------------------------------EVENTS--------------------------------------------------------------------------------------------------------------------*/}
<div id="events"></div>
           <div id="misc"className="misc">
         <center> <span style={{  fontFamily:"jedi",fontSize:"4rem"}} className='gradient-text' > events</span>  </center> 
           <div className="cardContainer">

           <div className="eventCard">
             <img class="eventImage"src={byteWars} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > ByteWars</span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 4000₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 3000₹</span>
             </div>
             <div className="eventDetails">
             Coding is an integral part of Robotics. Our coding event is designed to be both challenging and fun during this event, you will have the chance to compete with other talented programmers and solve challenging coding problems. The winners will be determined based on accuracy, efficiency, and speed.
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 2
             </div>
            <a href="/register/1"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>

           <div className="eventCard">
             <img class="eventImage"src={droidRace} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > DroidRace </span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 5000₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 3000₹</span>
             </div>
             <div className="eventDetails">
             Fumble and it’s all over!! Trace it and track the prize!!! This event is for the code masters. Here’s your chance to prove your robot’s worth. A series of simple yet complex path are to be traced by the autonomous robot. Build the right circuit and test the precision of your programming. And as the saying goes, You don’t fall out of track and you shall emerge victorious.
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
             </div>
            <a href="/register/2"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>

           <div className="eventCard">
             <img class="eventImage"src={starLink} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > StarLink  </span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 5000₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 3000₹</span>
             </div>
             <div className="eventDetails">
             Prepare for the roar of engines, the sleek elegance of wireless vehicles, and heart-pounding races at the brand-new Starlink event. Speed, precision, and control are paramount - only the bot that dominates the track, collecting the most points in the least time, will claim victory. Gear up, compete fiercely, and conquer the field at Starlink.
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
             </div>
            <a href="/register/3"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>

           <div className="eventCard">
             <img class="eventImage"src={starCrawl} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > StarCrawl </span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 5000₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 3000₹</span>
             </div>
             <div className="eventDetails">
             Each participant has to design and build a manually controlled wired/wireless bot. During this event your robots will face various obstacles, such as navigating through rough terrain, climbing over obstacles, and crossing water barriers. The course is designed to test your robot's strength, speed, and adaptability as they go through challenging terrain.
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
             </div>
            <a href="/register/4"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>

           <div className="eventCard">
             <img class="eventImage"src={droidKick} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > DroidKick  </span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 5000₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 3000₹</span>
             </div>
             <div className="eventDetails">
             The objective is to design a manual robot which can compete against each other in a soccer arena. It will be a one vs one soccer match in which the aim will be to push the ball in the opponent's goal post. Our Robo Soccer event is designed to be both challenging and entertaining, providing you with the opportunity to win some fantastic prizes.
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
             </div>
            <a href="/register/5"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>

           <div className="eventCard">
             <img class="eventImage"src="https://content.instructables.com/FQ4/JS4F/JIKJZG1J/FQ4JS4FJIKJZG1J.jpg?auto=webp&frame=1&width=840&height=1024&fit=bounds&md=3ed8980f9bb925d6ce5c348a02f3708e" style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' >Arduino Craft</span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 2500₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 1500₹</span>
             </div>
             <div className="eventDetails">
             Welcome to our Arduino event! This is a fantastic opportunity for electronics enthusiasts to demonstrate your skills and knowledge by performing simple tasks using Arduino. Participants will have to go through a written test. The selected teams have to complete a task based on Arduino. The team conceding minimum time will be the winner.
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 3
             </div>
            <a href="/register/6"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>

           <div className="eventCard last">
             <img class="eventImage"src={projectSymposium} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > Project symposium </span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 4000₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 2000₹</span>
             </div>
             <div className="eventDetails">
             Are you ready to show your skills? A Platform to build, develop and showcase your ideas. The staple diet of all technical events is undoubtedly the presentation event, yet it has something in it which makes it exciting. Sweat your mind and work to innovate the future. Take out your imagination into the real world and experience the unique satisfaction of your dream come true.
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
             </div>
            <a href="/register/7"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>
           
           <div className="eventCard last">
             <img class="eventImage"src={quiz} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > quizzy Brainiacs </span>   </div>
             <div className="eventMisc">
             <button class="priceBtn"><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >1st prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 1000₹</span>
             <button class="priceBtn" style={{marginLeft:"1.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >2nd prize</span></button><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} > : 500₹</span>
             </div>
             <div className="eventMisc" style={{paddingTop:"0.5rem",fontSize:"0.8rem"}}>* Prize money can be increased based on the participation</div>
             <div className=" lastDetails">

             Join us for a high-octane quiz event that will keep you on the edge of your seat! Prepare to think fast and answer questions with lightning speed. It's a pulse-pounding challenge where every moment counts. Let's jump into the action and discover who will claim victory in this exhilarating quiz showdown!
             </div>
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 12:45 PM
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 1
             </div>
            <a href="/register/8"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
           </div>

           </div>
        <span style={{marginTop:"1rem"}}>*Registration fee is Non Refundable</span>
           </div>
           

{/*------------------------------------------------------------------EVENTS-------------------------------------------------------------------------------------------------------------------*/}           
          
          
{/*------------------------------------------------------------------Sponsors-------------------------------------------------------------------------------------------------------------------*/}           
                    
<div id="sponsors"className="sponsors">
<div style={{marginBottom:"2rem"}}><span style={{  fontFamily:"jedi",fontSize:"4rem",padding:"1rem"}} className='gradient-text' > SP0NS0RS</span></div>
   <div className="sponsorsContainer">

<div style={{marginBottom:"2rem"}}><img class="sponsorsImage"src={sponsor1} style={{filter: "saturate(125%)"}} ></img></div>
<div style={{marginBottom:"2rem"}}><img class="sponsorsImage"src={sponsor2} ></img></div>
<div style={{marginBottom:"2rem"}}><img class="sponsorsImage"src={sponsor3} style={{filter: "saturate(150%)"}}></img></div>
<div style={{marginBottom:"2rem"}}><img class="sponsorsImage"src={sponsor4} ></img></div>
</div>

</div>
                
{/*------------------------------------------------------------------Sponsors-------------------------------------------------------------------------------------------------------------------*/}           
        
           <Map/>
           
          
          <div id="footer"className="foot"><Footer/></div> 
       </div>

      
    );
}

export default App;
