import React from "react"


export default function Card(props) {
    
    return(
      <div className="cards" >
         <img className="cards--img" src={props.imageUrl} />
        <div className="cards--des">
          <span className="li--icon">{<i class="fa-solid fa-location-dot"></i>}</span>
          <span className="location">{props.location}</span>
          <span><a href={props.googleMapsUrl}> View on Google Maps</a></span>
            <h1>{props.title}</h1>
        <div className="date--span">
           <span>{props.startDate} - </span>  
           <span>{props.endDate}</span>
        </div>
          <p>{props.description}</p>
          </div>
          
      </div>
    )
}