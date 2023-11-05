import React from "react";
import "./Header.css";
import "./HeaderPhone.css";
import logo from "../../assets/logo.png";
import 'animate.css';

function Header() {
    return (
        <div className="header">
          <div className="steez_line animate__animated animate__fadeInRight"></div>
          <div className="page_number">
                    <p id="page_1">00001</p>
              </div>
            <div className="container">
                <div className="profession animate__animated animate__fadeInUp">
                    <br></br>
                    <p>Student at Maharshi Dayanand University</p>
                </div>
                <br></br>
                
                <div className="logo animate__animated animate__fadeInUp" target="_blank">
                    <a href="https://nishantchhillar.tech">
                        <img src={`${logo}`} alt="logo"></img>
                    </a>
                </div>
                <br></br>
                  <h1 className="animate__animated animate__fadeInUp">Nishant <br></br> Chhillar</h1>
            </div>
        </div>
    );
}

export default Header;
