import React from 'react'
import { connect } from 'react-redux'
import { getPaths } from '../../redux/selectors/index'
import { ipcSendAction } from '../../redux/actions/index'
import { FileInput } from '../../components/dashboard/FileInput'

class FileInputContainer extends React.Component {
  render () {
    console.log(this.props)

    return (
        <FileInput {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  console.log("here2 ", state)
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
