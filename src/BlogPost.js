import React, { Component } from 'react';
import App from "./App";

class BlogPost extends React.Component {

    constructor() {
        super();


        this.state = {
            content: "",
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
            content : this.props.content.replace(/\n\s*\n/g, '\n'),
            isToggleOn: false
        });
    }

    render() {
        let content = ""
        if (this.state.isToggleOn) {
            content = this.state.content
        }

        return (
            <div >
                <p>
                    <a href="#" onClick={this.handleClick}>
                        <span key={ this.props.index }>{ this.props.title }</span>
                    </a>
                </p>
                <p class="content">
                    { content }
                </p>
            </div>
        )
    }
}

export default BlogPost;
