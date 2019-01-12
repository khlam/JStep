import React from 'react'
import { connect } from 'react-redux'
import VideoContainer from '../modules/dashboard/videoContainer'

export class Dashboard extends React.Component {
  render () {
    return (
      <table className="mainDisplay">
        <tbody>
          <tr>
            <td className="videoFrame">
              <VideoContainer />
            </td>
            <td className="JSONFrame" rowSpan="2">
              JSON Frame
            </td>
          </tr>
          <tr>
            <td className="playerFrame" colSpan="2">
              Player Control Frame
            </td>
          </tr>
        </tbody>
        </table>
    )
  }
}

export default connect(
    null, null
)(Dashboard)