import React from "react";
import { SiHtml5, SiCss3 } from "react-icons/si";
import { BsFillBootstrapFill, BsWordpress } from "react-icons/bs";
import { DiJavascript1  } from "react-icons/di";
import { IoLogoGithub  } from "react-icons/io5";
import { FaReact } from 'react-icons/fa';
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">Technologies & Skills</h1>
      </div>
        
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <SiHtml5 />
              </div>
              <div className="service__meta">
                <h1 className="service__text">HTML</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <SiCss3 />
              </div>
              <div className="service__meta">
                <h1 className="service__text">CSS</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <BsFillBootstrapFill />
              </div>
              <div className="service__meta">
                <h1 className="service__text">BootStrap</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <BsWordpress />
              </div>
              <div className="service__meta">
                <h1 className="service__text">WordPress</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
               <DiJavascript1 />
              </div>
              <div className="service__meta">
                <h1 className="service__text">JavaScript</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <FaReact />
              </div>
              <div className="service__meta">
                <h1 className="service__text">React.Js</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <IoLogoGithub />
              </div>
              <div className="service__meta">
                <h1 className="service__text">GitHub</h1>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div> 
  );
}

export default Service;
