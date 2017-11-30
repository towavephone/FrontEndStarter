// @flow

import React from 'react'

type Props = {
  message: string,
}

const Message = ({ message }: Props) =>
  <p className="flow-text">{message}</p>

export default Message
