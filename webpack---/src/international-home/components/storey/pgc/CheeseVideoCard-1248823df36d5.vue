<template>
  <div class="video-card-common" v-livelazyload="handleShow">
    <!-- 课堂模块 -->
    <template>
      <div class="card-pic">
        <a :href="info.link" target="_blank"
          v-van-report:season_click.click="{season_id: info.id, order_id: index + 1}">
          <van-image 
            :src="info.cover"
            :options="{c: 1, q: 100}"
            width="206" 
            height="116">
          </van-image>
          <div class="count">
            <div class="left">
              <span><i class="bilifont bili-icon_shipin_bofangshu"></i>{{ cheeseView }}</span>
            </div>
          </div>
          <i class="crown" :class="cheeseCrown"></i>
        </a>
      </div>
      <a :href="info.link" target="_blank" class="cheese_title" :title="info.title" 
        v-van-report:season_click.click="{season_id: info.id, order_id: index + 1}">
        {{ info.title }}
      </a>
      <p class="update_info">{{ info.update_info }}</p>
     
    </template>
  </div>
</template>

<script>
import {formatDuration, formatNum, customReport} from 'g-public/js/utils'

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isLogin: {
      type: Boolean,
      default: false
    },
    showUp: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number
    }
  },
  computed: {
    crown() {
      const num = this.info.stat && this.info.stat.coin || 0
      if (num >= 2000 && num < 10000) {
        return 'silver'
      } else if (num >= 10000) {
        return 'gold'
      } else {
        return ''
      }
    },
    view() {
      return formatNum(this.info.stat && this.info.stat.view)
    },
    like() {
      return formatNum(this.info.stat && this.info.stat.like)
    },
    duration() {
      return formatDuration(this.info.duration)
    },

    cheeseView() {
      return formatNum(this.info.play)
    },

    cheeseCrown() {
      if (this.info.top_sale === 1) return 'gold'
      return ''
    }
  },
  filters: {
    cheeseLink(val) {
      if (!val) return ''
    }
  },
  methods: {
    handleShow() {
      customReport('season_show', {
        season_id: this.info.id,
        order_id: this.index + 1
      })
      window.reportObserver && window.reportObserver.forceCommit && window.reportObserver.forceCommit()
    }
  }
}
</script>

<style lang="less" scoped>
.video-card-common {
  width: 206px;
  // height: 186px;
  cursor: pointer;
  .card-pic {
    position: relative;
    width: 100%;
    height: 116px;
    a {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url('~g-public/images/icon/img_loading.png');
      background-repeat: no-repeat;
      background-position: center;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 48px;
        background-image: url(~g-public/images/linear.png);
        background-repeat: repeat-x;
        bottom: 0;
        left: 0;
        border-radius: 2px;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 2px;
      }
      .count {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 6px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        line-height: 16px;
        // text-shadow: 0 1px 1px rgba(0,0,0,0.24);
        .left {
          display: flex;
          align-items: center;
          span {
            vertical-align: middle;
            display: flex;
            align-items: center;
            &:first-child{
              margin-right: 10px;
            }
          }
        }
      }
      .crown {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 24px;
        background-size: contain;
        &.gold {
          background-image: url('~g-public/images/icon_gold.png');
        }
        &.silver {
          background-image: url('~g-public/images/icon_silver.png');
        }
      }
    }
    
    .watch-later-video{
      transition: opacity .3s;
      opacity: 0;
    }
    &:hover{
      .watch-later-video{
        transition-delay: .2s;
        opacity: 1;
      }
    }
  }
  .title {
    display: block;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 8px 0;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    font-weight: 500;
    padding-right: 12px;
  }

  .cheese_title {
    display: block;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    font-weight: 500;
    padding-right: 12px;
  }

  .up {
    display: flex;
    // align-items: center;
    font-size: 12px;
    color: #999;
    line-height: 16px;
    &:hover{
      color: #00A1D6;
    }
  }
  .bilifont {
    margin-right: 4px;
    vertical-align: middle;
  }
  .gg-icon {
    display: inline-block;
    font-size: 12px;
    border-radius: 2px;
    margin-right: 8px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border:1px solid #b2b2b2;
    color: #b2b2b2;
    font-weight: normal;
  }
}

.update_info {
  color: #999;
  font-size: 12px;
  line-height: 16px;
  // margin-top: 5px;
}


@media screen and (max-width: 1438px) {
  .video-card-common {
      width: 170px;
      .card-pic, .match-card-pic {
        width: 100%;
        height: 96px;
        .right {
          display: none;
        }
      }
      &:hover {
        .card-pic {
          .right {
            display: block;
          }
          .left {
            display: none;
          }
        }
      }
      &.ex-card-common {
        .card-pic {
          a {
            &::before {
              background: none;
            }
          }
        }
      }
    }
}


</style>


