<template>
  <div class="live-list">
    <StoreyTitle :info="{iconfont: `bili-${info.type}`, title: info.name, link: info.morelink}">
      <div class="text-info" slot="left">
        <!-- 当前共有 xx 个直播 -->
        <span>{{$HomeLang['7']}} {{onlineCount}} {{$HomeLang['8']}}</span>
      </div>
      <Exchange slot="right" :link="info.morelink" :type="`live`" @click.native="rindex ++" @on-change="$emit('exchange')" :state="state" />
    </StoreyTitle>
    <div class="zone-list-box">
      <LiveCard 
        @click.native="handleClickRport(item, index)"
        report
        v-for="(item, index) in list" :key="`lc-${rindex}-${index}`" :info="item" :index="index" :rindex="rindex" />
    </div>
  </div>
</template>

<script>
import StoreyTitle from 'g-public/components/international/StoreyTitle'
import Exchange from 'g-public/components/international/Exchange'
import LiveCard from './LiveCard'
import { customReport, allCustomReport } from 'g-public/js/utils'

const LIVE_SOURCE = -99998

export default {
  components: {
    LiveCard,
    StoreyTitle,
    Exchange
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    onlineCount: {
      type: Number,
      default: 0
    },
    state: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rindex: 0
    }
  },
  methods: {
    handleClickRport(item, index) {
      let marker_id = 0
      let marker_content = ''
      if (item.pendant_Info && Object.keys(item.pendant_Info).length) {
        marker_id = Object.keys(item.pendant_Info)[0]
        marker_content = item.pendant_Info[marker_id]
      }

      customReport('live_card_click', {
        room_id: item.roomid,
        up_id: item.uid,
        parent_area_id: item.area_v2_parent_id,
        area_id: item.area_v2_id,
        live_status: 1,
        position: index + 1,
        marker_id,
        marker_content
      })

      allCustomReport({
        CBlock: 'live',
        DBlock: 'live_card',
        type: 'click',
      }, {
        msg: JSON.stringify({
          room_id: item.roomid,
          up_id: item.uid,
          parent_area_id: item.area_v2_parent_id,
          area_id: item.area_v2_id,
          live_status: 1,
          position: index + 1,
          marker_id,
          marker_content
        })
      })
    }
  },
}
</script>

<style lang="less">
.live-list {
  .text-info span {
    margin-right: 24px;
  }
}
</style>