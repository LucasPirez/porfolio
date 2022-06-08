import { useState, useEffect } from "react";

const useMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };
  return {
    x: state.x,
    y: state.y,
    handleMove,
  };
};

export default useMove;
