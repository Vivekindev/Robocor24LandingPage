//droidrace
import Footer from '../../components/Footer.jsx';
import './register.css';
import Btn from '../../components/btn.jsx'
import handleDownload from '../../functions/handleDownload.jsx';
import BtnDesktop from '../../components/btnDesktop.jsx'
import droidrace from '../../assets/compressed/droidrace.jpg'
import { useState } from 'react';
import rulebook from '../../assets/rulebook.pdf'
const Register = ()=>{
const [clicked,setClicked] = useState(false);
const [iframe,setIframe] = useState(false);
return(
<>
{(!clicked)?(<>

{(window.innerWidth>700)?(
<>
<div className="registerContainer_event">
<span style={{  fontFamily:"jedi",fontSize:"4rem",marginBottom:"2rem"}} className='gradient-text' > register</span>
<div className="eventCard_event">
         
             <div id="left"> <img class="eventImage_event"src={droidrace} style={{borderRadius:"1rem"}}></img></div>
            
             <div id="right"> 
             <div className="rightTop">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"3rem"}} className='gradient-text' > droidrace </span>   </div>
            
             <div className="eventMisc_event" style={{marginBottom:"2rem"}}>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Indoor Stadium </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 4</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 2</span>
             </div>
             <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span><a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>
             <div className="eventRules">
               
             <ul>
                <li>The Robot should be completely autonomous. It should not receive any sort of external assistance.</li>
                 <li>The robot should fit in a cube of 30 cm cube side and weight is at choice.</li>
                 <li>Surface of the racing track is white, with continuous black line (35 mm wide) drawn in the middle as the pilot line</li>
                 <li>The robot should have on-board power supply and voltage between any two points on the robot should not exceed 12V.</li>
                 <li>At any point of the time, only one robot is allowed into the arena with only one participant if necessary</li>
                <li>The Robot must deal with lighting conditions as they appear. No changes will be made individually to any participant. IR focusing cameras and flash photography will be allowed unless judges deem such activities</li>
               
              </ul>  
             </div>
         </div>        
             <div className="rightBottom">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>400₹</span>   </div>
            <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <a href={rulebook} download="Robocor'24(RuleBook).pdf"> <div> {(window.innerWidth>700) ? (<BtnDesktop data="Rule Book"/>) : (<Btn data="Rule Book"/>)}</div> </a> 
            <div onClick={()=>setClicked(true)}> {(window.innerWidth>700) ? (<BtnDesktop data="Proceed to Checkout"/>) : (<Btn data="Proceed to Checkout"/>)}</div> 
            </div>
            </div>

            </div>
           </div>
 </div>
 <div id="footer"className="foot"><Footer/></div>
 </>

):(

<>
<div className="registerContainer_Int">
<span style={{  fontFamily:"jedi",fontSize:"4rem",marginBottom:"0rem"}} className='gradient-text' > register</span>


    <div className="eventCard_Int">
             <img class="eventImage_Int"src={droidrace} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > droidrace</span>   </div>
            
             <div className="eventMisc_Int">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> :  Indoor Stadium</span><br></br>
             <button class="priceBtn" style={{marginTop:"0.6rem",marginRight:"0.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >team size</span></button> <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > maximum</span> <span style={{ fontSize:"1.1rem"}}> : 4</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 2</span>
             </div>
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span> <a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>  </div>
 
             
             <div className="eventRules" style={{marginLeft:"1.2rem"}}>
               
               <ul>
                <li>The Robot should be completely autonomous. It should not receive any sort of external assistance.</li>
                 <li>The robot should fit in a cube of 30 cm cube side and weight is at choice.</li>
                 <li>Surface of the racing track is white, with continuous black line |35 mm wide| drawn in the middle as the pilot line</li>
                 <li>The robot should have on-board power supply and voltage between any two points on the robot should not exceed 12V.</li>
                 <li>At any point of the time, only one robot is allowed into the arena with only one participant if necessary</li>
                <li>The Robot must deal with lighting conditions as they appear. No changes will be made individually to any participant. IR focusing cameras and flash photography will be allowed unless judges deem such activities</li>
               
              </ul>  
              </div>
         
             <div style={{marginTop:"auto",justifyContent:"center",alignItems:"center",display:"flex"}} className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}> 400₹</span>   </div>
            <div style={{marginBottom:"1rem"}} onClick={()=>setClicked(true)}> {(window.innerWidth>700) ? (<BtnDesktop data="Proceed to Checkout"/>) : (<Btn data="Proceed to Checkout"/>)}</div>
           </div>
   
 </div>
 <div id="footer"className="foot"><Footer/></div>
 </>
)}

 </>
):(
  <>
   <div style={{
      
      width:"100%",
      height:"100vh",
      backgroundColor:"#110302", 
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",  
      fontSize:"2rem"
  }}>
    <span className='gradient-text' style={{  fontFamily:"jedi"}}>online registrations closed</span> 
    <span style={{fontSize:"1.3rem",paddingTop:"0.5rem"}}>Onspot Registrations in Media Centre</span>

  </div>
           <div style={{
            display:"none",
width:"100%",
height:"100vh",
backgroundColor:"#110302"
}}>
{(iframe==0)?(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",position:"fixed"}}><span style={{  fontFamily:"jedi",fontSize:"4rem"}} className='gradient-text' > loading </span>  </div>    
):(null)}    

  
<iframe onLoad={()=>setIframe(true)} width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/662134e346e0fb0001b00640/private/bn2feesp74"></iframe>
</div>
</>
)}

</>
);

}
export default Register;