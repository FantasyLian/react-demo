import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.less'

// 登录表单
const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <Form
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        name="密码"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="##">忘记密码</a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button> 或 <a href="#/register">立即注册!</a>
      </Form.Item>
    </Form>
  )
}
export default class Login extends React.Component {
  render () {
    return (
      <div className="page-wrap">
        <LoginForm />
      </div>
    )
  }
}