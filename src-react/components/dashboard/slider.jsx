import React, { Component } from 'react'

export class Slider extends Component {
    constructor (props) {
        super(props)
    }

    onChange (e) {
        this.props.onModFrame(e.target.value)
        const { currentFrame } = this.props
        const fps = 25
        let player = document.getElementById('videoFrame');
        if (typeof(player) != 'undefined' && player != null)
        {
            player.currentTime = currentFrame / fps
            console.log("Duration: ",player.duration)
            console.log("Frame IDX: ", currentFrame)
            console.log("Current vid time: ", player.currentTime)
        }
    }

    renderSlider() {
        const { currentFrame, totalFrameLen } = this.props
        //console.log("Total Frame Len: ", totalFrameLen)
        //console.log("Current Frame", currentFrame)
        return (
            <div className="row">
                <div className="col-1">
                    {`${currentFrame}/${totalFrameLen}`}
                </div>
                <div className="col-11">
                    <input className="playerSlider" type="range" min="0" max={`${totalFrameLen}`} onChange={this.onChange.bind(this)} value={currentFrame}/>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.renderSlider()}
            </div>
        )
    }
}
