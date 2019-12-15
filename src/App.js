
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navi from './Navi'
import FooterPage from './FooterPage'
import { Col} from 'reactstrap';
import Section1 from './Section1'
import Section2 from './Section2'
import Admin from './components/Admin'

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
