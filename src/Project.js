import React from "react";
import "./Project.css";
import Project1 from './img/portifolio-5.png';
import Project2 from './img/portifolio-6.png';
import Project3 from './img/portifolio-7.png';
import Project4 from './img/portfolio-6.png';


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          Modern projects with readily acessible contact and location
        </p>
        <p className="heading p__color">
         optimized for mobile, search and social web.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Rama-Online Shop</h5>
                     <h4 className="project__text">An E-commerce online website</h4>
                     <a href="https://rama-blue.vercel.app" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Crypto swap</h5>
                     <h4 className="project__text">A  React App that provides informations on how to trade in cryptocurrency  </h4>
                     <a href="https://crypto-swap-two.vercel.app" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Chat app</h5>
                     <h4 className="project__text">An app used to communicate with others or a group chat</h4>
                     <a href="https://ru-chat.vercel.app" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Business Tracker</h5>
                     <h4 className="project__text">An app that is used to get business locations and Details</h4>
                     <a href="https://business-tracker.vercel.app" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;
