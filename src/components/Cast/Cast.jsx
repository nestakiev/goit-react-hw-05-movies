import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import { loadCastInfoMovie } from "services/moviesAPI";
import {List, ListItem} from './Cast.styled';

const BASE_PHOTO_URL = "https://image.tmdb.org/t/p/w200/";

const Cast = () => {
    const {movieId} = useParams();
    const [castInfo, setCastInfo] = useState([]);

    useEffect(() => {
        loadCastInfoMovie(movieId).then(setCastInfo);
    }, [movieId]);

    if (castInfo.length === 0) {
        return null;
    }

    return (
        <List>
            {castInfo.map(actor => {
                const {name, character, profile_path, id} = actor;

                return <ListItem key={id}>
                    <img src={BASE_PHOTO_URL + profile_path} alt={name}/>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </ListItem>
            })}
        </List>
    )
};

export default Cast;