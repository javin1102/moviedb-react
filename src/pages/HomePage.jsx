import Navbar from "../components/NavBar/Navbar";
import Header from "../components/Header/Header";
import TopRated from "../components/TopRated/TopRated";
import DetailModal from "../components/DetailModal/DetailModal";
import ModalContext from "../context/modal-ctx";

import { Fragment, useContext } from "react";
const HomePage = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <Fragment>
      <Navbar />
      <Header />
      <TopRated />
      {modalCtx.isOpen && <DetailModal />}
    </Fragment>
  );
};
export default HomePage;
