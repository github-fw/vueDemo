<template>
  <div class="root">
    <div class="warp">
      <div class="block">
        <div class="hexagon1">1</div>
      </div>
      <div class="block">
        <div class="hexagon2"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
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
      content: '';
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
      content: '';
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

    }
  }
}
</style>
