import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-bootstrap/Modal';

import { Octokit, App as OctokitApp } from 'octokit';
import { Button } from 'react-bootstrap';

async function getRepositories(username: string) {
  const octokit = new Octokit();
  console.log(await octokit.request("GET /users/{user}/repos", {
    user: username
  }));
}

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    getRepositories("NathanStern");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton={true}>
            <Modal.Title>Under Construction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Soon to be the home of my personal website.</p>
            <p>For now, please take a look at my <a href="https://linkedin.com/in/nathan-stern">Linkedin</a>.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)} variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal>
        <Button onClick={() => setShow(true)} variant="primary">Show Message</Button>
      </header>
      <div className="testing-container">
        <p className="testing">Java</p>
        <p className="testing">Typescript</p>
      </div>
    </div>
  );
}

export default App;
