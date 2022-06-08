import { useState, useEffect, useContext } from "react";
import cap from "../../images/capture.png";
import ModalChildren from "./ModalChildren";
import { ModalPortal } from "./ModalPortal";
import TranslationContext from "../../TraslationContext";
import ProjectsTecnologies from "./ProjectsTecnologies";

export default function Projects() {
  const { text, handleLanguaje } = useContext(TranslationContext);
  const [select, setSelect] = useState(1);
  const [close, setClose] = useState(false);
  const [modalSelect, setmodalSelect] = useState(null);

  const inside = (e) => {
    setClose(true);

    e.stopPropagation();
  };

  const outside = (e) => {
    setClose(false);
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col  w-full h-auto  e items-center  bg-cyan-50">
      <h3 className="  text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500 to-cyan-800 mb-10">
        Project
      </h3>
      <ProjectsTecnologies setSelect={setSelect} select={select} />
      <div
        onClick={outside}
        className="flex flex-col items-center relative  h-auto lg:w-[85vw] md:w-[80vw] w-[95vw]  "
      >
        <div className="flex w-full relative  justify-center flex-wrap container">
          <div
            className={`${
              select === 1 || select === 2
                ? "transform translate-x-0 duration-700 relative"
                : " transform translate-x-[1000px] scale-0 absolute left-0"
            } w-80 h-72 bg-slate-500 m-2 transition-all duration-500`}
          >
            <button
              type="button"
              onClick={(e) => (inside(e), setmodalSelect("calculator"))}
            >
              pree
            </button>
            prueba
          </div>
          <div
            onClick={(e) => (inside(e), setmodalSelect("gymApp"))}
            className={`${
              select === 1 || select === 3
                ? "transform translate-x-0 duration-700 relative"
                : " transform translate-x-[1000px] scale-0 absolute  left-0"
            } w-80 h-72 bg-slate-500 m-2 transition-all duration-500`}
          >
            dos
          </div>
          <div
            className={`${
              select === 1 || select === 3
                ? "transform translate-x-0 duration-700 relative"
                : " transform translate-x-[1000px] scale-0 absolute  left-0"
            } w-80 h-72 bg-slate-500 m-2 transition-all duration-500`}
          >
            tres
          </div>
          <div
            className={`${
              select === 1 || select === 4
                ? "transform translate-x-0 duration-700 relative"
                : " transform translate-x-[1000px] scale-0 absolute  left-0"
            } w-80 h-72  m-2 transition-all duration-500`}
          >
            <img
              src={cap}
              // alt=""
              // className="rounded pb-2 border-b-4 border-black "
            />
            <button className="m-auto ">Read More</button>
          </div>
          <div
            className={`${
              select === 1 || select === 3
                ? "transform translate-x-0 duration-700 relative"
                : " transform translate-x-[1000px] scale-0 absolute  left-0"
            } w-80 h-72 bg-slate-500 m-2 transition-all duration-500`}
          >
            oo
          </div>
        </div>

        {close && (
          <ModalPortal>
            <ModalChildren
              modalSelect={modalSelect}
              inside={inside}
              outside={outside}
            />
          </ModalPortal>
        )}
      </div>
    </div>
  );
}

{
  /* <Modal inside={inside} outside={outside} modalSelect={modalSelect} /> */
}
