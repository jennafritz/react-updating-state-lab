// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {
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

    render() {
        return(
            <div>
                <button 
                    onClick = {() => this.setState({
                        settings: {
                            ...this.state.settings,
                            bitrate: 12
                        }
                        })
                    }
                    className = "bitrate">
                    Bitrate
                </button>
                <button 
                      onClick = {() => this.setState({
                        settings: {
                            ...this.state.settings,
                            video: {resolution: '720p'}
                        }
                        })
                    }
                    className = "resolution">
                    Resolution
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger