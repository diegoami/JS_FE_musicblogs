import React, { Component } from 'react';
import './Subtitles.css';
import { filter } from 'lodash';

class Subtitles extends React.Component {

    constructor(props){
        super(props);

        this.state = { text: "" };
        this.playerReady = this.playerReady.bind(this);
        this.update_subtitles= this.update_subtitles.bind(this);


    }

    playerReady(player) {
        this.setState({player: player, text: ""})
    }

    componentDidMount() {
        this.setState({text: ""})
        this.interval = setInterval(
            this.update_subtitles, 100
        );

    }
    componentWillUnmount() {
        if (this.interval)
            clearInterval(this.interval);
        this.setState({text: ""})
    }

    update_subtitles() {

        if (this.state.player && this.state.player.getCurrentTime && this.props.subtitles_objs) {
            let currentTime = this.state.player.getCurrentTime();
            let sub_correct = filter(this.props.subtitles_objs, function(s) {
                return s["px_start"] && s["px_end"] &&  (s["px_start"] < currentTime) && ( s["px_end"] > currentTime );
            })
            if (sub_correct.length > 0) {
                this.setState({text: sub_correct[0]["text"]})

            } else {
                this.setState({text: ""})
            }
        } else {
            this.setState({text: ""})
        }



    }


    render() {
        let to_render;
        if (this.state.text) {
            to_render = <div className="subtitle_div">
                             <span class="subtitle_yt">{this.state.text}</span>
                        </div>
        } else {
            to_render = <a href={this.props.direct_lnk} target={"_blank"}>Direct Link</a>
        }
        return (
            <div>
                <div className="subtitle_plus_link">
                    <a className="link_div" href={this.props.direct_lnk} target={"_blank"}>Direct Link</a>
                    <div className="subtitle_div">
                        <span class="subtitle_yt">{this.state.text}</span>
                    </div>

                </div>
            </div>
        );

    }
}

export default Subtitles;
