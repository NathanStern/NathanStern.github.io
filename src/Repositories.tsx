import { Container, Col, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import { Octokit } from "octokit";

function RepositoryTile(props: any) {
    return (
        <div
          className={"figma-container"}
          onClick={() => window.open(props.url, "_blank")}
        >
          <h3 style={{ wordBreak: "break-all" }}>{props.title}</h3>
          <div className="testing-container">
            {props.languages.map((language: string) => {
                return <p key={language}  className="testing">{language}</p>;
            })}
          </div>
          <p>{props.description}</p>
        </div>
    );
}

async function getRepositoriesAndLanguages(username: string, setState: Function) { 
    const octokit = new Octokit();
    const repos = await octokit.request("GET /users/{user}/repos", {
        user: username
    });

    const repositories = [];

    for (const repo of repos.data) { 
        const languages = await octokit.request("GET /repos/{owner}/{repo}/languages", {
            owner: username,
            repo: repo.name
        });

        repositories.push({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            languages: Object.keys(languages.data)
        })
    }

    console.log(repositories);
    setState(repositories);
}

export function Repositories() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getRepositoriesAndLanguages("NathanStern", setRepos);
    }, []);

    return (
      <Container>
        <Row className="test-row">
            {repos
              .map((repo: any, index: number) => {
                return (
                  <Col key={`${repo.url}`} lg={"auto"} className="test-row">
                    <RepositoryTile
                      title={repo.name}
                      languages={repo.languages.slice(0, 3)}
                      description={repo.description}
                      url={repo.url}
                    />
                  </Col>
                );
              })}
        </Row>
      </Container>
    );
}
