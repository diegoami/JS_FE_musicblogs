import React from 'react';
import './Subtitles.css';
import { filter } from 'lodash';

class Subtitles extends React.Component {

    constructor(props){
        super(props);
        this.state = { text: "" };
    }


    update_text(text) {
        this.setState({text: text})
    }


    render() {
        return (
            <div>
                <div className="subtitle_plus_link">
                    <div className="subtitle_div">
                        <span class="subtitle_yt">{this.state.text}</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default Subtitles;
