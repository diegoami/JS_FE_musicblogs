import React, { Component } from 'react';
import './BlogPost.css';

class BlogPost extends React.Component {

    constructor() {
        super();
        this.state = {
            content: "",
        };
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

        content = this.state.content
        let linkYoutube  = 'https://www.youtube.com/embed/'+this.props.videoId+'?ecver=1'
        youtube = <iframe title={ this.props.title } width="854" height="480" src={ linkYoutube } frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen></iframe>

        return (
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
                            <div class="videoWrapper">
                                {youtube}
                            </div>

                        </td>
                    </tr>
                </table>
            )
    }
}

export default BlogPost;
