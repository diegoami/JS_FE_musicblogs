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
                return (s["px_start"] < currentTime) && ( s["px_end"] > currentTime );
            })
            if (sub_correct.length > 0) {
                this.setState({text: sub_correct[0]["text"]})
                console.log(sub_correct[0]["text"])
            } else {
                this.setState({text: ""})
            }
        } else {
            this.setState({text: ""})
        }



    }


    render() {
        return (
              <div class="subtitle_div">
                 <span class="subtitle_yt">{this.state.text}</span>
              </div>
            );

    }
}

export default Subtitles;