
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import './index.css'
import Sidebar from './component/sidebar';
import Post from './component/post';
import Rightbar from './component/rightbar';
import{data,data2} from './data'

const App = () => {
   const[bgColor,setbgColor]=useState("#232D3f")
   const[color,setColor]=useState("white")
   const[toggle,setToggle]=useState(true)


   const toggleButton=()=>{
        setToggle(!toggle)
        if(toggle){
            setbgColor("rgb(255,255,255)");
            setColor("black")
            document.querySelector("body").style.backgroundColor="#cbc5c5"
        }else{
          setbgColor("#232D3f");
          setColor("white");
          document.querySelector("body").style.backgroundColor="black";
        }
   }
  return (
    <>
     <Navbar bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle}/>
     <div className='container'>
      <div className='side-bar'>
        <Sidebar bgColor={bgColor} color={color}/>
        </div>
        <div className='post-section'>
          {data.map((d)=>(
          <Post key={d.id} data={d}
         bgColor={bgColor} color={color}/>
          ))}
       </div> 
          <div className='right-bar'>
            {data2.map((d)=>(
            <Rightbar key={d.id} data={d}/>
            ))}
      
          </div>
      </div>
    
    </>
  )
}

export default App;


