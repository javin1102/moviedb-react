import classes from "./DetailModal.module.css";
import ModalContext from "../../context/modal-ctx";
import { useContext, Fragment } from "react";
import { useEffect } from "react";
import { useGetGenre } from "../../hooks/use-fetch-get";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const DetailModalOverlay = (props) => {
  const modalCtx = useContext(ModalContext);
  const { genreList, sendRequest } = useGetGenre();
  useEffect(() => {
    sendRequest(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=26e53c79e6035b58b0922736b9a96231&language=en-US"
    );
  }, [sendRequest]);
  let bq = [];
  modalCtx.genre.forEach((e) => {
    const b = genreList.find((g) => g.id === e);
    !!b && bq.push(b);
  });

  return (
    <div className={classes.container}>
      <span onClick={modalCtx.closeModalHandler}>&#10006;</span>
      <img src={modalCtx.imageUrl} alt="Movie Backdrop" />
      <div className={classes.middle}>
        <h3>{modalCtx.title}</h3>
        <div className={classes.detail + " " + classes.top}>
          <h4 className={classes.ml}>
            Genre :{"  "}
            {bq.length > 0 &&
              bq.map((e, i) => e.name + `${bq.length - 1 !== i ? ", " : ""}`)}
          </h4>
          <h4 className={classes.mr}>Release : {"  " + modalCtx.release}</h4>
        </div>

        <div className={classes.detail + " " + classes.top}>
          <h4 className={classes.ml}>Average</h4>
          <h4 className={classes.mr}>
            {modalCtx.average + " "} ({modalCtx.averageCount} votes)
          </h4>
        </div>

        <p className={classes.sinopsis}>{modalCtx.overview}</p>
      </div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const DetailModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<DetailModalOverlay />, portalElement)}
    </Fragment>
  );
};

export default DetailModal;
