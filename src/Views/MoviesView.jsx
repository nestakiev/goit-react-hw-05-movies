import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { loadMovieOnSearch } from "services/moviesAPI";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
    if(searchParams.get('search')) {
        loadMovieOnSearch(searchParams.get('search')).then(setMovies);}
    }, [searchParams])

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