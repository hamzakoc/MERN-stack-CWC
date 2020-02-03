import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';

import Navbar from "./navbar"
import NewsList from "./news-list";
import EditNews from "./edit-news";
import CreateNews from "./create-news";
import CreateUser from "./create-user";
import Login from "./login";
import Logout from "./logout";

import { ProtectedRoute } from "./protected-route";



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
      <ProtectedRoute path="/admin/news" exact component={NewsList} />
      <ProtectedRoute path="/admin/edit/:id" component={EditNews} />
      <ProtectedRoute path="/admin/create" component={CreateNews} />
      <ProtectedRoute path="/admin/user" component={CreateUser} />
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/logout" component={Logout} />

      </div>
    </Router>
    </Card>
    </div>
  );
}

export default Admin;