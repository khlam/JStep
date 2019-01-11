import React, { Component } from 'react'

export class FileInput extends Component {
    onModVideoFile () {
        const { settings } = this.props
        const path = dialog.showOpenDialog({ properties: ['openDirectory'], defaultPath: settings.addonDir })
        if (path !== undefined) {
            settings.addonDir = path[0]
            this.props.onNewSettings(settings)
        }
    }

  render () {
    return (
      <div>
        Hello world
      </div>
    )
  }
}
