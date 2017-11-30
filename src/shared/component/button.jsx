// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) =>
  <button className="waves-effect waves-light btn" onClick={handleClick}>{label}</button>

export default Button
