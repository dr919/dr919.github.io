<template>
  <div class="main-skeleton">
    <w-skeleton :bgColor="bgColor" height="80px"></w-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <w-skeleton height="300px"></w-skeleton>
        </div>
        <w-skeleton height="30px"></w-skeleton>
      </div>
      <div class="skeleton-bottom">
        <w-skeleton height="30px"></w-skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import wSkeleton from './components/Skeleton.vue';
export default {
  name: 'mainSkeleton',
  data(){
    return{
        bgColor:"#ccc",
    }
  },
  components: {
        wSkeleton
    },
  template: '<wSkeleton />'
}
</script>

<style lang="less" scoped>
.main-skeleton {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: #fff;
}
  .skeleton-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
  }
  .skeleton-bottom {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .skeleton {
    margin: 0 auto;
    width: 90%;
    margin-bottom: 56px;
  }
</style>

