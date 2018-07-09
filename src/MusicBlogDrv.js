import React, { Component } from 'react';
import MusicBlog from './MusicBlog.js';
import NavTab from './NavTab.js';

const blogs = [ 'russian', 'polish', 'romanian', 'southslavic']

class MusicBlogDrv extends Component {

    render() {
        var blng = blogs[Math.floor(Math.random()*blogs.length)]
        var tries = 10;
        if (this.props.match && this.props.match.params && this.props.match.params.blogLng) {
            blng = this.props.match.params.blogLng
        }
        if (this.props.match && this.props.match.params && this.props.match.params.tries && this.props.match.params.tries > 0) {
            tries = this.props.match.params.tries
        }

        return (
          <div>
            <NavTab active={blng}/>
            <MusicBlog url={blng} tries={tries} />
          </div>
          );
    }
}

export default MusicBlogDrv;