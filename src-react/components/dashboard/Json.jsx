import React, { Component } from 'react'

const { dialog } = require('electron').remote

export class Json extends Component {
    constructor (props) {
        super(props)
    }

    onModJSONFile () {
        const { paths } = this.props
        const path = dialog.showOpenDialog({ properties: ['openFile'], filters: [{ name: '.json', extensions: ['json'] }], defaultPath: paths.json })
        if (path !== undefined) {
            paths.json = path[0]
            this.props.onModFiles(paths)
        }
    }

    renderJSONButton() {
        return (
            <div className="col-3">
                <button onClick={(e) => this.onModJSONFile(e)} >JSON</button>
            </div>
        )
    }

    renderJSONFrame() {
        const { paths } = this.props
        return (
            <div>
                {paths.json}
            </div>
        )
    }

    renderJson() {
         const { paths } = this.props
         if (paths.json === "") {
             console.log("Video path is empty.")
             return (this.renderJSONButton())
         }else {
             return (this.renderJSONFrame())
         }
    }

    render () {
        return (
            <div>
               {this.renderJson()}
            </div>
        )
    }
}
