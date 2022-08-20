import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { loadMovieOnSearch } from "services/moviesAPI";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        const fetchMoviesBySearch = async () => {
            const data = await loadMovieOnSearch(searchQuery).then(response => response).catch(error => console.log(error));
            setMovies(data)
        };
    if(searchQuery) {
        fetchMoviesBySearch();
    }}, [searchQuery]);

    const submitSearch = (search) => {
        setSearchParams(search !== "" ? {search} : {})
    };

    return (
        <main>
            <SearchBar onSubmit={submitSearch}/>
            {movies && <MoviesList movies={movies} state={{from: location}}/>}
        </main>
    )
};

export default Movies;