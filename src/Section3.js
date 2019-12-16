import React, { Component } from 'react';

import {Card, CardTitle, CardText, CardDeck, CardBody,CardFooter} from 'reactstrap';
import axios from 'axios';

const News = props => (
  <div className="section3 "> 
 
 <CardDeck className="section3 ">
      <Card className="" >
    
        <CardBody >
          <CardTitle  ><h3>{props.news.title}</h3></CardTitle>
          
          <CardText>{props.news.description}</CardText>
          <CardFooter>
      <small className="text-muted">Son güncelleme tarihi {props.news.date.substring(0,10)}</small>
    </CardFooter>
        </CardBody>
      </Card>
     
    </CardDeck>

</div>

)

export default class NewsList extends Component {
  constructor(props) { 
    super(props);


    this.state = {news: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/admin/news/')
      .then(response => {
        this.setState({ news: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  newsList() {
    return this.state.news.map(currentnews => {
      return <News news={currentnews}  key={currentnews._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div  className="section3-duyurular">  
           
        </div>

        
            { this.newsList() }
        
      </div>
      
    )
  }
}