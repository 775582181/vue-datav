<template>
  <div class="home">
    <top-view/>
    <sales-view/>
    <bottom-view/>
    <map-view/>
  </div>
</template>

<script>
  import TopView from '../components/ViewTop'
  import SalesView from '../components/ViewSales'
  import BottomView from '../components/ViewBottom'
  import MapView from '../components/ViewMap'

  export default {
    name: 'Home',
    components: {
      TopView,
      SalesView,
      MapView,
      BottomView
    }
  }
</script>
<style lang="scss">
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #eee;
    box-sizing: border-box;
  }
</style>
