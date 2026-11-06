
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Initial from "./components/Initial";

export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(() => {
  const temaSalvo = localStorage.getItem("tema");
  return temaSalvo === null ? true : temaSalvo === "escuro";
});

  useEffect(() => {
    localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");
  }, [temaEscuro]);
  
  function mudarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <div className={temaEscuro ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-[#090811] dark:text-white">

        <Header temaEscuro={temaEscuro} mudarTema={mudarTema} />

        <Routes>
          <Route path="/" element={<Initial />} />
        </Routes>

        <Footer />

      </div>
    </div>
  );
}
