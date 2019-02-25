<template>
  <div class="root">
    <div class="warp">
      <div class="block">
        <div class="hexagon1"></div>
      </div>
      <div class="block">
        <div class="hexagon2">
          <div class="h1">
            <div class="h2">
              <img src="../assets/aaa.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="block" :style="zoom">
        <div class="hexagon3">
          <svg viewbox="0,0,200,200" width="200" height="200">
            <polygon points="100,0
                             186.6,50
                             186.6,150 
                             100,200 
                             13.4, 150
                             13.4, 50"
          style="fill:green;stroke:green;"/>
          </svg>
        </div>
      </div>
      <div class="block" :style="zoom">
        <div class="hexagon4">
          <canvas id="canvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zoom: {
        zoom: 1
      }
    };
  },
  mounted() {
    this.svg();
    this.canvas()
  },
  methods: {
    //svg
    svg() {
      let that = this;
      function aa() {
        let height = document.documentElement.clientWidth;
        console.log(height);
        that.zoom = {
          zoom: (height / 1367) * 1.35
        };
      }
      aa();
      window.onresize = function() {
        aa();
      };
    },
    canvas() {
      var canvas = document.getElementById("canvas");
      canvas.width = 200;
      canvas.height = 200;
      var cc = canvas.getContext("2d");

      // 填充一个背景
      cc.fillStyle = "#ffffff";
      cc.rect(0, 0, 200, 200);
      cc.fill();

      cc.beginPath();
      for (var i = 0; i < 6; i++) {
        var x = Math.cos(((i * 60 +30) / 180) * Math.PI) * 100 + 100;
        var y = -Math.sin(((i * 60 +30) / 180) * Math.PI) * 100 + 100;
        cc.lineTo(x, y);
      }
      cc.closePath();
      cc.fillStyle = "pink";
      cc.fill();
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("../scss/base.scss");

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
    .hexagon1 {
      width: 17.32vw;
      height: 10vw;
      line-height: 10vw;
      font-size: 50px;
      color: white;
      background: red;
      position: relative;
    }
    .hexagon1:before {
      content: "";
      position: absolute;
      top: -5vw;
      left: 0;
      width: 0;
      height: 0;
      border-left: 8.66vw solid transparent;
      border-right: 8.66vw solid transparent;
      border-bottom: 5vw solid red;
    }
    .hexagon1:after {
      content: "";
      position: absolute;
      bottom: -5vw;
      left: 0;
      width: 0;
      height: 0;
      border-left: 8.66vw solid transparent;
      border-right: 8.66vw solid transparent;
      border-top: 5vw solid red;
    }
    .hexagon2 {
      width: 17.32vw;
      height: 20vw;
      // margin: 2vw;
      transform: rotate(60deg);
      overflow: hidden;
      div,
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .h1 {
        transform: rotate(-120deg);
        .h2 {
          transform: rotate(60deg);
        }
      }
    }
  }
}
</style>
