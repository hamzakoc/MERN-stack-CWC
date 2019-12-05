
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navi from './Navi'
import FooterPage from './FooterPage'
import { Col} from 'reactstrap';
import CardApi from './CardApi'
import Main from './Main'

import './css/app.css';

export default class App extends Component {

 render() {

    return (
      
      <div class="app">
        
        <Col>
        <Navi/>
     
        <br></br>
        {/* <div ><CardApi/></div> */}
        {/* <div><Main/></div> */}
        
        
        
        <br></br>
        <FooterPage/>
        </Col>
        
      </div>
      
    )
  }
}
