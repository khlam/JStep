import React, { Component } from 'react'

const { dialog } = require('electron').remote

export class Video extends Component {
    constructor (props) {
        super(props)
    }

    onModVideoFile () {
        const { paths } = this.props
        const path = dialog.showOpenDialog({ properties: ['openFile'], defaultPath: paths.video })
        if (path !== undefined) {
            paths.video = path[0]
            this.props.onModFiles(paths)
        }
    }

    renderVideoButton() {
        return (
            <div className="col-3">
                <button onClick={(e) => this.onModVideoFile(e)} >Video</button>
            </div>
        )
    }

    renderVideoFrame() {
        const { paths } = this.props
        return (
            <video id="videoFrame">
                <source src={`${paths.video}`} type="video/mp4"/>
            </video>
        )
    }

    renderVideo() {
         const { paths } = this.props
         if (paths.video === "") {
             console.log("Video path is empty.")
             return (this.renderVideoButton())
         }else {
             return (this.renderVideoFrame())
         }
    }

    render () {
        return (
            <div>
               {this.renderVideo()}
            </div>
        )
    }
}
