import React from 'react'
import { connect } from 'react-redux'
import { getPaths } from '../../redux/selectors/index'
import { ipcSendAction } from '../../redux/actions/index'
import { Video } from '../../components/dashboard/video'

class VideoContainer extends React.Component {
  render () {
    return (
        <Video {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    paths: getPaths(state)
  }
}

// mix of dispatch and non dispatch functions
const mapDispatchToProps = (dispatch) => {
  return {
    onModFiles: (filesObj) => { dispatch(ipcSendAction('newModFiles', filesObj)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoContainer)
