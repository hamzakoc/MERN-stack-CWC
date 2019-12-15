import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component.js";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function Admin() {

  const newsstyle = {
    
    paddingTop: "100px",
    paddingBottom: "100px"
      };



  return (

    
    <div style={newsstyle}>
      <Card style={{  }}>
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/admin" exact component={ExercisesList} />
      <Route path="/admin/edit/:id" component={EditExercise} />
      <Route path="/admin/create" component={CreateExercise} />
      <Route path="/admin/user" component={CreateUser} />
      </div>
    </Router>
    </Card>
    </div>
  );
}

export default Admin;