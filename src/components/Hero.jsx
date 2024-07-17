import React from "react";
import CardsData from "./CardsData";
import './style.css'

const Hero = () => {
  return (
    <div className="w-full min-h-dvh bg-gradient-to-b from-gray-800 via-indigo-400 to bg-cyan-200">
      <h1 className="lg:flex lg:justify-center lg:pt-2 lg:font-bold lg:text-xl lg:text-white upper-main-sec ">
        This is a cart Functionality app made in react
      </h1>
      {/* card */}

      <div className="lg:grid lg:grid-cols-3 lg:gap-2 main-sec" style={{margin:'20px 50px 0px 50px '}}>
        {CardsData.map((card,index )=>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 "  key={index}>
        <a href="#" >
          <img
            className=" h-80 w-full"
            src={card.imgdata}
            alt=""
            
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            &rarr;
          </a>
        </div>
      </div>
        )}
        </div>
        
      {/* card end */}
    </div>
  );
};

export default Hero;
