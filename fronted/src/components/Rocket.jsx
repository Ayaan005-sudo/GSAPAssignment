import React from 'react';
import rocketImg from "../assets/rocket2-removebg-preview.png";
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Rocket() {
  
let rocketimgRef=useRef(null);
let colRef =useRef(null);

useGSAP(()=>{
gsap.timeline({
    scrollTrigger:{
        trigger:".rocket",
        
        start:"top 70%",

        end:"top 40%",
        scrub:2
    }

})
.to(rocketimgRef.current,{
  ease:"power2.out",
    duration:2,
    opacity:0,
    y:-700
})
.to(colRef.current,{
    duration:2,
    opacity:1,
    y:-100

})
},[]);
    return ( 
       <section className='rocket relative h-[50vh] flex flex-col-reverse items-center text-white '>
        <img src={rocketImg} ref={rocketimgRef} className='rocketimg h-[300px] w-[300px] absolute bottom-[20px] left-[50%] -translate-x-1/2 '/>
        <div className="container h-[150px]">
  <div className="row justify-center ">
    <div ref={colRef} 
    className=" col-10  flex flex-row items-center h-[150px]">
     <div className='col flex flex-col items-center '>
    <h4>2M+</h4>
    <h3>Global Users</h3>
     </div>
     <div className='col mission flex flex-col items-center pt-2' >
    <h4>98%</h4>
    <h3>
      <span className='block md-inline'>Mission</span> 
      <span className='block md-inline'>Success</span>
      </h3>
     </div>
     <div className='col flex flex-col items-center'>
    <h4>150+</h4>
    <h3>Launcehs</h3>
     </div>
    </div>
  </div>
</div>
       </section>
     );
}

export default Rocket;

