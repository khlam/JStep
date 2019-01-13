import React from 'react'
import { connect } from 'react-redux'
import { ipcSendAction } from '../../redux/actions/index'
import { Slider } from '../../components/dashboard/slider'

class SliderContainer extends React.Component {
  render () {
    return (
        <Slider {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    paths: state.frame.filePaths
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
)(SliderContainer)
