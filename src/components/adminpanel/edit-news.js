import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditNews extends Component {
  constructor(props) {
    super(props);


    this.state = {
      username: '',
      title:'',
      description: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount=()=> {
   
    axios.get('http://localhost:5000/admin/news/'+this.props.match.params.id)
    // axios.get( PROCESS.env.base_url || 'localhost:5000' + '/admin/news'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          title: response.data.title,
          description: response.data.description,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/admin/users/')
    // axios.get( PROCESS.env.base_url || 'localhost:5000' + '/admin/users')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername=(e)=>{
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription=(e)=> {
    this.setState({
      description: e.target.value
    })
  }

  onChangeTitle=(e)=> {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDate=(date)=> {
    this.setState({
      date: date
    })
  }

  onSubmit=(e)=> {
    e.preventDefault();

    const news = {
      username: this.state.username,
      title:this.state.title,
      description: this.state.description,
      date: this.state.date
    }

    console.log(news);

    axios.post('http://localhost:5000/admin/news/update/' + this.props.match.params.id, news)
    // axios.post( PROCESS.env.base_url || 'localhost:5000' + '/admin/news/update/' + this.props.match.params.id, news)
      .then(res => console.log(res.data));

    
  }

  render() {
    return (
    <div>
      <h3>Edit News</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label>Title </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>

        <div className="form-group"> 
          <label>Description </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        
        <div className="form-group">
          <label>Date </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit News" className="btn btn-info" />
        </div>
      </form>
    </div>
    )
  }
}