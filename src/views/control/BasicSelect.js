import React, { useState } from 'react'
import { Select, Row, Col, TreeSelect } from 'antd'

const { Option } = Select
const treeData = [
  {
    title: '广东省',
    key: '广东省',
    value: '广东省',
    children: [
      {
        title: '深圳市',
        value: '深圳市',
        key: '深圳市',
        children: [
          {
            title: '福田区',
            value: '福田区',
            key: '福田区'
          },
          {
            title: '南山区',
            value: '南山区',
            key: '南山区'
          },
          {
            title: '宝安区',
            value: '宝安区',
            key: '宝安区'
          }
        ]
      },
      {
        title: '广州市',
        value: '广州市',
        key: '广州市',
        children: [
          {
            title: '荔湾区',
            value: '荔湾区',
            key: '荔湾区'
          },
          {
            title: '越秀区',
            value: '越秀区',
            key: '越秀区'
          },
          {
            title: '海珠区',
            value: '海珠区',
            key: '海珠区'
          }
        ]
      }
    ]
  },
  {
    title: '湖南省',
    value: '湖南省',
    key: '湖南省',
    children: [
      {
        title: '长沙市',
        value: '长沙市',
        key: '长沙市'
      },
      {
        title: '株洲市',
        value: '株洲市',
        key: '株洲市'
      },
      {
        title: '湘潭市',
        value: '湘潭市',
        key: '湘潭市'
      }
    ]
  }
]

const SelectDemo = () => {
  const handleChange = () => { }
  const children = (children = []) => {
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
    }
    return children
  }
  return (
    <Select mode="multiple" style={{ width: '100%' }} placeholder="请选择" onChange={handleChange} allowClear={true}>
      {children()}
    </Select>
  )
}

const SelectTreeDemo = () => {
  const [value, setValue] = useState(null)
  const onChange = (value, label, extra) => {
    console.log(label, extra)
    setValue(value)
  }

  return <TreeSelect showSearch treeCheckable style={{ width: '100%' }} value={value} dropdownStyle={{ maxHeight: 400, overflow: 'auto' }} placeholder="请选择" allowClear multiple treeDefaultExpandAll onChange={onChange} treeData={treeData} />
}
const BasicSelect = () => {
  return (
    <div className="shadow-radius">
      <Row gutter={16}>
        <Col span={12} offset={6}>
          <h1 style={styles}>多选框</h1>
          <SelectDemo />
        </Col>
        <Col span={12} offset={6}>
          <h1 style={styles}>树选择框</h1>
          <SelectTreeDemo />
        </Col>
      </Row>
    </div>
  )
}

const styles = {
  padding: '15px 0',
  margin: 0
}

export default BasicSelect
