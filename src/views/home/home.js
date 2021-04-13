import React from 'react'
export default class Home extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <a href='#/detail'>去detail</a>
        <button onClick={() => this.props.history.push('detail')}>通过函数去detail</button>
      </div>
    )
  }
}