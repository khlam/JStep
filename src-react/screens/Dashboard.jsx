import React from 'react'
import { connect } from 'react-redux'
import VideoContainer from '../modules/dashboard/videoContainer'
import JsonContainer from '../modules/dashboard/JSONContainer'

export class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <div className="videoFrame">
          <VideoContainer />
        </div>
        <div className="JSONFrame">
          <JsonContainer />
        </div>
        <div className="playerFrame" >
            Player Control Frame
        </div>
      </div>
    )
  }
}

export default connect(
    null, null
)(Dashboard)