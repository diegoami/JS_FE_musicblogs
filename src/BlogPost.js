import React, { Component } from 'react';
import './BlogPost.css';
import { filter } from 'lodash';
import YouTube from 'react-youtube';
import Subtitles from './Subtitles.js'

class BlogPost extends React.Component {

    constructor() {
        super();
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    updatePlayer(event) {
        let player = event.target;
        this._subtitles.playerReady(player);
    }

    render() {
        const opts = {
            allowFullScreen: true,
        };
        console.log(this.props.subtitles_objs)

        return (
            <div className="container-fluid">
                 <div className="row">
                     <div className="col-8">
                        <div className="videoWrapper">
                            <YouTube videoId={ this.props.videoId }  opts={opts} onReady={this.updatePlayer.bind(this)}/>

                        </div>
                         <Subtitles subtitles_objs={this.props.subtitles_objs} ref={(subtitles) => { this._subtitles = subtitles; }} />
                     </div>

                     <div className="col-2">

                        <div className="content">
                            <textarea disabled cols="42" rows="32"  value={this.props.content}></textarea>
                        </div>
                     </div>

                 </div>
                 <div className="row">
                 </div>
            </div>
            )
    }
}

export default BlogPost;
