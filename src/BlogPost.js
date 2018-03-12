import React, { Component } from 'react';
import './BlogPost.css';

class BlogPost extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {
        this.setState({

            isToggleOn: false
        });
    }

    render() {

        let youtube = ""
        let content = this.props.content.replace(/\n\s*\n/g, '\n')
        let linkYoutube  = 'https://www.youtube.com/embed/'+this.props.videoId+'?ecver=1'
        youtube = <iframe title={ this.props.title } width="854" height="480" src={ linkYoutube } frameBorder="0"  allow="autoplay; encrypted-media" allowFullScreen></iframe>

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
