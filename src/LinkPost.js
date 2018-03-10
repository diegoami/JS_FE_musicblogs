import React, { Component } from 'react';
import './LinkPost.css';
import BlogPost from './BlogPost.js';

class LinkPost extends React.Component {

    constructor() {
        super();


        this.state = {
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick( ) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    componentDidMount() {
        this.setState({
            isToggleOn: false
        });
    }

    render() {
        let blogPost = ""

        if (this.state.isToggleOn) {
            blogPost =  <BlogPost index={ this.props.index } title={ this.props.title } content={ this.props.content } videoId={ this.props.videoId } />
        }
        return (
            <div id="container">
                <p>
                    <a href="#" onClick={this.handleClick}>
                        <span key={ this.props.index }>{ this.props.title } ( { this.props.videoId } )</span>
                    </a>
                    {blogPost}
                </p>


            </div>
        )
    }
}

export default LinkPost;
