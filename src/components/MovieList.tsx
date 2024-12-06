import React from "react";
import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

// Definir los props con la interfaz de Movie
interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({  movies }) => {
    return(
        <div className="movieList">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;