import React from 'react'

const rightbar = ({data ,bgColor,color}) => {
  return (
    <>
    <div className='rightcontainer' style={{
      backgroundColor:`${bgColor}`,
      color:"white"
    }}>
    
      <div className='postImg'>
        <img id='_img'
         src={data.img} alt=''/>
        <div className='inside-img'>
          <div className='img'>
          <img src={data.authorImg} alt=''/>
        </div>
        <div className='text'>
          <h3>{data.authorName}</h3>
          <p>{data.authortext}</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default rightbar