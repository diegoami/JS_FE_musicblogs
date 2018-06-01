import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './MusicBlog.css';
import LinkPost from './LinkPost.js';
import BlogPost from './BlogPost.js';
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Select from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
class MusicBlog extends Component {

    constructor() {
        super();
        this.state = {
            blogPosts: [],
            artists: [],
            currentBlogPostIndex : -1,
            currentBlogPost: null,
            loading: false,
            dropdownOpen: false
        };
        this.endpoint = process.env.REACT_APP_NODE_ENDPOINT

    }

    change = e => {
        this.setState({currentBlogPostIndex: e.value, currentBlogPost: this.state.blogPosts[e.value]  });

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
                var artists = Object.keys(data["labels"]).map(function (i) {
                    return data["labels"][i];
                });
                this.setState({
                    blogPosts : blogPosts,
                    artists: artists,
                    currentBlogPostIndex :0,
                    currentBlogPost: this.state.blogPosts[0],
                    loading: false
                });
            })
    }

    render() {
        let currentBlogPost = this.state.blogPosts[this.state.currentBlogPostIndex]
        let options = this.state.blogPosts.map(function(blogPost, index) { return { value: index, label: blogPost['title']  } })

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

                              <Select id="songsSelect" className="form-control" options={options} onChange={this.change} value={this.state.currentBlogPostIndex} >

                              </Select>
                          </div>
                          <div className="col-2">

                              <Button  bsStyle="primary" bsSize="large" onClick={() => {if (this.state.currentBlogPostIndex > -1) window.open(this.state.blogPosts[this.state.currentBlogPostIndex]   ["url"], "_blank")}}  >
                                   Go to blog post
                              </Button>
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
