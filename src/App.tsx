import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-bootstrap/Modal';

import { Octokit, App as OctokitApp } from 'octokit';
import { Button, Col, Row } from 'react-bootstrap';
import { Repositories } from './Repositories';

async function getRepositories(username: string) {
  const octokit = new Octokit();
  console.log(await octokit.request("GET /users/{user}/repos", {
    user: username
  }));
}

// asynchronous function to get the list of languages for a repository
async function getLanguages(repository: string, owner: string) {
  const octokit = new Octokit();
  console.log(await octokit.request("GET /repos/{owner}/{repo}/languages", {
    owner: owner,
    repo: repository
  }));
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton={true}>
            <Modal.Title>Under Construction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Soon to be the home of my personal website.</p>
            <p>
              For now, please take a look at my{" "}
              <a href="https://linkedin.com/in/nathan-stern">Linkedin</a>.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Button onClick={() => setShow(true)} variant="primary">
          Show Message
      </Button>
      <Repositories></Repositories>
    </div>
  );
}

export default App;
