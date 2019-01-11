import React from 'react'
import { connect } from 'react-redux'
import { FileInputContainer } from '../modules/dashboard/fileInputContainer'

export class Dashboard extends React.Component {
  render () {
    return (
     <div >
        <FileInputContainer />
     </div>
    )
  }
}

export default connect(
    null
)(Dashboard)