
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navi from './Navi'
import FooterPage from './FooterPage'
import { Col} from 'reactstrap';

export default class App extends Component {

 render() {

    return (
      <div>
        <Col>
        <Navi/>
         
        <br></br>
        
        <br></br>
        <FooterPage/>
        </Col>
      </div>
    )
  }
}
