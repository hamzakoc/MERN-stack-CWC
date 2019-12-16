
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navi from './Navi'
import FooterPage from './FooterPage'
import { Col} from 'reactstrap';


import './css/app.css';

export default class App extends Component {

 render() {

    return (
      
      <div class="app">
        
        <Col>
        <Navi/>
      
        <FooterPage/>
        </Col>
        
      </div>
      
    )
  }
}
