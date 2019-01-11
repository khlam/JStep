import React from 'react'
import { connect } from 'react-redux'

import { ipcSendAction } from '../../redux/actions/index'
import { FileInput } from '../../components/dashboard/FileInput'

export class FileInputContainer extends React.Component {
  render () {
    return (
        <div>
            <FileInput {...this.props} />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    version: null,
    settings: null,
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
