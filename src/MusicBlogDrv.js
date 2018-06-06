import React, { Component } from 'react';
import MusicBlog from './MusicBlog.js';
import NavTab from './NavTab.js';
const blogs = ['italian', 'russian', 'french', 'polish', 'romanian', 'southslavic', 'easteurope']

class MusicBlogDrv extends Component {

    render() {
        var blng = blogs[Math.floor(Math.random()*blogs.length)]

        if (this.props.match && this.props.match.params && this.props.match.params.blogLng) {
            blng = this.props.match.params.blogLng
        }
        return (
          <div>
            <NavTab active={blng}/>
            <MusicBlog url={blng} />
          </div>
          );
    }
}

export default MusicBlogDrv;