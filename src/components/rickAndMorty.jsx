import { apiFetch, getPersonajes } from "./functions";
import { useState, useEffect } from "react";

const RickAndMorty = () => {
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [personajes, setPersonajes] = useState(null);
  const [personaje, setPersonaje] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    apiFetch(url, setPersonajes, setNext, setPrev);
    getPersonajes(id, setPersonaje);
  }, [url, id]);

  const sigPersonaje = (url) => {
    setUrl(url);
  };

  const antPersonaje = (url) => {
    setUrl(url);
  };
  return (
    <div className="container m-auto max-w-screen-lg bg-gradient-to-br to-teal-300 from-cyan-300 height-100 backdrop-blur">
      <h2 className="flex justify-center">create React App</h2>
      <div className=" flex">
        <div>
          <div>
            {prev === null ? (
              " "
            ) : (
              <button
                onClick={() => antPersonaje(prev)}
                className="text-lg p-1 px-2 w-28 border-solid border-2 border-cyan-600 rounded-md bg-gradient-to-b to-slate-400 from-cyan-900 text-gray-100 active:translate-y-0.5 m-1 hover:opacity-90 active:text-gray-300  focus:shadow-lg shadow-cyan-700/50"
              >
                prev
              </button>
            )}
            {next == null ? (
              " "
            ) : (
              <button
                onClick={() => sigPersonaje(next)}
                className="text-lg p-1 px-2 w-28 border-solid border-2 border-cyan-600 rounded-md bg-gradient-to-b to-slate-400 from-cyan-900 text-gray-100 active:translate-y-0.5 m-1 hover:opacity-90 active:text-gray-300  active:shadow-lg shadow-cyan-700/50"
              >
                {" "}
                next
              </button>
            )}
          </div>
          <div className="bg-lime-50 rounded-2xl">
            <h3 className="text-lg text-center bg-slate-50 rounded-2xl">
              Personajes
            </h3>

            {personajes !== null
              ? personajes.map((user) => (
                  <p
                    className="hover:cursor-pointer  hover:translate-x-1 p-2  active:text-slate-500 transition-all font-bold p-name"
                    key={user.id}
                    onClick={() => setId(user.id)}
                  >
                    {user.name}
                  </p>
                ))
              : " "}
          </div>
        </div>
        <div className="m-auto">
          {personaje !== null ? (
            <div className="w-max  ">
              <h4 className="text-3xl w-max m-auto mb-6  ">{personaje.name}</h4>
              <img src={personaje.image} alt="carrrrgo" />
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
