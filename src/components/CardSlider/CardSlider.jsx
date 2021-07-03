import Card from "../Card/Card";
import classes from "./CardSlider.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Fragment } from "react";
const CardSlider = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    className: "card-slider",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <Fragment>
      <Slider {...settings}>
        {props.movieList.map((movie, i) => {
          return (
            <div key={movie.id}>
              <Card key={movie.id} movieData={movie} />
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
};
export default CardSlider;
