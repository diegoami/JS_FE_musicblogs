import React, { Component } from 'react';
import './BlogPost.css';

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
        let youtube = ""

        if (this.state.isToggleOn) {
            content = this.state.content
            let linkYoutube  = 'https://www.youtube.com/embed/'+this.props.videoId+'?ecver=1'
            youtube = <iframe title={ this.props.title } width="854" height="480" src={ linkYoutube } frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen></iframe>

        }
        return (
            <div id="container">
                <p>
                    <a href="#" onClick={this.handleClick}>
                        <span key={ this.props.index }>{ this.props.title } ( { this.props.videoId } )</span>
                    </a>
                </p>
                <table>
                    <col width="20%"/>
                    <col width="80%"/>
                    <tr>
                        <td>
                            <p class="content">
                                { content }
                            </p>
                        </td>
                        <td>

                            {youtube}
                        </td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default BlogPost;
