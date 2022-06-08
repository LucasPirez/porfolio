import { useState, useEffect, useContext, useRef } from "react";
import RickAndMorty from "./rickAndMorty";
import Tecnologies from "./Tecnologis";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import arrow from "../images/arrow-90.svg";
import git from "../images/433-github.svg";
import linked from "../images/353417.svg";
import TranslationContext from "../TraslationContext";
import Form from "./Form";

import Projects from "./projects/Projects";

const Port = () => {
  const { text, handleLanguaje } = useContext(TranslationContext);

  const [link, setLink] = useState(null);
  const [width, setwidth] = useState(window.innerWidth);
  const [nav, setNav] = useState(false);
  console.log(useRef());
  const changeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, [nav]);

  console.log(window.innerWidth);
  // console.log(offset);

  return (
    <div
      className="scroll-smooth"
      onClick={() => (nav == true ? setNav(false) : "")}
    >
      <header
        className={`${
          nav !== false ? "h-[20vh]" : "h-[10vh]"
        } flex transition-all justify-between sm:[10vh] w-full bg-slate-800 items-center fixed top-0 left-0 z-10 `}
      >
        <div>
          <select
            className="m-4 text-xs md:text-base cursor-pointer p-1 rounded hover:border-2 bg-slate-700 border-cyan-700 text-slate-200"
            onChange={(e) => handleLanguaje(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Espanol</option>
          </select>
        </div>
        <ul
          className={` ${
            nav === false ? "hidden" : "flex"
          } transition-all flex-col fixed right-4 space-y-2 top-0 sm:relative sm:flex sm:flex-row sm:space-y-0 text-white m-3 sm:m-6 sm:space-x-5 text-sm sm:text-xl`}
        >
          <li>
            <a
              href="#"
              onClick={() => setLink("Home")}
              className={` ${
                link === "Home" ? "text-cyan-500" : "text-gray-200"
              } 
                flex  transition-all transform -translate-y-1  hover:transform-none sm:animate-[wiggle_2.5s_ease-in-out] animate-[wiggleMedia_1.2s_ease-in-out] `}
            >
              {text.header.home}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setLink("about")}
              className={` ${
                link === "about" ? "text-cyan-500" : "text-gray-200"
              } flex  transition-all transform -translate-y-1 hover:transform-none sm:animate-[wiggle_2s_ease-in-out] animate-[wiggleMedia_0.9s_ease-in-out]`}
            >
              {text.header.about}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setLink("portfolio")}
              className={`${
                link === "portfolio" ? "text-cyan-500" : "text-gray-200"
              } flex transition-all transform -translate-y-1  hover:transform-none sm:animate-[wiggle_1.56s_ease-in-out] animate-[wiggleMedia_0.6s_ease-in-out]`}
            >
              {text.header.portfolio}
            </a>
          </li>
          <li></li>
          <li>
            <a
              href="#footer"
              onClick={() => setLink("footer")}
              className={`${
                link === "footer" ? "text-cyan-500" : "text-gray-200"
              } flex transition-all transform -translate-y-1  hover:transform-none sm:animate-[wiggle_1s_linear] animate-[wiggleMedia_0.3s_ease-in-out]`}
            >
              {text.header.contact}
            </a>
          </li>
        </ul>
        <div
          className={`${
            nav === false ? "flex" : "hidden"
          } text-slate-200 sm:hidden mr-4 flex-col justify-center space-y-[6px] cursor-pointer h-auto
          `}
          onClick={() => setNav(true)}
        >
          <span className="h-[2px] w-6 bg-slate-100 "></span>
          <span className="h-px w-6 bg-slate-100"> </span>
          <span className="h-[2px] w-6 bg-slate-100"></span>
        </div>
      </header>
      <main>
        <div className=" flex  h-[100vh] items-center justify-center bg-gradient-to-l  to-slate-800 from-slate-700">
          <div className=" text-slate-100  text-lg sm:text-3xl md:text-5xl text-center  font-mono">
            <h3 className=" text-slate-100">
              {text.presentation.title}
              <strong className="text-rose-600"> Lucas Pirez.</strong>
            </h3>
            <h4>{text.presentation.subTitle}</h4>
            <a
              href="#about"
              className={`
                border-2 p-1 mt-4 text-sm md:text-lg md:p-2 lg:text-xl lg:p-3 lg:mt-8 hover:bg-cyan-600 hover:border-cyan-800 transition  ease-out duration-300`}
            >
              {text.presentation.button}
            </a>
          </div>
        </div>

        <div
          id="about"
          onScroll={() => setLink("about")}
          className="lg:h-[100vh] h-auto flex flex-col lg:flex-row justify-center items-center lg:justify-around bg-cyan-100  "
        >
          <div className="relative center h-[80%] md:w-[700px] bg-slate-300  flex flex-col justify-start">
            <h3 className="text-center text-4xl">{text.header.about}</h3>
            <div className="w-[100%] h-[50%] flex justify-start">
              <img src={linked} alt="" className="w-56 h-56" />
              <div className="m-4 ml-8">
                <div className="w-32 h-32 bg-black m-1">
                  <div className="w-32 h-32 bg-black m-1">
                    <div className="w-32 h-32 bg-black m-1">
                      <div className="w-32 h-32 bg-black m-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              minus quibusdam, et est quasi adipisci facilis sint inventore qui
              consequuntur nisi suscipit accusantium cupiditate d
            </p>
          </div>

          <Tecnologies />
        </div>

        <Projects />
      </main>
      <div className="w-full hidden lg:block border-slate-800  border-t-[10vh] border-l-[52vw] border-r-[48vw] border-t-transparent"></div>
      <footer
        id="footer"
        className="flex lg:flex-row flex-col relative w-full h-auto lg:h-[60vh] bg-slate-800 items-center  lg:justify-around "
      >
        <div>
          <Form text={text} handleLanguaje={handleLanguaje} />
        </div>

        <a href="#" className=" block sm:w-12 sm:h-12 animate-bounce ">
          <img
            src={arrow}
            className="  sm:w-8 sm:h-8 w-6 h-6 m-auto mt-4 invert "
          />
          <img
            src={arrow}
            className=" sm:w-8 sm:h-8 w-6 h-6 m-auto -mt-2 invert "
          />
        </a>
        <div className=" flex p-5 sm:m-12 ">
          <a href="https://github.com/LucasPirez" target="_blank">
            <img
              src={git}
              className="sm:w-14 sm:h-14 w-10 h-10 bg-slate-100 rounded-full block m-4 transition-transform hover:scale-110 shadow-lg hover:shadow-slate-600"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-pirez-8553b222b/"
            target="_blank"
          >
            <img
              src={linked}
              alt=""
              className="sm:w-14 sm:h-14 w-10 h-10 block m-4 transition-transform hover:scale-110 shadow-md hover:shadow-slate-600"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Port;
