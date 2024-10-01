import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa"
const post = ({data,bgColor,color}) => {
  
  return (
    <>
     <div className='post-container' style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`
    }}>
      <div className='person'>
        <div className="author">
         <div className='img'>
           <img src={data.pImg }alt=''/>
         </div>
         <div className='text'>
         <h3>{data.userName}</h3>
         <p>{data.title}</p>
         </div>
         </div>
         <div className='dot'> < BsThreeDotsVertical/> </div>
        </div>
       
       <p>{data.description}</p>
       <div className='post-img'>
        <img src={data.mImg} alt=''/>
       </div>
        <div className='like-comment'>
   <div className='likes'> <FaHeart className='item'/>{data.like}{" "}</div>
  <div className='comments'><FaRegComment className='item'/>{data.comment}{" "}</div>
 <div className='share'>< FaShare className='item'/>{data.share}{" "}7.3k </div>

        </div>
      </div></>
  )
}

export default post