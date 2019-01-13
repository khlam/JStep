import React, { Component } from 'react'

export class Slider extends Component {
    constructor (props) {
        super(props)
    }

    renderSlider() {
        return (
            <div>
                <input type="range" min="1" max="100"/>
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
