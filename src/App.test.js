/*
 * @Author: Mr.cat
 * @Date: 2021-04-15 17:14:25
 * @LastEditTime: 2021-04-15 17:14:42
 * @LastEditors: Mr.cat
 * @Description: In User Settings Edit
 * @FilePath: /react-demo/App.test.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
