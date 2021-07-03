import { useReducer } from "react";
import ModalContext from "./modal-ctx";

const defaultModalState = {
  isOpen: false,
  imageUrl: "",
  title: "",
  overview: "",
  average: 0,
  averageCount: 0,
  release: 0,
  id: 0,
  genre: [],
};

const modalReducer = (state, action) => {
  if (action.type === "OPEN_MODAL") {
    return {
      imageUrl: action.imageUrl,
      title: action.title,
      overview: action.overview,
      average: action.average,
      averageCount: action.averageCount,
      release: action.release,
      genre: action.genre,
      isOpen: true,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return defaultModalState;
  }
  return defaultModalState;
};

const ModalProvider = (props) => {
  const [modalState, dispatchModalAction] = useReducer(
    modalReducer,
    defaultModalState
  );

  const openModalHandler = (action) => {
    dispatchModalAction({
      type: "OPEN_MODAL",
      imageUrl: action.imageUrl,
      title: action.title,
      overview: action.overview,
      average: action.average,
      averageCount: action.averageCount,
      release: action.release,
      genre: action.genre,
      id: action.id,
    });
  };
  const closeModalHandler = () => {
    dispatchModalAction({ type: "CLOSE_MODAL" });
  };
  const modalContext = {
    isOpen: modalState.isOpen,
    imageUrl: modalState.imageUrl,
    title: modalState.title,
    overview: modalState.overview,
    average: modalState.average,
    averageCount: modalState.averageCount,
    release: modalState.release,
    genre: modalState.genre,
    id: modalState.id,
    openModalHandler: openModalHandler,
    closeModalHandler: closeModalHandler,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
