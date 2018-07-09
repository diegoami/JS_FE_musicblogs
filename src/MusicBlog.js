import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './MusicBlog.css';

import BlogPost from './BlogPost.js';

import { Button } from 'reactstrap';
import Select from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
const RANDOM_TRIES = 10;

class MusicBlog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
            currentBlogPostIndex : -1,
            currentBlogPost: null,
            loading: false,
            dropdownOpen: false,
            tries: props.tries
        };
        this.endpoint = process.env.REACT_APP_NODE_ENDPOINT


    }

    change = e => {
        if (e)
            this.setState({currentBlogPostIndex: e.value });

    }


    get_random_index(blogPosts, tries) {
        var l_tries = tries
        let found = false;
        var randomIndex  = -1;
        while (l_tries  > 0 && !found ) {
            randomIndex = Math.floor(Math.random()*blogPosts.length)
            if (this.state.blogPosts[randomIndex]["subtitled"]) {
                found = true;
            }
            l_tries -= 1
        }
        return randomIndex;

    }

    random_post = e => {
        this.setState(prevState => ({
            currentBlogPostIndex : this.get_random_index(prevState.blogPosts , prevState.tries)
        }))
    }


    componentDidMount() {
        this.setState({
            loading: true
        });

        let url = this.endpoint+this.props.url+".json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var blogPosts = Object.keys(data["posts"]).map(function (i) {
                    return data["posts"][i];
                });
                this.setState({
                    blogPosts : blogPosts,
                    loading: false,
                    tries: this.props.tries
                });
            })
            .then(this.random_post)

    }

    render() {
        let currentBlogPost = this.state.blogPosts[this.state.currentBlogPostIndex]
        let options = this.state.blogPosts.map(function(blogPost, index) { return { value: index, label: blogPost['title']  } })
        return (
          <div className="MusicBlog">
                  <div className="container-fluid">

                      <div className="row">
                          <div className="col-7">

                              <Select id="songsSelect" className="form-select" options={options} onChange={this.change} value={this.state.currentBlogPostIndex} >

                              </Select>
                          </div>
                          <div className="col-1">

                              <Button  size="lg"  onClick={this.random_post}  >
                                  Random
                              </Button>
                          </div>
                          <div className="col-1">

                          </div>

                          <div className="col-1">
                              <Button  size="lg" onClick={() => {if (this.state.currentBlogPostIndex > -1) window.open(this.state.blogPosts[this.state.currentBlogPostIndex]["url"], "_blank")}}  >
                                   On Blog
                              </Button>
                          </div>


                      </div>

                   </div>
              <hr />
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
