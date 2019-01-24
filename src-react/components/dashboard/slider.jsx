import React, { Component } from 'react'

export class Slider extends Component {
    constructor (props) {
        super(props)
    }

    changeVideo(frame) {
        const fps = 25
        let player = document.getElementById('videoFrame');
        if (typeof(player) != 'undefined' && player != null)
        {
            player.currentTime =  frame / fps
            console.log("Duration: ",player.duration)
            console.log("Frame IDX: ", frame)
            console.log("Current vid time: ", player.currentTime)
        }
    }

    onChange (e) {
        this.props.onModFrame(e.target.value)
        this.changeVideo(e.target.value)
    }

    checkKey(e) {
        const { currentFrame } = this.props
        e = e || window.event
        if (e.keyCode == '37') {
            this.props.onModFrame(currentFrame + 1)
            this.changeVideo(currentFrame + 1)
        }
        else if (e.keyCode == '39') {
            this.props.onModFrame(currentFrame - 1)
            this.changeVideo(currentFrame - 1)
        }

    }

    saveFrame(e) {
        let player = document.getElementById('videoFrame');
        if (typeof(player) != 'undefined' && player != null)
        {
            this.props.onSaveFrame(player.currentTime)
        }
    }

    renderSlider() {
        const { currentFrame, totalFrameLen } = this.props
        if (totalFrameLen === 0) {
            return (
                <div className="row">
                   
                </div>
            )
        }

    
        return (
            <div className="row">
                <div className="col-1">
                    {`${currentFrame}/${totalFrameLen}`}
                    <button onClick={this.saveFrame.bind(this)}>Save Frame</button>
                </div>
                <div className="col-11">
                    <input className="playerSlider" type="range" min="1" max={`${totalFrameLen}`} step="1" onChange={this.onChange.bind(this)} value={`${currentFrame}`} />
                </div>
            </div>
        )
    }

    render () {
        return (
            <div>
                {document.onkeydown = this.checkKey}
                {this.renderSlider()}
            </div>
        )
    }
}
