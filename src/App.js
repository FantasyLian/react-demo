/*
 * @Author: Mr.cat
 * @Date: 2021-04-15 17:10:31
 * @LastEditTime: 2021-04-15 17:56:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-demo/App.js
 */
import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Router from './router/index'
import store from './redux/store'
import './assets/styles/app.less'
import './assets/styles/common.less'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default hot(App)
