import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data }).catch(err => console.log(err));
      });
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Andrew Hinga</h5>
          <h6 className="card-subtitle mb-2 text-muted">andrew@gmail.com</h6>
          <p className="card-text">Stay Hungry, Stay Foolish</p>
        </div>
      </div>
    );
  }
}

export default App;
