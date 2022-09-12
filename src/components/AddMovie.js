import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const AddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    img: "",
    rate: "",
  });
  const add = () => {
  
    addMovie(newMovie);
    handleClose();
    setNewMovie({
        title: "",
        description: "",
        img: "",
        rate: "",
    })
  }
  return (
    <>
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add your movie here </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body">
              <input
                type="text"
                value={newMovie.title}
                placeholder="title"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
              ></input>
              <input
                type="text"
                value={newMovie.description}
                placeholder="description"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, description: e.target.value })
                }
              ></input>
              <input
                type="text"
                value={newMovie.img}
                placeholder="image"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, img: e.target.value })
                }
              ></input>
              <input
                type="text"
                value={newMovie.rate}
                placeholder="rate"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, rate: e.target.value })
                }
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button  variant="primary" onClick={add}>Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default AddMovie;
