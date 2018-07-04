import React, { Component } from 'react';
import './BlogPost.css';


class BlogPost extends React.Component {

    constructor() {
        super();

    }

    render_you_tube(title, videoId) {
        let linkYoutube  = 'https://www.youtube.com/embed/'+this.props.videoId+'?ecver=1'
        let youtube = <iframe title={ this.props.title } src={ linkYoutube } frameBorder="0"  allow="autoplay; encrypted-media" allowFullScreen></iframe>
        return (
            <div className="videoWrapper">
                {youtube}
            </div>
        )
    }

    render_data_frame(videoId) {
        let linkAmara = 'http://www.youtube.com/watch?v='+videoId

        return (
               <div class="amara-embed videoWrapper"  data-url={linkAmara}></div>
        )
    }
    render() {


        let content = this.props.content

        let textarea =  <textarea disabled cols="42" rows="32" value={content}></textarea>


        return (
            <div className="container-fluid">
                 <div className="row">
                     <div className="col-8">
                         { this.render_data_frame( this.props.videoId) }
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
