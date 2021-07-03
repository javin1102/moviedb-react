import { useEffect } from "react";
import CardSlider from "../CardSlider/CardSlider";
import useGet from "../../hooks/use-fetch-get";
import classes from "./TopRated.module.css";

const TopRated = () => {
  const { sendRequest, movieList } = useGet();
  // "https://api.themoviedb.org/3/movie/top_rated?api_key=26e53c79e6035b58b0922736b9a96231&language=en-US&page=1"
  useEffect(() => {
    sendRequest(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=26e53c79e6035b58b0922736b9a96231&language=en-US&page=1"
    );
  }, [sendRequest]);
  return (
    <div className={classes.container}>
      <h3>Top Rated</h3>
      {movieList.length > 0 && <CardSlider movieList={movieList} />}
    </div>
  );
};
export default TopRated;
