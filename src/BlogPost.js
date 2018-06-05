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
        let content = this.props.content
        let linkYoutube  = 'https://www.youtube.com/embed/'+this.props.videoId+'?ecver=1'
        youtube = <iframe title={ this.props.title } src={ linkYoutube } frameBorder="0"  allow="autoplay; encrypted-media" allowFullScreen></iframe>
        let textarea =  <textarea disabled cols="35" rows="35"  value={content}></textarea>
        return (
            <div className="container-fluid">
                 <div className="row">
                     <div className="col-8">

                                <div className="videoWrapper">
                                    {youtube}
                                </div>
                     </div>
                     <div className="col-2">

                        <div className="content">
                                      { textarea }
                        </div>
                     </div>

                 </div>
            </div>
            )
    }
}

export default BlogPost;
