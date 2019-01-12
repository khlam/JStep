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

    renderVideo() {
         const { paths } = this.props
         if (paths.video === "") {
             console.log("Video path is empty.")
             return (this.renderVideoButton())
         }else {
             return (paths.video)
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
