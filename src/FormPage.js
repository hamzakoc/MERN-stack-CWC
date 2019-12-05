import React from "react";
import { Container, Row, Col, Button, } from 'reactstrap';
import Map from './Navbar/Map/Map.js'

const FormPage = () => {
  return (
  <div>
  
    <Container>
      <Row>
        <Col md="6">
          <form>
            <p className="h4 text-center mb-4">Bize Yazın</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              İsminiz
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              E-mail adresiniz
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Konu
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Mesajınız
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <span className="text-center mt-4">
              <Button color="success" outline type="submit">
                Gönder
                {/* <IconContext far icon="paper-plane" className="ml-2" /> */}
              </Button>
            </span>
          </form>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default FormPage;