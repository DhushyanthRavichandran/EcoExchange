import React from 'react'
import './fono.css'
export const FoNoCard = ({content}) => {
  return (
    <div className='card'>
      
        <img className='card-img' src={content.image}/>
     <div className='card-element'>
          <p className='name'>{content.itemName} </p>    
          <div className='bottom'>
          <p className='location'>{content.location} <i className="fa-solid fa-location-dot" style={{color: "#ffffff",}}></i></p>  
          <p className='addedby'>{content.addedBy} </p>
          </div>
          <p className={`availability ${content.availability==='Sold Out'? 'sold' :''}`}>{content.availability}</p>
          <p>{content.description}</p>    
         
    </div>
        
       
    </div>
  )
}
