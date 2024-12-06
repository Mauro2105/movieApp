import React from "react"; // Importamos React
import Swal from "sweetalert2"; // Importamos la libreria de los pop-ups
import { Movie } from "../types/Movie"; // Importa la interfaz de las props

interface MovieCardProps {
  movie: Movie; // Interfaz que define las propiedades que recibe el componente
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    // Definir la ruta para importar la imagen basada en el en el nombre de la imagen
    const imageSrc = new URL(`../assets/img/${movie.image}`,import.meta.url).href;

    // Crear la ventana emergente
    const showDetails = () => {
        Swal.fire({
            title: movie.title,
            text: `Gender: ${movie.gender}`,
            imageUrl: imageSrc,
            imageWidth: 300,
            imageAlt: `${movie.title} Poster`,
            confirmButtonText: "Excelente"
        });
    };

    return (
        <div className="movie-card" onClick={showDetails}>
            <img src={imageSrc} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            <p>{movie.gender}</p>
        </div>
    )
}

export default MovieCard; // Exportamos el componente MovieCard para usarlo en otros componentes