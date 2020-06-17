import React, { Component } from 'react';

import NavTab from './NavTab.js';


class Tos extends Component {

    render() {
        return (
            <div>
                <NavTab active='TOS'/>
                <h2>Getting Started</h2>
                <p><b>Select the language of the music you want to listen, picking one of the tabs above.</b></p>
                <p>Retrieving the list of songs may take a couple of seconds.</p>

               <h2>Terms of Service</h2>
                <p>This site is optimized for use on the desktop. It will work reasonably on a tablet. Using a mobile phone the experience may be subpar.</p>
                <p>From this site you will be able browse music videos from following blogs:</p>
                    <ul>
                        <li><a href="https://russianlyrics.blogspot.com/">Russian Lyrics</a></li>
                        <li><a href="https://polishlyrics.blogspot.com/">Polish Lyrics</a></li>
                        <li><a href="https://frenchmusiclyrics.blogspot.com/">French Lyrics</a></li>
                        <li><a href="http://southslaviclyrics.blogspot.com/">South Slavic Lyrics</a></li>
                        <li><a href="https://romanianlyrics.blogspot.com/">Romanian Lyrics</a></li>
                        <li><a href="https://easterneuropelyrics.blogspot.com/">Central Europe Lyrics</a></li>
                        <li><a href="https://italianlyrics.blogspot.com/">Italian Lyrics</a></li>
                    </ul>
                <h2>Usage of external APIs</h2>
                To retrieve and aggregate songs and lyrics, following external APIs are used.
                <ul>
                    <li><a href="https://developers.google.com/youtube/v3">Youtube API</a> <a href="https://developers.google.com/youtube/terms/api-services-terms-of-service">(TOS)</a></li>
                    <li><a href="https://developers.google.com/blogger">Blogspot API</a> <a href="https://developers.google.com/blogger/terms">(TOS)</a></li>
                    <li><a href="https://amara.readthedocs.io/">Amara API</a> <a href="https://pculture.org/terms-of-service">(TOS)</a></li>
                </ul>
                <h2>Browsing Videos on this site</h2>
                <p>This site does not require your personal information and does not save any cookies. However, youtube will track your history on this site, as if you were watching the videos on youtube.
                    Therefore, <a href="https://policies.google.com/privacy">Google Privacy Policy</a> applies.
                    <a href="https://www.youtube.com/static?template=terms">Youtube terms of service</a> also apply.</p>
                <h2>Other</h2>
                <p>This site has been created and is being maintained by Diego Amicabile (diego.amicabile at gmail.com).</p>
                <p>Source code is available on <a href="https://github.com/diegoami/JS_FE_musicblogs">Github</a> </p>


            </div>
        );
    }

}

export default Tos;
