// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }


    bitrateHandler = (event) => {
        this.setState({settings: {...this.state.settings,bitrate: 12}})
        console.log(this.state.settings.bitrate)
    }

    resolutionHandler = (event) => {
        this.setState({settings: 
                        {...this.state.settings,
                        video: {...this.state.settings.video, resolution: '720p'}}
                       }
        )
        console.log(this.state.settings.video.resolution)
    }

render(){
    return(
        <div>
            <button className="bitrate" onClick={this.bitrateHandler}>Change bitrate</button>
            <button className="resolution" onClick={this.resolutionHandler}>Change Resolution</button>
        </div>
    )
}

}