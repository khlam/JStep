import React from 'react'
import { connect } from 'react-redux'
import FileInputContainer from '../modules/dashboard/fileInputContainer'

export class Dashboard extends React.Component {
  render () {
    //<FileInputContainer />
    return (
     <table className="mainDisplay">
          <tr>
            <td className="videoFrame">
              Video Frame
            </td>
            <td className="JSONFrame" rowspan="2">
              JSON Frame
            </td>
          </tr>
          <tr>
            <td className="playerFrame" colspan="2">
              Player Control Frame
            </td>
          </tr>

     </table>
    )
  }
}

export default connect(
    null, null
)(Dashboard)