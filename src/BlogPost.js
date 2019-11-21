import React from 'react';
import './BlogPost.css';
import YouTube from 'react-youtube';
import Subtitles from './Subtitles.js'
import {findIndex, map} from "lodash";
import { Container, Row, Col } from 'reactstrap';

class BlogPost extends React.Component {

    constructor(props) {
        super(props);
        this.updatePlayer = this.updatePlayer.bind(this);
        this.playPlayer = this.playPlayer.bind(this);
        this.updateSubtitles= this.updateSubtitles.bind(this);
        this.state = { content: this.props.content };
        this.updateContent(-1, 0)
    }


    updateContent(index, currentTime) {
        if (this.props.subtitles_objs) {
            let split_split = this.props.content.split('\n');
            let split_text = map(split_split, function (line) {
                return line + '\n';
            })
            if (index >= 0) {
                let len_split_text = split_text.length
                let begin_text = index > 0 ? split_text.slice(0, index).join('') : ""
                let end_text = index < len_split_text ? split_text.slice(index + 1, len_split_text).join('') : ""
                let middle_text = '\n' + split_split[index] + '\n\n';
                let total_text = begin_text + middle_text + end_text;
                //let total_text = middle_text
                this.setState({content: total_text});
            } else if (currentTime < 0.1) {
                this.setState({content: this.props.content});
            }
        } else {
            this.setState({content: this.props.content});
        }



    }

    componentDidMount() {
        this.interval = setInterval(
            this.updateSubtitles, 100
        );
    }

    componentWillUnmount() {
        if (this.interval)
            clearInterval(this.interval);
    }

    updatePlayer(event) {
        //let player = event.target;

    }

    updateSubtitles(event) {
        let text = ""
        let that = this
        let player = this._player.internalPlayer;
        if (player && player.getCurrentTime && this.props.subtitles_objs) {
            player.getCurrentTime().then(function(currentTime) {
                let sub_index = findIndex(that.props.subtitles_objs, function (s) {
                    return s["text"]
                        && (s["px_start"] <= currentTime)
                        && (s["px_end"] >= currentTime)
                        && (s["px_end"] - s["px_start"] >= 0.1)
                        && (s["px_end"] - s["px_start"] < 100)

                });
                if (sub_index > -1) {
                    text = that.props.subtitles_objs[sub_index]["text"]
                }
                that._subtitles.update_text(text)
                that.updateContent(sub_index, currentTime);

            })
        } else {
            this._subtitles.update_text("")
            this.updateContent(-1, 0)
        }


    }

    playPlayer(event) {
        let player = event.target;
        player.videoId = this.props.videoId
    }


    render() {
        const opts = {
            allowFullScreen: true,
        };

        return (

            <div className="container-fluid">
                 <div className="row">
                     <div className="col-8">
                        <div className="videoWrapper">
                            <YouTube videoId={ this.props.videoId }  opts={opts} ref={(player) => { this._player = player; }}
                                     onReady={this.updatePlayer.bind(this)} onPlay={this.playPlayer.bind(this)}
                            />

                        </div>
                         <Subtitles direct_lnk={'http://'+ window.location.host+'/'+this.props.blng+'/postid/'+this.props.postId} subtitles_objs={this.props.subtitles_objs} ref={(subtitles) => { this._subtitles = subtitles; }} />

                     </div>

                     <div className="col-2">


                         <div className="content">
                             <textarea disabled cols="42" rows="32" value={this.state.content}></textarea>
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
