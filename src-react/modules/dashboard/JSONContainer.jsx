import React from 'react'
import { connect } from 'react-redux'
import { ipcSendAction } from '../../redux/actions/index'
import { Json } from '../../components/dashboard/Json'

class JsonContainer extends React.Component {
  render () {
    return (
        <Json {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    paths: state.frame.filePaths,
    json: state.frame.showJson
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
)(JsonContainer)
