import React from "react";
import star from "../images/Star.png"


export default function Card(props) {
  return (
      <div className="card">
          <img src={`../images/${props.img}`} className="card--image" alt="Zaferes" />
          <div className="card--stats">
              <img src={star} className="card--star" alt="star-icon" />
              <span>{props.rating}</span>
              <span className="gray">({props.reviewCount}) • </span>
              <span className="gray">{props.country}</span>
          </div>
          <p>{props.title}</p>
          <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
  )
}