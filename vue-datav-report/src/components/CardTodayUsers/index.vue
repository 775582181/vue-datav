<template>
  <card-common
    title="今日交易用户数"
    value="88,632"
  >
    <template>
      <vue-chart :options="getOptions()"></vue-chart>
      <!--      <div id="today-users-chart" :style="{width:'100%',height:'100%'}"/>-->
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">7.88%111</span>
    </template>
  </card-common>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  mounted() {
  },
  methods: {
    getOptions: () => {
      return {
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          show: false,
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
          barWidth: '60%' // 设置柱宽
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150]
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
