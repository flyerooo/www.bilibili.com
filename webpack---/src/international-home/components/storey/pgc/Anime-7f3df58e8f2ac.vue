<template>
  <div class="anime">
    <SpaceBetween>
      <Timeline :info="info" :type="1" />
      <PgcRank :info="info" :type="1" :count="10"/>
    </SpaceBetween>
    <SpaceBetween>
      <VideoList :info="newInfo" :showUp="false" />
      <SpecialRecommend :width="320" :height="330" :position_id="104">
        <header slot="header">{{$HomeLang['12']}}</header>
      </SpecialRecommend>
    </SpaceBetween>
  </div>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import VideoList from 'g-public/components/international/VideoList'
import Timeline from './Timeline'
import PgcRank from 'g-public/components/international/PgcRank'

import SpecialRecommend from './SpecialRecommend'

export default {
  components: {
    SpaceBetween,
    Timeline,
    PgcRank,
    VideoList,
    SpecialRecommend
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    newInfo() {
      return Object.assign(Object.assign({},this.info) ,{
        type: null,
        name: this.$HomeLang['13']
      })
    }
  }
}
</script>

<style lang="less">
.anime {
  .special-recommend {
    height: 314px;
  }
  .zone-list-box {
    height: 376px;
  }
}

</style>
