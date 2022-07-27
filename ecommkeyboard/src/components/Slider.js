import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import '../App.css';
import images from'./images'

function Slider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const images= ['https://rad-palmier-f03c7c.netlify.app/images/keyboard1.webp',
'https://rad-palmier-f03c7c.netlify.app/images/keyboard2.webp',
'https://rad-palmier-f03c7c.netlify.app/images/keyboard3.webp',
'https://rad-palmier-f03c7c.netlify.app/images/keyboard5.jpeg',
'https://rad-palmier-f03c7c.netlify.app/images/keyboard6.jpeg',
'https://rad-palmier-f03c7c.netlify.app/images/keyboard8.jpeg',
'https://rad-palmier-f03c7c.netlify.app/images/keyboard10.webp'];

    useEffect(()=>{
        
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
  return (
    <div className="slider">
        <motion.div ref={carousel} className="carousel" 
        whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" 
            dragConstraints={{right: 0, left: -width}} 
            className="inner-carousel">
                {images.map((image, key) =>{
                    return(
                    <motion.div className="item" key={key}>
                        <img className='sizing'src={image} alt="" />
                    </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    </div>
  )
}
export default Slider;