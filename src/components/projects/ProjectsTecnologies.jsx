import { useState } from "react";

function ProjectsTecnologies({ setSelect, select }) {
  return (
    <div className="flex flex-col items-center relative  h-[10vh] lg:w-[65vw] md:w-[80vw] w-[95vw] ">
      <div className="flex  relative justify-center md:w-[720px]  space-x-8 h-12 text-2xl ">
        <div
          className={`${
            select === 1
              ? " transform translate-x-0"
              : select === 2
              ? "transform translate-x-36"
              : select === 3
              ? "transform translate-x-[300px]"
              : select === 4
              ? "transform translate-x-[460px] "
              : ""
          }  w-2 h-2 transition-all duration-300 ease-linear rounded-full absolute top-0 left-[18%] mb-1 bg-rose-600`}
        ></div>
        <div
          onClick={() => setSelect(1)}
          className="w-fit p-1 px-6   hover:scale-110 transform cursor-pointer "
        >
          <p>All</p>
        </div>
        <div
          onClick={() => setSelect(2)}
          className="w-fit p-1 px-6 mx-2 hover:scale-110 transform cursor-pointer "
        >
          <p>Django</p>
        </div>
        <div
          onClick={() => setSelect(3)}
          className="w-fit p-1 px-6  hover:scale-110 transform cursor-pointer "
        >
          <p>React</p>
        </div>
        <div
          onClick={() => setSelect(4)}
          className="w-fit p-1 px-6 o hover:scale-110 transform cursor-pointer "
        >
          <p>Djangoe</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTecnologies;
