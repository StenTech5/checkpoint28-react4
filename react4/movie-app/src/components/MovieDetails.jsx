import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
    const { title } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((movie) => movie.title === title);

    if (!movie) return <h2>Movie not found</h2>;

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <img src={movie.posterURL} alt={movie.title} />
            <iframe
                width="560"
                height="315"
                src={movie.trailerLink}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
};

export default MovieDetails;
