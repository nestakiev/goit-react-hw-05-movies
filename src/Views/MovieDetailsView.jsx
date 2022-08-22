import { useEffect, useState, Suspense } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { loadFullInfoMovie } from "services/moviesAPI";
import { MovieInfoContainer, InfoContainer, ButtonLink, IconArrowBack } from './MovieDetailsView.styled';
import { ThreeDots } from "react-loader-spinner";

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';


const MovieDetailsView = () => {

    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const location = useLocation();
    const backLink = location?.state?.from ?? '/'


    useEffect (() => {
        loadFullInfoMovie(movieId).then(setMovieInfo);
    }, [movieId]);

    if (Object.keys(movieInfo).length === 0) {
        return null;
    }




    const {vote_average, title, overview, genres, poster_path, release_date} = movieInfo;
    const posterLink = BASE_POSTER_URL + poster_path;
    const userScore = parseInt(vote_average * 10);
    const genresInfo = genres.map(a => a.name).join(" ");
    const releaseYear = release_date.split('-')[0];

    console.log(location)

    // console.log(backLink);

    return (
        <div>
        <MovieInfoContainer>
            <div>
            <ButtonLink to={backLink}> <IconArrowBack/>Go Back</ButtonLink>
            <img src={posterLink} alt={`${title} poster`}/>
            </div>
            <InfoContainer>
                <h2>{title} ({releaseYear})</h2>
                <p>User Score: {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genresInfo}</p>
            </InfoContainer>
        </MovieInfoContainer>
        <section>
        <p>Additional information</p>
        <ul>
            <li>
            <Link to='cast' state={location.state}>Cast</Link>
            </li>
            <li>
            <Link to='reviews' state={location.state}>Reviews</Link>
            </li>
        </ul>
        </section>
            <Suspense fallback={<ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
            />}>
            <Outlet/>
            </Suspense>
        </div>
    )
}

export default MovieDetailsView;