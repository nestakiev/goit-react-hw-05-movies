import { useState, useEffect } from "react";
import { loadTrendingMovies } from "services/moviesAPI";
import { MoviesList } from "components/MoviesList/MoviesList";

const HomeView = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    
    useEffect(() => {
        loadTrendingMovies().then(setTrendingMovies);
    }, []);

    return (
        <section>
        <h2>Trending today</h2>
        <MoviesList movies={trendingMovies} link={`movies/`}/>
        </section>
    )
};

export default HomeView;