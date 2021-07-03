import { useState } from "react";
import { useEffect } from "react";
import classes from "./Header.css";
import Slider from "react-slick";
import useGet from "../../hooks/use-fetch-get";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Header = () => {
  const url = "https://image.tmdb.org/t/p/original";
  const { movieList, sendRequest } = useGet();
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    className: "slider",
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    sendRequest(
      "https://api.themoviedb.org/3/movie/popular?api_key=26e53c79e6035b58b0922736b9a96231&language=en-US&page=1"
    );
  }, [sendRequest]);

  return (
    <header>
      {!!movieList && (
        <Slider {...settings}>
          {movieList.map((movie, i) => {
            if (i >= 6) return "";
            else {
              if (movie.backdrop_path === null) {
                return "";
              } else {
                return (
                  <div key={i}>
                    <img
                      src={url + movie.backdrop_path}
                      alt="PopularMovieImage"
                    />
                  </div>
                );
              }
            }
          })}
        </Slider>
      )}
    </header>
  );
};
export default Header;
