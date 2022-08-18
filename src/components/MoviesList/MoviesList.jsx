import { Link } from "react-router-dom";

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