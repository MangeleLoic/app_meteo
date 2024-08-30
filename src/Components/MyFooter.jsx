import React from 'react';
import { Row, Col } from 'react-bootstrap';


const MyFooter = () => (
  <footer className="bg-dark text-white py-4">
    <Row className="text-center mt-5">
      <Col xs={{ span: 6, offset: 3 }}>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
          <Col>
            <p><a href="/" alt="footer link" className="footer-link">Mappa</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Segnalazioni Fenomeni Intensi</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Previsioni Testuali</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Contact Us</a></p>
          </Col>
          <Col>
            <p><a href="/" alt="footer link" className="footer-link">Mappa Mare</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Mappa Montagna</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Avviso di Burrasca</a></p>
          </Col>
          <Col>
            <p><a href="/" alt="footer link" className="footer-link">Notizie</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Località</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Rivista di Meteorologia</a></p>
          </Col>
          <Col>
            <p><a href="/" alt="footer link" className="footer-link">Cookie Preferences</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Terms of Use</a></p>
            <p><a href="/" alt="footer link" className="footer-link">Corporate Information</a></p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <button
              type="button"
              className="btn btn-sm footer-button rounded-0 mt-3"
            >
              Service Code
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2 mt-2 copyright">
            © 1997-{new Date().getFullYear()} EpicMeteo, Inc.
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default MyFooter;
