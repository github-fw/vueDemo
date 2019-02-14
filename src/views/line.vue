<template>
  <div class="root">
    <div class="warp">
      <div class="block" ref="dom">

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        xdata: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
        ydata: [100, 200, 400, 600, 200, 1200, 800, 700, 1200, 2000, 400, 600],
      }
    },
    mounted() {
      this.initChart();
    },
    methods: {
       open2(str) {
        this.$message({
          message: str,
          type: 'success'
        });
      },
      initChart() {
        let chart = this.$echarts.init(this.$refs.dom);
        let option = {
          grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            top: '5%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: 'blue',
              fontSize: 16,
              margin: 15,
            },
            data: this.xdata
          },
          yAxis: {
            type: 'value',
            show: false
          },
          series: [{
            symbol: 'circle',
            symbolSize: 20,
            type: 'line',
            data: this.ydata,
            lineStyle: {
              color: 'green'
            },
            itemStyle: {
              color: 'green',
              // borderColor: 'white'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(58, 239, 67,1)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(58, 239, 67,0)' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            smooth: true
          }]
        }
        chart.setOption(option)
        //绑定折线图点击事件
        chart.getZr().on('click', params => {
          const pointInPixel = [params.offsetX, params.offsetY];
          if (chart.containPixel('grid', pointInPixel)) {
            let xIndex = chart.convertFromPixel({
              seriesIndex: 0
            }, [params.offsetX, params.offsetY])[0];
            this.open2(this.xdata[xIndex]);
          }
        })
        window.onresize = function () {
          chart.resize();
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import url('../scss/base.scss');

  .warp {
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;

    .block {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>