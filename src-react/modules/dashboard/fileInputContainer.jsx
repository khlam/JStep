import React from 'react'
import { connect } from 'react-redux'
import { getPaths } from '../../redux/selectors/index'
import { ipcSendAction } from '../../redux/actions/index'
import { FileInput } from '../../components/dashboard/FileInput'

export class FileInputContainer extends React.Component {
  render () {
    return (
        <FileInput {...this.props} />
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
    onNewVideo: (videoFP) => { dispatch(ipcSendAction('newVideo', videoFP)) },
    onNewJSON: (jsonFP) => { dispatch(ipcSendAction('newJSON', jsonFP)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileInputContainer)
