import React from 'react'
import { connect } from 'react-redux'

export class Dashboard extends React.Component {
  render () {
    return (
     <div className="start">
         Hello world
     </div>
    )
  }
}

export default connect(
    null
)(Dashboard)