import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

export const MoviesList = ({movies, link, state}) => {

    return (
        <ul>
        {movies.map(movie => {
                const {id, title} = movie;
                return (
                    link ? 
                    <li key={id}><Link to={`${link}${id}`} state={state}>{title}</Link></li>
                    :
                    <li key={id}><Link to={`${id}`} state={state}>{title}</Link></li>
                )
            })}
        </ul>
    )
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    link: PropTypes.string,
    state: PropTypes.object,
}