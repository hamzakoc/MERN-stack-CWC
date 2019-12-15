import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody, CardGroup, CardFooter} from 'reactstrap';
import axios from 'axios';

const Exercise = props => (
  <div className="section3 "> 
 
 <CardDeck className="section3 ">
      <Card className="" >
    
        <CardBody >
          <CardTitle  ><h3>{props.exercise.title}</h3></CardTitle>
          
          <CardText>{props.exercise.description}</CardText>
          <CardFooter>
      <small className="text-muted">Son güncelleme tarihi {props.exercise.date.substring(0,10)}</small>
    </CardFooter>
        </CardBody>
      </Card>
     
    </CardDeck>

</div>

)

export default class ExercisesList extends Component {
  constructor(props) { 
    super(props);


    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/admin/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise}  key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div  className="section3-duyurular">  
           
        </div>

        
            { this.exerciseList() }
        
      </div>
      
    )
  }
}