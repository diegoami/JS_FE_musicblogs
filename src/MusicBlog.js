import React, { Component } from 'react';

import logo from './logo.svg';
import './MusicBlog.css';
import LinkPost from './LinkPost.js';
import BlogPost from './BlogPost.js';
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router'

class MusicBlog extends Component {

    constructor() {
        super();
        this.state = {
            blogPosts: [],
            currentBlogPostIndex : -1,
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

        this.setState({
            loading: true
        });
        let url = "http://localhost:3001/"+this.props.url
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var blogPosts = Object.keys(data).map(function (i) {
                    return data[i];
                });
                this.setState({
                    blogPosts : blogPosts,
                    currentBlogPostIndex : -1,
                    loading: false
                });
            })
    }


    render() {
        let currentBlogPost = this.state.blogPosts[this.state.currentBlogPostIndex]
        return (
          <div className="MusicBlog">
            <header className="MusicBlog-header">
              <h1 className="MusicBlog-title">{this.props.url}</h1>
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

export default MusicBlog;
