<template>
  <card-common
    title="累计用户数"
    value="1,088,632">
    <template>
      <div id="total-users-chart" :style="{width:'100%',height:'100%'}"/>
    </template>
    <template v-slot:footer>
      <div class="total-user-footer">
        <span>日同比</span>
        <span class="emphasis">8.73%</span>
        <div class="increase"/>
        <span class="month">月同比</span>
        <span class="emphasis">35.91%</span>
        <div class="decrease"/>
      </div>
    </template>
  </card-common>
</template>

<script>
  import commonCardMixin from '../../mixins/commonCardMixin'

  export default {
    mixins: [commonCardMixin],
    mounted () {
      const chartDom = document.getElementById('total-users-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
          xAxis: {
            type: 'value',
            show: false
          },
          yAxis: {
            type: 'category',
            show: false
          },
          series: [{
            type: 'bar',
            data: [200],
            stack: '总量',
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          }, {
            type: 'bar',
            data: [250],
            stack: '总量',
            itemStyle: {
              color: '#eee'
            }
          }, {
            type: 'custom',
            data: [200],
            stack: '总量',
            renderItem: (params, api) => {
              const value = api.value(0) // 获取series中第一个元素的值即200
              const endPoint = api.coord([value, 0]) // 获取坐标点
              return {
                position: endPoint, // 绘制位置
                type: 'group', // 绘制路径，通过svg图标绘制
                children: [
                  {
                    type: 'path',
                    shape: { // 绘制形状
                      d: 'M69.87548107 254.21542956l884.24903786 0-442.12313808 530.2649695z', // svg 图标的内容
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: { // 填充色
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: { // 绘制形状
                      d: 'M512 78.56348067L959.732278 774.76985266l-895.463532 1e-8L512 78.56348067z', // svg 图标的内容
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: { // 填充色
                      fill: '#45c946'
                    }
                  }
                ]

              }
            }
          }],
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        }
      )
    }
  }
</script>

<style lang="scss" scoped>
  .total-user-footer {
    display: flex;
    align-items: center; // 垂直居中
    .month {
      margin-left: 20px;
    }
  }
</style>
<svg t="1605683936245" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9585"
     width="200" height="200">
  <path d="M512 128.4096L914.944 819.2H109.056L512 128.4096zM198.144 768h627.712L512 229.9904 198.144 768z"
        p-id="9586"></path>
</svg>
