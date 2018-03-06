import React, { Component } from 'react';
import App from "./App";

class BlogPost extends React.Component {
    render() {
        return <li key={ this.props.index }>{this.props.title}</li>;
    }
}

export default BlogPost;
