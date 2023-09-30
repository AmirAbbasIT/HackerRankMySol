import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import { LazyImageProvider } from "./LazyImage/LazyImageContext";
import LazyImage from "./LazyImage/LazyImage";
import "./index.css";

const images = [
  "/img/1.jpeg",
  "/img/2.jpeg",
  "/img/3.jpeg",
  "/img/4.jpeg",
  "/img/5.jpeg",
  "/img/6.jpeg",
  "/img/7.jpeg"
];

const App = () => {
  const [id,setId]=useState(0)
  const [autoplay,setAutoplay]=useState(false)
  const refid=useRef(null)
  const handleNext=()=>{
    console.log(id,"playing")
      setId(id=>id===(images.length-1)?0:id+1)
  }
  const handlePrev=()=>{
    setId(id=>id===0?images.length-1:id-1)
  }

  const handleAutoPlay=()=>{
    
  }

  useEffect(()=>{

    if(autoplay){
      handleNext()
    }
  },[autoplay])

  useEffect(()=>{
    if(autoplay){
      // handleNext()
      refid.current=setInterval(()=>{
        handleNext()
      },3000)
      return ()=>{
        clearInterval(refid.current)
      }
    }
  },[id,autoplay])

  return(<>
   {/* <LazyImageProvider> */}
    <div>
      <img src={images[id]} />
      <div >
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      <button onClick={()=>setAutoplay(!autoplay)}>Autoplay</button>
      </div>
    </div>
  {/* </LazyImageProvider> */}
  </>)
 
 }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);