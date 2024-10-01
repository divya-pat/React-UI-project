import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { SiTrustedshops } from "react-icons/si";
import { GiRugbyConversion } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi"
import { IoMdLogOut } from "react-icons/io";

const sidebar = ({bgColor,color}) => {
  return (
    <div className='side-bar-content'style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`
    }}>
        <div className='top-content'>
          <div className='items'><FaHome className='icons'/> home</div>
          <div className='items'><IoMdNotifications className='icons'/>notification</div>
          <div className='items'><SiTrustedshops className='icons'/>shops</div>
          <div className='items'>< GiRugbyConversion className='icons'/>conversion</div>
          <div className='items'><FaWallet className='icons'/>wallet</div>
          <div className='items'> <MdSubscriptions className='icons'/>Subscriptions</div>
          <div className='items'> <GiRamProfile className='icons'/>my profile</div>
        </div>
        <div className='bottom-content items'>< IoMdLogOut className='icons'/>log out</div>

 </div>
  )
}

export default sidebar;