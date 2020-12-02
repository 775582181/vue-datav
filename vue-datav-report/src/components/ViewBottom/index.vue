<template>
  <div class="view-bottom">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <vue-chart :options="searchUserOption"/>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">1,945,634</div>
                <vue-chart :options="searchUserOption"/>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="180"/>
                <el-table-column prop="keyword" label="关键词"/>
                <el-table-column prop="count" label="总搜索量"/>
                <el-table-column prop="users" label="搜索用户数"/>
                <el-table-column prop="range" label="搜索占比"/>
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"/>
                <el-radio-button label="商品"/>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <vue-chart :options="categoryOption"/>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 450
        },
        series: [
          {
            type: 'line',
            data: [100, 140, 200, 110, 400, 110, 50, 200, 250],
            areaStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
              color: 'rgb(95,187,255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {},
      tableData: [
        {id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%'},
        {id: 2, rank: 2, keyword: '北京', count: 100, users: 90, range: '90%'},
        {id: 3, rank: 3, keyword: '北京', count: 100, users: 90, range: '90%'},
        {id: 4, rank: 4, keyword: '北京', count: 100, users: 90, range: '90%'}
      ],
      radioSelect: '品类',
      categoryOption: {}
    }
  },
  methods: {
    onPageChange: function (page) {
      console.log('----------------------------------------------------------' + page)
    },
    renderPieChart: function () {
      const mockData = [
        {
          legendName: '粉面粥店',
          value: 67,
          percent: '15.40',
          itemStyle: {// 设置每个扇区颜色
            color: '#e7e702'
          },
          name: '粉面粥店 | 15.40%'
        }, {
          legendName: '简餐便当',
          value: 97,
          percent: '22.30',
          itemStyle: {
            color: '#8d7fec'
          },
          name: '简餐便当 | 22.30%'
        }, {
          legendName: '汉堡披萨',
          value: 92,
          percent: '21.15',
          itemStyle: {
            color: '#5085f2'
          },
          name: '汉堡披萨 | 21.15%'
        }, {
          legendName: '河北炒粉',
          value: 55,
          percent: '13.70',
          itemStyle: {
            color: '#6DF077'
          },
          name: '河北炒粉 | 13.70%'
        }
      ]
      this.categoryOption = {
        title: [
          {// 主标题（左上角）
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          }, {// 副标题（环形中心）
            text: '累计订单量',
            subtext: '320',
            // 文字居中
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            }
          }
        ],
        series: [{
          name: '品类分布',
          type: 'pie',
          data: mockData,
          label: {// 每个扇形文字描述设置
            normal: {
              show: true,
              position: 'outter',
              formatter: function (prams) {
                // console.log(prams)
                return prams.data.legendName
                // 多个参数
                // return `${prams.data.legendName} | ${prams.data.percent}` // 河北炒粉 | 13.70%
              }
            }
          },
          center: ['35%', '50%'], // 调整chart的中心点位置
          radius: ['45%', '60%'], // 设置扇形为显示环形区域
          labelLine: {// 设置每个扇形文字描述连接线
            normal: {
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          // 控制数据排列顺序| 是否安装顺时针排列
          clockwise: true,
          itemStyle: {// 设置每个扇区间距
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        // legend: {} // 只在此处添加lagend没有显示效果，需要在数据（mockData）中添加name属性
        legend: {
          type: 'scroll', // 滚动
          orient: 'vertical', // 垂直排列
          height: 250, // 显示区域高度
          left: '70%', // 水平位移70%
          top: 'middle', // 竖直方向居中
          textStyle: { // 文字颜色调淡
            color: '#8c8c8c'
          }
        },
        // tooltip: {} // 默认这样就有默认样式，但是不符合大部分需求，所以需要定制
        tooltip: {
          trigger: 'item',
          formatter: function (prams) { // 定制展示信息
            console.log(prams)
            const str = prams.seriesName + '<br />' +
              prams.marker + prams.data.legendName + '<br />' +
              '数量：' + prams.data.value + '<br />' +
              '占比：' + prams.data.percent + '%'
            return str
          }
        }
      }
    }
  },
  mounted() {
    this.renderPieChart()
  }
}
</script>

<style lang="scss" scoped>
.view-bottom {
  display: flex;
  margin-top: 20px;

  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;

      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }

    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }

          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
