import React from "react";
const ModalContext = React.createContext({
  isOpen: false,
  imageUrl: "",
  title: "",
  overview: "",
  average: 0,
  averageCount: 0,
  release: 0,
  genre: [],
  id: 0,
  openModalHandler: () => {},
  closeModalHandler: () => {},
});

export default ModalContext;
