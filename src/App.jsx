import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import RickAndMorty from "./components/rickAndMorty";
import Port from "./components/Portfolio";
import { translation } from "./translation";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { TraslationProvider } from "./TraslationContext";

// const initialLanguaje = "en";

// const translation = {
//   en: {
//     header: {
//       home: "Home",
//       about: "About",
//       portfolio: "Portfolio",
//       contact: "Contact",
//     },
//     presentation: {
//       title: "Hello, I'm ",
//       subTitle: "I'm a full-stack web developer.",
//       button: "View my work.",
//     },
//     contact: {
//       name: "Name",
//       email: "Email",
//       message: "Message",
//       submit: "Submit",
//     },
//   },
//   es: {
//     header: {
//       home: "Inicio",
//       about: "Acerca",
//       portfolio: "Portafolio",
//       contact: "Contacto",
//     },
//     presentation: {
//       title: "Hola, soy ",
//       subTitle: "Soy full-stack web developer.",
//       button: "ver mis proyectos.",
//     },
//     contact: {
//       name: "Nombre",
//       email: "Email",
//       message: "Mensaje",
//       submit: "Enviar",
//     },
//     description: {
//       descrip:
//         "Soy un estudiante autodidacta de programacion web y mobile, aun no cuento con exporiencia profesional pero tengo mucha pratica en desarrollando app web y mobiles, las cuales desarrolle de manera independiente ",
//     },
//   },
// };

function App() {
  // const [languaje, setlanguaje] = useState(initialLanguaje);
  // const [text, setText] = useState(translation[languaje]);

  // const handleLanguaje = (e) => {
  //   setText(translation[e]);
  // };

  return (
    <div className=" sm:w-full">
      <TraslationProvider>
        <Port />
      </TraslationProvider>
    </div>
  );
}
{
  /* <Port text={text} handleLanguaje={handleLanguaje} />; */
}
//
export default App;
