<template>
  <a v-adReport="{data: info, locId: locId}" :data-loc-id="locId" class="banner-card b-wrap" target="_blank">
    <img :src="trimHttp(info.pic)" :alt="info.name" v-if="info.url">
    <i class="gg-icon" v-if="info.is_ad && info.url"></i>
  </a>
</template>

<script>
import { trimHttp } from 'g-public/js/utils'

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    locId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      trimHttp: trimHttp
    }
  },
}
</script>

<style lang="less">
.banner-card {
  position: relative;
  display: block;
  max-height: 134px;
  margin-bottom: 46px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
  .gg-icon {
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: 38px;
    height: 22px;
    margin-right: 3px;
    z-index: 1;
    vertical-align: middle;
    background-image: url('~g-public/images/cm/cm_3.png');
    background-size: cover;
  }
}
</style>


