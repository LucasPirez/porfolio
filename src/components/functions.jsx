export const apiFetch = async (url, setPersonajes, setNext, setPrev) => {
  const personajes = await fetch(url);
  const { info, results } = await personajes.json();
  setPersonajes(results);
  setNext(info.next);
  info.prev !== null ? setPrev(info.prev) : setPrev(null);
  // console.log(info, results);
};

export const getPersonajes = async (id, setPersonaje) => {
  const per = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const resultado = await per.json();
  setPersonaje(resultado);
  console.log(resultado);
};
