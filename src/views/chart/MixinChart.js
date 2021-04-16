import React from 'react'
import { connect } from 'react-redux'
import Chart from '@/components/chart/Chart'
let xData = []
for (let i = 0; i < 12; i++) {
  xData[i] = i + 1 + 'month'
}
const chartData = {
  backgroundColor: '#001529',
  title: {
    text: 'mixChart',
    x: 'center',
    top: 30,
    textStyle: {
      color: '#fff',
      fontSize: '20'
    },
    subtextStyle: {
      color: '#90979c',
      fontSize: '16'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      textStyle: {
        color: '#fff'
      }
    }
  },
  grid: {
    top: 80,
    left: '2%',
    right: '2%',
    bottom: 100,
    containLabel: true,
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    left: '2%',
    top: 20,
    textStyle: {
      color: '#90979c'
    },
    data: ['female', 'male', 'average']
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#90979c'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
      axisLabel: {
        interval: 0
      },
      data: xData
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#90979c'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0
      },
      splitArea: {
        show: false
      }
    }
  ],
  dataZoom: [
    {
      show: true,
      height: 30,
      xAxisIndex: [0],
      bottom: 30,
      start: 10,
      end: 80,
      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleSize: '110%',
      handleStyle: {
        color: '#d3dee5'
      },
      textStyle: {
        color: '#fff'
      },
      borderColor: '#90979c'
    },
    {
      type: 'inside',
      show: true,
      height: 15,
      start: 1,
      end: 35
    }
  ],
  series: [
    {
      name: 'female',
      type: 'bar',
      stack: 'total',
      barMaxWidth: 35,
      barGap: '10%',
      itemStyle: {
        normal: {
          color: 'rgba(255,144,128,1)',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            },
            position: 'insideTop',
            formatter (p) {
              return p.value > 0 ? p.value : ''
            }
          }
        }
      },
      data: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078]
    },

    {
      name: 'male',
      type: 'bar',
      stack: 'total',
      itemStyle: {
        normal: {
          color: 'rgba(0,191,183,1)',
          barBorderRadius: 0,
          label: {
            show: true,
            position: 'top',
            formatter (p) {
              return p.value > 0 ? p.value : ''
            }
          }
        }
      },
      data: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220]
    },
    {
      name: 'average',
      type: 'line',
      stack: 'total',
      symbolSize: 10,
      symbol: 'circle',
      itemStyle: {
        normal: {
          color: 'rgba(252,230,48,1)',
          barBorderRadius: 0,
          label: {
            show: true,
            position: 'top',
            formatter (p) {
              return p.value > 0 ? p.value : ''
            }
          }
        }
      },
      data: [1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865, 4298]
    }
  ]
}

const MixinChart = props => <Chart chartData={chartData} height={'700px'} style={{ padding: 0 }} {...props} />

const mapStateToProps = state => {
  return {
    collapse: state.collapse
  }
}

export default connect(mapStateToProps)(MixinChart)
