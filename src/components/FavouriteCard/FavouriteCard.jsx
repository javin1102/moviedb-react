import classes from "./FavouriteCard.module.css";
import svg from "../../icons/sprite.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favouriteAction } from "../../store/favourite-slice";
const FavouriteCard = (props) => {
  const [isFavourite, setIsFavourite] = useState(true);
  const dispatch = useDispatch();
  const favourite = svg + "#icon-heart";

  const movie = props.movieData;

  const url = "https://image.tmdb.org/t/p/original";
  const movieData = {
    imageUrl: url + movie.imageUrl,
    title: movie.title,
    overview: movie.overview,
    average: movie.average,
    averageCount: movie.averageCount,
    release: movie.release,
    genre: movie.genre,
    id: movie.id,
  };

  const toggleFavouriteHandler = () => {
    setIsFavourite(!isFavourite);
    dispatch(favouriteAction.toggleFavouriteMovie(movieData));
  };

  const isFavouriteClass = isFavourite
    ? `${classes.favourite} ${classes.isFavourite}`
    : `${classes.favourite} ${classes.notFavourite}`;

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={movie.imageUrl} alt="MovieImage" />

        <svg className={isFavouriteClass} onClick={toggleFavouriteHandler}>
          <use xlinkHref={favourite}></use>
        </svg>
      </div>
      <p className={classes.title}>{movie.title}</p>
    </div>
  );
};
export default FavouriteCard;
