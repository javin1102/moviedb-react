import Navbar from "../components/NavBar/Navbar";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import FavouriteCard from "../components/FavouriteCard/FavouriteCard";
import classes from "./FavouritePage.module.css";
const FavouritePage = () => {
  const favMovies = useSelector((state) => state.favourite.favouriteMovies);

  return (
    <Fragment>
      <Navbar />
      <div className={classes.container}>
        {console.log(favMovies)}

        {favMovies.map((mov, i) => (
          <FavouriteCard key={mov.id} movieData={mov} />
        ))}
      </div>
    </Fragment>
  );
};
export default FavouritePage;
