import React, { Component } from 'react';
import App from "./App";

class BlogPost extends React.Component {


    render() {
        return (
            <div>
                <p>
                    <span key={ this.props.index }>{this.props.title}</span>
                </p>
                <p class="content">{ this.props.content }</p>
            </div>
        )
    }
}

export default BlogPost;
