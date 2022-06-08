import { useState, useEffect } from "react";
import { useContext } from "react";
import ReactPlayer from "react-player";
import TranslationContext from "../../TraslationContext";

export default function ModalChildren({ modalSelect, inside, outside }) {
  const [carousel, setCarousel] = useState(0);
  const { text, handleLanguaje } = useContext(TranslationContext);
  const [selectText, setSelectText] = useState(text.modal[modalSelect]);
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(undefined);
  const [long, setLong] = useState(null);

  console.log(selectText.images);

  useEffect(() => {
    console.log("hea");
    setImages(selectText.images);
    setVideo(selectText.videos);
    console.log(video);
    video !== undefined ? setLong(images.length + 1) : setLong(images.length);
  }, [selectText, images]);

  console.log(long);
  return (
    <div
      id="divModal"
      className="fixed flex justify-center top-2  w-[100%] h-[600px]  bg-transparent animate-[back_0.4s_linear] z-10 "
    >
      <div
        onClick={inside}
        className="w-[700px] h-[100%] border-2 rounded opacity-78 relative text-red-50 bg-blue-900"
      >
        <div className="flex  w-[100%] h-[70%] bg-slate-800 relative">
          {images &&
            images.map((u, i) =>
              carousel === i ? (
                <div
                  key={i}
                  className="w-[100%] h-[100%] animate-[back_0.4s_linear]  overflow-hidden absolute top-0"
                >
                  <img src={`${u}`} alt="" className="w-[100%]" />
                </div>
              ) : (
                ""
              )
            )}
          {video && carousel === long - 1 ? (
            <>
              <p className="mt-[30%] ml-[40%]  absolute">Cargando...</p>
              <ReactPlayer url={video} width="100%" height="100%" />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="absolute  w-[100%] h-[10%]  top-[60%]">
          {carousel >= 1 && (
            <button
              className=" p-2 absolute bottom-1 left-2"
              onClick={() => setCarousel(carousel - 1)}
            >
              atras
            </button>
          )}
          {carousel < long - 1 && (
            <button
              className=" p-2 absolute bottom-1 right-2"
              onClick={() => setCarousel(carousel + 1)}
            >
              delante
            </button>
          )}
        </div>
        <div className="absolute w-[100%] top-[67%] z-30  m-auto flex justify-center items-center space-x-2 ">
          {images &&
            images.map((u, i) => (
              <div
                key={i}
                className={`${
                  carousel === i
                    ? "bg-black w-[8px] h-[8px] "
                    : "bg-slate-500 w-[6px] h-[6px]"
                }  rounded-full `}
              ></div>
            ))}
        </div>
        <h4 className="text-center mt-1">
          {/* {text.modal.modalSelect.title} */}
          {modalSelect}
        </h4>

        <p className="p-4 pl-7"> {text.modal.calculator.description}</p>
        <div className="flex flex-row justify-between items-end bg  absolute w-[100%] bottom-2 ">
          <a
            href="https://github.oi/lucasPirez"
            className=" p-1 px-3 rounded cursor-pointer hover:bg-cyan-500  border-2 border-cyan-700 bg-slate-900 active:scale-95 ml-4 "
          >
            View Repositorie
          </a>
          <button
            onClick={outside}
            className=" bottom-2  text-3xl mr-3  px-2 border-2 rounded border-cyan-400 text-cyan-800 hover:scale-105 transition-all opacity-60 hover:opacity-100 "
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
