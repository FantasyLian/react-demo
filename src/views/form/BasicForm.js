import React from 'react'
import { Form, Input, Button, Select } from 'antd'
const { Option } = Select
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

export default class BasicForm extends React.Component {
  formRef = React.createRef();
  onGenderChange = (value) => {
    switch (value) {
      case 'male':
        this.formRef.current.setFieldsValue({
          note: 'Hi, 先生!',
        })
        return

      case 'female':
        this.formRef.current.setFieldsValue({
          note: 'Hi, 女士!',
        })
        return

      default:
        this.formRef.current.setFieldsValue({
          note: 'Hi there!',
        })
    }
  };
  onFinish = (values) => {
    console.log(values)
  };
  onReset = () => {
    this.formRef.current.resetFields()
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: '男性',
    })
  };

  render () {
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish} style={{ width: '500px' }}>
        <Form.Item
          name="note"
          label="注释"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="性别"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="选择一个选项并更改上面的输入文本"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="male">男</Option>
            <Option value="female">女</Option>
            <Option value="other">其他</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="自定义 性别"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ 'marginRight': '10px' }}>
            提交
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            重置
          </Button>
          <Button type="link" htmlType="button" onClick={this.onFill}>
            填充表单
          </Button>
        </Form.Item>
      </Form>
    )
  }
}