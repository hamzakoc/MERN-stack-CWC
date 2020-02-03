import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardDeck, CardBody,CardGroup, CardColumns} from 'reactstrap';
import axios from 'axios';

const News = props => (


   
      <Card  >
    
        <CardBody >
          <CardTitle className="duyurular"  ><bold><strong  ><p>{props.news.title}</p></strong></bold></CardTitle>
          
          <CardText><p>{props.news.description}</p></CardText>
         
      <CardText className="text-muted">Son güncelleme tarihi {props.news.date.substring(0,10)}</CardText>
  
        </CardBody>
      </Card>
    


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
      return <News className="card-deck card" news={currentnews}  key={currentnews._id}/>;
    })
  }

  render() {
    return (
      <div>

        <div class="sec3-subimg1"> 
               </div>
        <CardDeck>

            <CardColumns  >  
        { this.newsList() }
           </CardColumns>
            
           </CardDeck>
             <div class="sec3-subimg2">
               
              </div>




        </div>
      
    )
  }
}