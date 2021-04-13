import React, { useState } from 'react'
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd'
const { Option } = Select
const residences = [
  {
    value: 'guangdong',
    label: '广东省',
    children: [
      {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          {
            value: 'nanshan',
            label: '南山区',
          },
        ]
      }
    ]
  },
  {
    value: 'sichuan',
    label: '四川省',
    children: [
      {
        value: 'chengdu',
        label: '成都市',
        children: [
          {
            value: 'jinniu',
            label: '金牛区',
          },
        ]
      }
    ]
  }
]
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    }
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    }
  }
}

const RegistrationForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`))
    }
  }

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }))
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['guangdong', 'shenzhen', 'nanshan'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: '输入的E-mail格式不正确!',
          },
          {
            required: true,
            message: '请输入您的 E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入您的密码!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请确认您的密码!',
          },
          ({ getFieldValue }) => ({
            validator (_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'))
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="昵称"
        tooltip="你希望别人如何称呼你?"
        rules={[
          {
            required: true,
            message: '请输入您的昵称!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="常住地址"
        rules={[
          {
            type: 'array',
            required: true,
            message: '请选择您的常住地址!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="电话号码"
        rules={[
          {
            required: true,
            message: '请输入您的电话号码!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="网站"
        rules={[
          {
            required: true,
            message: '请输入您的网站!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="网站">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item label="验证码" extra="我们必须确认是人为操作.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: '请输入获取的验证码!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('需要接受协议')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          已阅读 <a href="#/agreement">用户协议</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button> 已有账号，<a href="#/login">立即登录!</a>
      </Form.Item>
    </Form>
  )
}

export default class Register extends React.Component {
  render () {
    return (
      <div className="page-wrap">
        <RegistrationForm />
      </div>
    )
  }
}