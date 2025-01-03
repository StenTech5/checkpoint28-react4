import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

const App = () => {
    const [movies, setMovies] = useState([
        {
            title: 'Inception',
            description: 'A thief who steals corporate secrets through dream-sharing.',
            posterURL: 'https://th.bing.com/th/id/R.7d82d780b0679dba7737c24246e50818?rik=b2HcjJxLhtY3MA&pid=ImgRaw&r=0',
            rating: 4.8,
            trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
        {
            title: 'The Matrix',
            description: 'A computer hacker learns about the true nature of his reality.',
            posterURL: 'https://th.bing.com/th/id/OIP.k_skfJxsMa_aukXa69rBAwHaJ4?rs=1&pid=ImgDetMain',
            rating: 4.7,
            trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
        {
            title: 'X-men',
            description: 'X-men days of the future.',
            posterURL: 'https://th.bing.com/th/id/R.0f7f1bc9cd4c58a345662cce310cbfab?rik=L7%2b889TU95tiNw&pid=ImgRaw&r=0',
            rating: 4.7,
            trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
        {
            title: 'Black Boys',
            description: 'The New York Times stated that director Sonia Lowman "takes a commendable poetic approach," and that the film has "moments of joy."',
            posterURL: 'https://image.tmdb.org/t/p/w500/wqQOPm3RbpVbYNDyNTKJKnqk1xq.jpg',
            rating: 4.9,
            trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
        {
            title: 'Merlin',
            description: 'Merlin is a two-part 1998 television miniseries that originally aired on NBC. It retells the legend of King Arthur from the perspective of the wizard Merlin.',
            posterURL: 'https://th.bing.com/th/id/R.d3a53ff267e0cd4e94ce7af27215da86?rik=%2fQpsLllfkb4IBQ&riu=http%3a%2f%2fwww.newdvdreleasedates.com%2fimages%2fmovies%2fmerlin-2008.jpg&ehk=HeQQU4GBIuDB%2fm9UfOIz9bIpqmQmwV%2f4oKw2EJvZ9pw%3d&risl=&pid=ImgRaw&r=0',
            rating: 4.7,
            trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
        {
            title: 'The Flash',
            description: 'The Flash is a 2023 American superhero film based on the DC Comics character Barry Allen / Flash. ',
            posterURL: 'https://th.bing.com/th/id/OIP.6xEWXOD7icJGj0gfa5GpCQHaJk?rs=1&pid=ImgDetMain',
            rating: 4.7,
            trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
    ]);

    const [searchTitle, setSearchTitle] = useState('');
    const [searchRating, setSearchRating] = useState('');

    const addMovie = (newMovie) => {
        setMovies([...movies, { ...newMovie, rating: parseFloat(newMovie.rating) }]);
    };

    const filterMovies = () => {
        return movies.filter(
            (movie) =>
                movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
                movie.rating >= parseFloat(searchRating || 0)
        );
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Movie App</h1>
                            <Filter
                                filterMovies={filterMovies}
                                setSearchTitle={setSearchTitle}
                                setSearchRating={setSearchRating}
                            />
                            <AddMovieForm addMovie={addMovie} />
                            <MovieList movies={filterMovies()} />
                        </div>
                    }
                />
                <Route
                    path="/movie/:title"
                    element={<MovieDetails movies={movies} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
