import React from 'react'
import { connect } from 'react-redux'
import { getPaths } from '../../redux/selectors/index'
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
)(JsonContainer)
