import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPost from  './BlogPost.js';


class App extends Component {

    constructor() {
        super();

        this.state = {
            blogPosts: [],
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
                var blogPosts = Object.keys(data).map(function (i) {
                    return data[i];
                });
                this.setState({
                    blogPosts : blogPosts,
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
                { this.state.blogPosts.map(function(blogPost, index) {
                    return <BlogPost index={index} title={blogPost['title']} />
                })}
            </p>
          </div>
    );
  }
}

export default App;
