import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/view-profile.css"
import leena from "../images/leena.jpg";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";

export default class viewProfile extends Component {
  render() {
    return (

      <div>
        {/* Card deck */}
        <div>
          {/* Card */}
          <div>
            {/* Card image */}
            <div>
              <img className="profilePic" src={leena} />
            </div>
            {/* Card content */}
            <div>
              {/* Title - Display Name*/}
              <h4><strong>Leena Loo</strong></h4>
              {/* Subtitle - Genre*/}
              <h6>Painter</h6>
              {/* Text - Description*/}
              <p>DESCRIPTION HERE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="socials"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="socials"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="socials"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
          </div>
          {/* Card */}
          <div>
            <img className="workPic" src={work1} />
            <img className="workPic" src={work2} />
            <img className="workPic" src={work3} />
          </div>
        </div>
        {/* Card deck */}
        </div>

    )
  }
}
