import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const MyFooter = () => (
  <footer className="bg-dark text-white py-2">
    <Row className="text-center">
      <Col xs={{ span: 6, offset: 3 }}>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
          <Col className="mb-2">
            <p><a href="/" className="text-white">Mappa</a></p>
            <p><a href="/" className="text-white">Segnalazioni Fenomeni Intensi</a></p>
            <p><a href="/" className="text-white">Previsioni Testuali</a></p>
            <p><a href="/" className="text-white">Contact Us</a></p>
          </Col>
          <Col className="mb-2">
            <p><a href="/" className="text-white">Mappa Mare</a></p>
            <p><a href="/" className="text-white">Mappa Montagna</a></p>
            <p><a href="/" className="text-white">Avviso di Burrasca</a></p>
          </Col>
          <Col className="mb-2">
            <p><a href="/" className="text-white">Notizie</a></p>
            <p><a href="/" className="text-white">Località</a></p>
            <p><a href="/" className="text-white">Rivista di Meteorologia</a></p>
          </Col>
          <Col className="mb-2">
            <p><a href="/" className="text-white">Cookie Preferences</a></p>
            <p><a href="/" className="text-white">Terms of Use</a></p>
            <p><a href="/" className="text-white">Corporate Information</a></p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-light rounded-0"
              style={{ fontSize: '0.75rem' }}
            >
              Service Code
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mt-2 mb-0" style={{ fontSize: '0.75rem' }}>
            © 1997-{new Date().getFullYear()} EpicMeteo, Inc.
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default MyFooter;
