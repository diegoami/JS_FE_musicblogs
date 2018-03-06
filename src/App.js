import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            titles: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        fetch('http://localhost:3001/italian/')
            .then(res => res.json())
            .then(data => {
                var titles  = Object.keys(data).map(function (i) {
                    return data[i]['title'] + '\n';
                });
                this.setState({
                    titles : titles,
                    loading: false
                });
            })
    }


    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                { this.state.titles.map(function(title, index){
                    return <li key={ index }>{title}</li>;
                })}
            </p>
          </div>
    );
  }
}

export default App;
