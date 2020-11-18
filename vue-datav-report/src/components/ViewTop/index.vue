<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TotalSales from '../CardTotalSales/index.vue'
  import TotalOrders from '../CardTotalOrders/index.vue'
  import TodayUsers from '../CardTodayUsers/index.vue'
  import TotalUsers from '../CardTotalUsers/index.vue'

  export default {
    components: {
      TotalSales,
      TotalOrders,
      TodayUsers,
      TotalUsers
    }
  }
</script>

<style scoped>

</style>
