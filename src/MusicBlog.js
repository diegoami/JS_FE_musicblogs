import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './MusicBlog.css';

import BlogPost from './BlogPost.js';

import {Button, Nav, Tooltip} from 'reactstrap';
import Select from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class MusicBlog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
            currentBlogPostIndex : -1,
            currentBlogPost: null,
            loading: false,
            dropdownOpen: false,
            tries: props.tries,
            postId: props.postId,
            blng: props.blng,
            url: props.url
        };
        this.endpoint = process.env.REACT_APP_NODE_ENDPOINT


    }

    change = e => {
        if (e)
            this.setState({currentBlogPostIndex: e.value });

    }


    get_random_index(blogPosts, tries) {
        var l_tries = tries;
        let found = false;
        var randomIndex = -1;
        while (l_tries > 0 && !found) {
            randomIndex = Math.floor(Math.random() * blogPosts.length)
            if (blogPosts[randomIndex]["subtitled"]) {
                found = true;
            }
            l_tries -= 1
        }
        return randomIndex;
    }

    get_postId_index(blogPosts, tries, postId) {
        let index_found = this.state.blogPosts.findIndex(function (post) {
            return post["postId"] === postId;
        });
        return index_found;

    }

    do_post = e => {
        this.setState(prevState => ({
            currentBlogPostIndex : prevState.postId
                ? this.get_postId_index(prevState.blogPosts , prevState.tries, prevState.postId)
                : this.get_random_index(prevState.blogPosts , prevState.tries)
        }))
    }

    random_post = e => {
        this.setState(prevState => ({
            currentBlogPostIndex : this.get_random_index(prevState.blogPosts , prevState.tries, prevState.postId)
        }))
    }


    componentDidMount() {
        this.setState({
            loading: true
        });

        let url = 'http://'+ window.location.host+'/'+this.props.blng+".json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var blogPosts = Object.keys(data["posts"]).map(function (i) {
                    return data["posts"][i];
                });
                this.setState({
                    blogPosts : blogPosts,
                    loading: false,
                    tries: this.props.tries,
                    postId: this.props.postId,
                    selectToggle: false
                });
            })
            .then(this.do_post)

    }

    render() {
        let currentBlogPost
        let current_url
        let current_postId
        let direct_lnk
        if (this.state.currentBlogPostIndex > -1) {
            currentBlogPost = this.state.blogPosts[this.state.currentBlogPostIndex]
            current_url = currentBlogPost["url"]
            current_postId = currentBlogPost["postId"]

            direct_lnk = 'http://'+ window.location.host+'/'+this.props.blng+'/postid/'+current_postId
        }

        let options = this.state.blogPosts.map(function(blogPost, index) { return { value: index, label: blogPost['title']  } })
        return (
          <div className="MusicBlog">
                  <div className="container-fluid">

                      <div className="row">
                          <div className="col-7" id="songDiv">

                              <Select id="songsSelect" className="form-select" options={options} onChange={this.change} value={this.state.currentBlogPostIndex} >

                              </Select>
                              <Tooltip className="tooltip bigtooltip" placement="bottom" isOpen={this.state.selectToggle} target="songDiv" toggle={e => {this.setState(prevState => ({ selectToggle: !prevState.selectToggle}))}}>
                                  Select a song or type to search
                              </Tooltip>
                          </div>

                          <div className="col-1">

                              <Button  size="lg"  onClick={this.random_post}  >
                                  <img src="/images/random.png"  title="Random song" alt="Rnd"/>
                              </Button>
                          </div>


                          <div className="col-1">
                              <Button  size="lg"  onClick={() => {window.open(current_url, "_blank")}} >
                                  <img src="/images/blog.png" href={current_url} alt="Blog" title="Go to blog page" />
                              </Button>
                          </div>
                          <div className="col-1">
                              <Button  size="lg"  >
                                  <img src="/images/share.png" title="Share link" alt="Share" onClick={() => {window.open(direct_lnk, "_blank")}}/>
                              </Button>
                          </div>


                      </div>

                   </div>
              <hr />
              {(currentBlogPost != null) &&
              <p className="MusicBlog-post">
                    <BlogPost blng={this.props.blng} index={this.state.currentBlogPostIndex} {...currentBlogPost}  />
              </p>

          }
          </div>
    );
  }
}

export default MusicBlog;
