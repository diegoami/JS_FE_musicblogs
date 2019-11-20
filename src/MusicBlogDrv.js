import React, { Component } from 'react';
import MusicBlog from './MusicBlog.js';
import NavTab from './NavTab.js';

const blogs = [ 'russian', 'polish', 'romanian', 'southslavic']

const RANDOM_TRIES = 8;

class MusicBlogDrv extends Component {

    render() {
        var blng = blogs[Math.floor(Math.random()*blogs.length)]
        var tries = RANDOM_TRIES;
        var postId = null
        if (this.props.match && this.props.match.params && this.props.match.params.blng) {
            blng = this.props.match.params.blng
        }
        if (this.props.match && this.props.match.params && this.props.match.params.tries && this.props.match.params.tries > 0) {
            tries = this.props.match.params.tries
        }
        if (this.props.match && this.props.match.params && this.props.match.params.postId ) {
            postId = this.props.match.params.postId
        }

        return (
          <div>
            <NavTab active={blng}/>
            <MusicBlog blng={blng} tries={tries} postId={postId}/>
          </div>
          );
    }
}

export default MusicBlogDrv;
