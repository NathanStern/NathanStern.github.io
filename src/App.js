import logo from './logo.svg';
import './App.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Future Homepage of NathanStern.github.io</p>

        <button className="btn btn-primary" onClick={handleShow}>Learn More</button>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This website is the future home of an interactive resume and project list. For now, please take a look at <a href="https://linkedin.com/in/nathan-stern">my LinkedIn</a>.
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>

      </header>
    </div>
  );
}

export default App;
