import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header';
import Home from './components/home';
import Cast from './components/cast';
import SeasonInfo from './components/seasonInfo';

const poseAPI = 'https://4d949b98-1de1-48a0-bf11-441904ffdc1f-bluemix.cloudant.com/pose/_all_docs?include_docs=true'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pose: [], 
       };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    console.log("componentDidMount");
  }

  fetchData = async () => {
    console.log("********", "fetchData");
    const response = await fetch(poseAPI);
    console.log("response", response);
    const json = await response.json();
    console.log("********", json);

    this.setState({
      pose: json.rows[0].doc,
    });
  };


  render() {

    const { pose } = this.state

    return (
      <BrowserRouter>
          <Header pose={pose} >
            <Switch>
              <Route exact path='/' render={ (props) => <Home {...props} pose={pose} />}/>
              <Route path='/cast' render={ (props) => <Cast {...props}  pose={pose} />}/>
            </Switch>
          </Header>
      </BrowserRouter>
    );
  }
}

export default App;



// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
// </header>