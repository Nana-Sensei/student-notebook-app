import "./App.css";
import AddNote from "./Components/AddNote";
import AllNotes from "./Components/AllNotes";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import React from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <Container className="container">
      <Row className="note-row">
        <Col className="form-col" md="4">
          <h2 className="header">New Note</h2>
          <AddNote
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
          />
        </Col>

        <Col className="notes-col" md="8">
          <AllNotes title={title} body={body} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
