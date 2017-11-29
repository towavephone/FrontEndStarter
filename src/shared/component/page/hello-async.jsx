// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloAsyncButton from '../../container/hello-async-button'
import MessageAsync from '../../container/message-async'

const title = 'Async Hello Page'

const HelloAsyncPage = () =>
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <MessageAsync />
        <HelloAsyncButton />
      </div>
    </div>
    <ul id="dropdown2" className="dropdown-content">
      <li><a href="#!">one<span className="badge">1</span></a></li>
      <li><a href="#!">two<span className="new badge">1</span></a></li>
      <li><a href="#!">three</a></li>
    </ul>
    <a className="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown<i className="material-icons right">arrow_drop_down</i></a>
  </div>
export default HelloAsyncPage
