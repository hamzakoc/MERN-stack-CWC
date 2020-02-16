import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardDeck, CardBody,CardGroup, CardColumns, Row, Col} from 'reactstrap';
import axios from 'axios';


const base_url = 'https://wlcmcntr.herokuapp.com/';
// const base_url = 'http://localhost:5000/';

const duyurular = {
  color: '#CB8C1D',
  backgroundColor: ' #4C3327',
  textTransform: "uppercase",
  paddingLeft: '10px',
  paddingTop: '5px',
  paddingBottom: '5px',
  textAlign: 'center',
  borderRadius: '10px',
};

const News = props => (


   
      <Card  className="ml-auto m-auto">
    
        <CardBody >
        <Row>
      <Col>
          <CardTitle className="title font-weight-bold" style={duyurular} ><bold><strong  ><p>{props.news.title}</p></strong></bold></CardTitle>
          
          <CardText><p>{props.news.description}</p></CardText>
         
      <CardText className="text-muted">Son güncelleme tarihi {props.news.date.substring(0,10)}</CardText>
      </Col>
        </Row>
        </CardBody>
      
      </Card>
     
   


)

export default class NewsList extends Component {
  constructor(props) { 
    super(props);


    this.state = {news: []};
  }

  componentDidMount() {
    axios.get(base_url + 'admin/news')
      .then(response => {
        this.setState({ news: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  newsList() {
    return this.state.news.map(currentnews => {
      return <News className="card-deck card" news={currentnews}  key={currentnews._id}/>;
    })
  }

  render() {
    return (
      <div>

               <div className="section ">
      <img
                  alt="..."
                  className="img-responsive"
                  src={require("./component/images/duyurular.png")}
                  style={{ width: "100%" }}
                />
      </div>
        <CardDeck>

            <CardColumns  >  
        { this.newsList() }
           </CardColumns>
            
           </CardDeck>
             <div class="sec3-subimg2"  >
               
              </div>




        </div>
      
    )
  }
}