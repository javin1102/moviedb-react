/* eslint-disable jsx-a11y/img-redundant-alt */
import classes from "./Card.module.css";
import svg from "../../icons/sprite.svg";
import ModalContext from "../../context/modal-ctx";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { favouriteAction } from "../../store/favourite-slice";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const url = "https://image.tmdb.org/t/p/original";
  const movie = props.movieData;
  const imageUrl = url + movie.poster_path;
  const detail = svg + "#icon-menu";
  const favourite = svg + "#icon-heart";

  const modalCtx = useContext(ModalContext);
  const dispatch = useDispatch();
  const favMov = useSelector((state) => state.favourite.favouriteMovies);
  const movieData = {
    imageUrl: url + movie.poster_path,
    title: movie.title,
    overview: movie.overview,
    average: movie.vote_average,
    averageCount: movie.vote_count,
    release: movie.release_date,
    genre: movie.genre_ids,
    id: movie.id,
  };

  const openModalHandler = () => {
    modalCtx.openModalHandler(movieData);
  };

  const toggleFavouriteHandler = () => {
    setIsFavourite(!isFavourite);
    dispatch(favouriteAction.toggleFavouriteMovie(movieData));
  };

  useEffect(() => {
    const fav = favMov.find((m) => m.id === movie.id);
    if (!fav) setIsFavourite(false);
    else setIsFavourite(true);
  }, [favMov, movie]);

  let favouriteClass = !isFavourite
    ? `${classes.favourite}`
    : `${classes.favouriteActive}`;

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={imageUrl} alt="Card Image" />
        <div className={classes.extra}>
          <svg className={classes.details} onClick={openModalHandler}>
            <use xlinkHref={detail}></use>
          </svg>

          <svg className={favouriteClass} onClick={toggleFavouriteHandler}>
            <use xlinkHref={favourite}></use>
          </svg>
        </div>
      </div>
      <p>{movie.title}</p>
    </div>
  );
};
export default React.memo(Card);
