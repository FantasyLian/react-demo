import React from 'react'
export default class Home extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <a href='#/login'>去登录</a>
        <button onClick={() => this.props.history.push('login')}>通过函数去登录</button>
      </div>
    )
  }
}