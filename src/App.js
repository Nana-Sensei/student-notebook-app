import './App.css';
import AddNote from './Components/AddNote';
import AllNotes from './Components/AllNotes';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <Container className="container">
      
      <Row className="note-row">
        <Col className="form-col" md="4">
        <h2 className="header">New Note</h2>
          <AddNote />
        </Col>

        <Col className="notes-col" md="8">
          <AllNotes />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
