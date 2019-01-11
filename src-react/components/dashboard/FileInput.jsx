import React, { Component } from 'react'

const { dialog } = require('electron').remote

export class FileInput extends Component {
    constructor (props) {
        super(props)
    }

    onModVideoFile () {
        const { paths } = this.props
        const path = dialog.showOpenDialog({ properties: ['openFile'], defaultPath: paths.video })
        if (path !== undefined) {
            paths.video = path[0]
            this.props.onNewVideo(paths)
        }
    }
    onModJSONFile () {
      const { paths } = this.props
      const path = dialog.showOpenDialog({ properties: ['openFile'], defaultPath: paths.json })
      if (path !== undefined) {
          paths.json = path[0]
          this.props.onNewJSON(paths)
      }
   }

  render () {
    return (
      <div>
        <button onClick={(e) => this.onModVideoFile(e)} >Video</button>
        <button onClick={(e) => this.onModJSONFile(e)} >JSON</button>
      </div>
    )
  }
}
