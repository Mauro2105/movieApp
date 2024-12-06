import React, {useState} from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import BackButton from "./components/BackButton";

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Los Vengadores",
      gender: "Ciencia Ficción",
      image: "vengadores.jpg",
    },
    {
      id: 2,
      title: "Corazones de Hierro",
      gender: "Acción",
      image: "fury.jpg",
    },
    {
      id: 3,
      title: "Scarface",
      gender: "Drama",
      image: "Scarface.jpeg",
    },
    {
      id: 4,
      title: "Diamante de Sangre",
      gender: "Drama",
      image: "diamanteDeSangre.jpg",
    },
    {
      id: 5,
      title: "La Propuesta",
      gender: "Romance",
      image: "propuesta.jpg",
    },
    {
      id: 6,
      title: "Súper Cool",
      gender: "Comedia",
      image: "supercool.jpg",
    },
    {
      id: 7,
      title: "Shrek Felices Para Siempre",
      gender: "Comedia",
      image: "shrek.jpg",
    },
    {
      id: 8,
      title: "El Resplandor",
      gender: "Terror",
      image: "elresplandor.jpg",
    },
    {
      id: 9,
      title: "El Perfecto Asesino",
      gender: "Acción",
      image: "professional.jpg",
    },
  ]);
  return(
    <div className="app-container">
      <h1 className="app-title">🎬 Tus Peliculas Favoritas</h1>
      <MovieList movies={movies} />
      <Footer />
      <BackButton />
    </div>
  )
}

export default App;