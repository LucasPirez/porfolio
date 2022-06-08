import style from "./tecnologies.module.css";

const Tecnologies = () => {
  return (
    <div>
      <div className={style.cuadrado1}>
        <div className={style.cuadrado}></div>
      </div>
      <h3 className="text-center p-2  text-2xl font-mono">TECNOLOGIES</h3>
      <div className="p-2 shadow-xl rounded-sm  ">
        <ul
          className={` ${style.tecnologi} grid lg:block grid-cols-2 w
        -full sm:grid-cols-4  transition-all
        text-center md:w-[700px] lg:w-[300px] h-auto bg-cyan-100 shadow-lg shadow-slate-800 sm:text-lg text-xs sm:p-2  p-1   rounded `}
        >
          <li className={style.a}>HTML</li>
          <li className={style.b}>CSS: </li>
          <li className={style.c}>Javsascript</li>
          <li className={style.d}>Python</li>

          <li className={style.d}>React</li>
          <li className={style.e}>React Native</li>
          <li className={style.f}>Express</li>
          <li className={style.g}>Django</li>
        </ul>
      </div>
    </div>
  );
};

export default Tecnologies;
