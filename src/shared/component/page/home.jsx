// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../../config'
/* eslint-disable jsx-a11y/anchor-is-valid */
const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <a className="btn btn-floating btn-large pulse"><i className="material-icons">menu</i></a>
    <a className="btn btn-floating btn-large pulse"><i className="material-icons">cloud</i></a>
    <a className="btn btn-floating btn-large cyan pulse"><i className="material-icons">edit</i></a>
    <div className="card-panel hoverable z-depth-5"> Hoverable Card Panel</div>
    <blockquote>
    This is an example quotation that uses the blockquote tag.
    </blockquote>
    <p className="flow-text">我们在许多框架中已经看到了一个共同的缺陷是对真正具有响应式文字缺乏支持。虽然页面上的元素流畅地调整大小，但文本仍按固定大小调整大小。为了改善这个问题，对于大量文本的页面，我们创建了一个响应文本大小和行高的类，以优化用户的可读性。每行在45-80个字符之间，行高在较小的屏幕上更大。
    要查看Flow text的作用，慢慢调整浏览器的大小，并观察这些文本！ 点击上面的按钮可以切换/关闭 Flow Text 以查看差异！
    </p>
    <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
    <div className="fixed-action-btn toolbar">
      <a className="btn-floating btn-large red">
        <i className="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">insert_chart</i></a></li>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">format_quote</i></a></li>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">publish</i></a></li>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">attach_file</i></a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m2">
        <div className="card">
          <div className="card-image">
            <img src="http://www.towavephone.com/resource/avatar.jpg" alt="img" />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    <a id="menu" className="waves-effect waves-light btn btn-floating" ><i className="material-icons">menu</i></a>

    <div className="tap-target" data-activates="menu">
      <div className="tap-target-content">
        <h5>Title</h5>
        <p>A bunch of text</p>
      </div>
    </div>
  </div>

/* eslint-enable jsx-a11y/anchor-is-valid */
export default HomePage
