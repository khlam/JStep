import React, { Component } from 'react'

export class Slider extends Component {
    constructor (props) {
        super(props)
    }

    onChange (e) {
        this.props.onModFrame(e.target.value)
    }

    renderSlider() {
        const { currentFrame, totalFrameLen } = this.props
        console.log("Total Frame Len: ", totalFrameLen)
        console.log("Current Frame", currentFrame)
        return (
            <div className="row">
                <div className="col-1">
                    {`${currentFrame}/${totalFrameLen}`}
                </div>
                <div className="col-11">
                    <input className="playerSlider" type="range" min="0" max={`${totalFrameLen}`} onChange={this.onChange.bind(this)}/>
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
