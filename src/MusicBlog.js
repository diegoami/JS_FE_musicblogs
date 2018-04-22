import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './MusicBlog.css';
import LinkPost from './LinkPost.js';
import BlogPost from './BlogPost.js';
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MusicBlog extends Component {

    constructor() {
        super();
        this.state = {
            blogPosts: [],
            currentBlogPostIndex : -1,
            loading: false,
            dropdownOpen: false
        };
        this.endpoint = process.env.REACT_APP_NODE_ENDPOINT
        this.toggle = this.toggle.bind(this);
        this.select= this.select.bind(this);
    }

    change = e => {
        this.setState({currentBlogPostIndex: e.target.value});

    }

    select = e => {
        this.setState({currentBlogPostIndex: e.target.value});

    }

    toggle = e => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
            blogPosts : prevState.blogPosts,
            currentBlogPostIndex : prevState.currentBlogPostIndex,
            loading: prevState.loading
        }));
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        this.setState({
            loading: true
        });
        let url = this.endpoint+this.props.url
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var blogPosts = Object.keys(data["posts"]).map(function (i) {
                    return data["posts"][i];
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
                  <div className="form-group">

                      <div className="row">
                          <div className="col-1">
                            <label htmlFor="songsSelect">Songs: </label>
                          </div>
                          <div className="col-4">

                              <select id="songsSelect" className="form-control" onChange={this.change} value={this.state.currentBlogPostIndex} >
                              { this.state.blogPosts.map(function(blogPost, index) {
                                  return <option value={index}> { blogPost['title'] }  </option>
                              })}
                              </select>
                          </div>
                      </div>
                   </div>
              {(currentBlogPost != null) &&
              <p className="MusicBlog-post">
                    <BlogPost index={this.state.currentBlogPostIndex} {...currentBlogPost}  />
              </p>
          }
          </div>
    );
  }
}

export default MusicBlog;
