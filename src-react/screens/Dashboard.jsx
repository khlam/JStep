import React from 'react'
import { connect } from 'react-redux'
import VideoContainer from '../modules/dashboard/videoContainer'
import JsonContainer from '../modules/dashboard/JSONContainer'
import SliderContainer from '../modules/dashboard/sliderContainer'

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
            <SliderContainer />
        </div>
      </div>
    )
  }
}

export default connect(
    null, null
)(Dashboard)