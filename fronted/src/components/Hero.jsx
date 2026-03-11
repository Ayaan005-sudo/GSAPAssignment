import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);
function Hero() {

const headingRef = useRef(null)

useGSAP(()=>{

if(headingRef.current){
gsap.from(headingRef.current,{
  delay:1,
  duration:2,
  y:30,
  opacity:0,
  scale:0.5,
})
}


},[])

return (
<section className="hero h-screen flex justify-center items-center">

<h1 
ref={headingRef} 
className="text-[30px] md:text-[50px] lg:text-[70px] text-white tracking-[12px] "
>
 <span className="block md:inline px-2">WELCOME</span>
  <span className="block md:inline px-2">TO</span>
  <span className="block md:inline px-2">IFZFIZZ</span>
</h1>

</section>
)

}

export default Hero