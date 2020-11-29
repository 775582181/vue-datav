<template>
  <vue-chart :options="data"></vue-chart>
</template>

<script>
export default {
  data() {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},

        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'purple' // 设置填充色为紫色
          }
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
