import React, { useState } from "react";
import Modal from "react-modal";

const Model = () => {
     const [modalIsOpen, setModalIsOpen] = useState(false);

     const openModal = () => {
       setModalIsOpen(true);
     };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Model;
