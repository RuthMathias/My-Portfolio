import React from "react";
import "./About.css";
import aboutImg from "./img/hero.png";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I`m Ruth Mathias, a creative and self-starting frontend developer
                with knowledge on building and maintaining responsive websites
                and apps in fast-paced and collaborative environments as well as
                rectifying frontend related issues.
              </p>
              <p className="about__text p__color">
                Proficient knowledge on HTML, CSS, JavaScript, WordPress and React
                as well as maintaining an organized workflow using a project management
                tool (like GitHub). 
                I'm passionate about useabilty and learning new software ads inoder to 
                grow and develop my skills.
              </p>
              <p className="about__text p__color">
                I have a Higher National Diploma in Mining Engineering from Kaduna
                Polytechnic, Kaduna State.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#home">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#portifolio" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
