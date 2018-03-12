import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import LinkPost from './LinkPost.js';
import BlogPost from './BlogPost.js';
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router'

class App extends Component {

    constructor() {
        super();

        this.state = {
            blogPosts: [],
            currentBlogPostIndex : 0,
            loading: false
        };
    }

    change = e => {
        this.setState({currentBlogPostIndex: e.target.value});

    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        fetch('http://localhost:3001/french/')
            .then(res => res.json())
            .then(data => {
                var blogPosts = Object.keys(data).map(function (i) {
                    return data[i];
                });
                this.setState({
                    blogPosts : blogPosts,
                    currentBlogPostIndex : 0,
                    loading: false
                });
            })
    }


    render() {
        let currentBlogPost = this.state.blogPosts[this.state.currentBlogPostIndex]
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
              <select onChange={this.change} >
                  { this.state.blogPosts.map(function(blogPost, index) {
                      return <option value={index}> { blogPost['title'] }  </option>
                  })}
              </select>
              {(currentBlogPost != null) &&
                  <p className="App-intro">
                        <BlogPost index={this.state.currentBlogPostIndex} title={currentBlogPost['title']} content={currentBlogPost['content']} videoId={currentBlogPost['videoId']}  />
                  </p>
              }
          </div>
    );
  }
}

export default App;
