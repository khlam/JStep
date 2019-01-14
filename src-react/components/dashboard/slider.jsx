import React, { Component } from 'react'

export class Slider extends Component {
    constructor (props) {
        super(props)
    }

    onChange (e) {
        this.props.onModFrame(e.target.value)
        const fps = 25
        let player = document.getElementById('videoFrame');
        if (typeof(player) != 'undefined' && player != null)
        {
            player.currentTime =  e.target.value / fps
            console.log("Duration: ",player.duration)
            console.log("Frame IDX: ", e.target.value)
            console.log("Current vid time: ", player.currentTime)
        }
    }

    renderSlider() {
        const { currentFrame, totalFrameLen } = this.props
        return (
            <div className="row">
                <div className="col-1">
                    {`${currentFrame}/${totalFrameLen}`}
                </div>
                <div className="col-11">
                    <input className="playerSlider" type="range" min="1" max={`${totalFrameLen}`} step="1" onChange={this.onChange.bind(this)}/>
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
