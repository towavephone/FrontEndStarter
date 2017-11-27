// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: '说hello',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(sayHello(`hello ${Date.now()}`))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
