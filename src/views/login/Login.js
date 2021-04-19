import React from 'react'
import Particles from 'react-particles-js'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { setUserInfo } from '@/redux/actions/userInfo'
import '@/assets/styles/login.less'

const FormItem = Form.Item
class Login extends React.Component {
  formRef = React.createRef();
  state = { clientHeight: document.documentElement.clientHeight || document.body.clientHeight }
  constructor(props) {
    super(props)
    this.onResize = this.onResize.bind(this)
  }
  // 登录
  login (e) {
    e.preventDefault()
    const {
      form: { validateFields }
    } = this.props
    validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('isLogin', '1')
        // 模拟生成一些数据
        this.props.setUserInfo(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } }))
        localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } })))
        this.props.history.push('/dashboard')
      } else {
        console.log(err)
      }
    })
  }
  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }
  componentWillUnmount () {
    window.addEventListener('resize', this.onResize)
    // componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
    this.setState = () => {
      return
    }
  }
  onResize () {
    this.setState({ clientHeight: document.documentElement.clientHeight || document.body.clientHeight })
  }
  render () {
    return (
      <div className="container">
        <Particles
          height={this.state.clientHeight - 5 + 'px'}
          params={{
            number: { value: 50 },
            ize: { value: 3 },
            interactivity: {
              events: {
                onhover: { enable: true, mode: 'repulse' }
              }
            }
          }}
        />
        <div className="content">
          <h1 className="title">后台管理系统</h1>
          <Form className="login-form" ref={this.formRef}>
            <FormItem name="username" rules={[{ required: true, message: '请填写用户名！' }]}>
              <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            </FormItem>
            <FormItem name="password" rules={[{ required: true, message: '请填写密码！' }]} >
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" block onClick={this.login}>
                登录
							</Button>
              <div style={{ color: '#999', paddingTop: '10px', textAlign: 'center' }}>Tips : 输入任意用户名密码即可</div>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  setUserInfo: data => {
    dispatch(setUserInfo(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)