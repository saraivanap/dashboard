// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
