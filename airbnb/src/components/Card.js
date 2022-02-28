import React from "react";
import Zaferes from "../images/Zaferes.png";
import star from "../images/Star.png"


export default function Card() {
  return (
      <div className="card">
          <img src={Zaferes} className="card--image" alt="Zaferes" />
          <div className="card--stats">
              <img src={star} className="card--star" alt="star-icon" />
              <span>5.0</span>
              <span className="gray">(6) • </span>
              <span className="gray">USA</span>
          </div>
          <p>Life Lessons with Katie Zaferes</p>
          <p><span className="bold">From $136</span> / person</p>
      </div>
  )
}