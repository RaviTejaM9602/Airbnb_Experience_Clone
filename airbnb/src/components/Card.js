import React from "react";
import star from "../images/Star.png"


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
      <div className="card">
          {badgeText && <div className="card--badge">SOLD OUT</div>}
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