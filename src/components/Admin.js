import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';

import Navbar from "./navbar.component"
import ExercisesList from "./exercises-list.component.js";
import EditExercise from "./edit-exercise.component";
import CreateExercise from "./create-exercise.component";
import CreateUser from "./create-user.component";
import Login from "./login.component";
import Logout from "./logout";

import { ProtectedRoute } from "./protected.route";



function Admin() {

  const newsstyle = {
    
    paddingTop: "100px",
    paddingBottom: "100px",
      };



  return (

    
    <div style={newsstyle}>
      <Card style={{  }}>
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <ProtectedRoute path="/admin" exact component={ExercisesList} />
      <ProtectedRoute path="/admin/edit/:id" component={EditExercise} />
      <ProtectedRoute path="/admin/create" component={CreateExercise} />
      <ProtectedRoute path="/admin/user" component={CreateUser} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />

      </div>
    </Router>
    </Card>
    </div>
  );
}

export default Admin;