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
            this.props.onModFiles(paths)
        }
    }
    onModJSONFile () {
      const { paths } = this.props
      const path = dialog.showOpenDialog({ properties: ['openFile'], filters: [{ name: '.json', extensions: ['json'] }], defaultPath: paths.json })
      if (path !== undefined) {
          paths.json = path[0]
          this.props.onModFiles(paths)
      }
   }

   showVideoButton() {
        const { paths } = this.props
        console.log("print ",paths)
        let value = "[NONE]"

        if (paths.video !== ''){
            value = "[YAY]"
        }

        return (
            <div className="col-3">
                <button onClick={(e) => this.onModVideoFile(e)} >Video {value}</button>
            </div>
        )
   }
   showJSONButton() {
    const { paths } = this.props 
    if (paths.json === "") {
        return (
         <div className="col-3">
            <button onClick={(e) => this.onModJSONFile(e)} >JSON</button>
         </div>
        )
    }else {
        return (
             <div className="col-3">
                 {`${paths.json}`}
             </div>
        )
    }
}

  render () {
    return (
        <div className = "row">
            {this.showVideoButton()}
            {this.showJSONButton()}
        </div>
    )
  }
}
