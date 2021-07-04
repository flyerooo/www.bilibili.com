<template>
  <!-- international-manga-rank-item  -->
  <div class="manga-rank-item">
    <span class="rank-number" :class="{'on': index < 3}">{{ index + 1 }}</span>

    <!-- rank 1 -->
    <div class="preview" v-if="index === 0">
      <a
        class="preview-link"
        :href="`//manga.bilibili.com/detail/mc${ info.comic_id }?from=bili_main_rank`"
        target="_blank">
        <van-image
          :src="trimHttp(info.vertical_cover)"
          :options="{c: 1, q: 100}"
          width="112"
          height="149"
        ></van-image>
        <div class="preview-desc">
          <p class="title" :title="info.title">{{ info.title }}</p>
          <p class="style" v-if="info.styles && info.styles.length">
            {{ info.styles.slice(0, 2).map(item => item.name).join(' ') }}
          </p>
          <p class="update" v-if="info.is_finish === -1">
            未开刊
          </p>
          <p v-else class="update" :title="computeUpdate(info.last_short_title)">{{ computeUpdate(info.last_short_title) }}</p>
        </div>
      </a>
    </div>

    <!-- rank other -->
    <a
      v-else
      class="other-link"
      :href="`//manga.bilibili.com/detail/mc${ info.comic_id }?from=bili_main_rank`"
      target="_blank">
      <p class="title" :title="info.title">{{ info.title }}</p>
      <p class="update" v-if="info.is_finish === -1">
        未开刊
      </p>
      <p v-else class="update" :title="computeUpdate(info.last_short_title)">{{ computeUpdate(info.last_short_title) }}</p>
    </a>
  </div>
</template>

<script>
import { formatNum, trimHttp } from "g-public/js/utils";

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      formatNum,
      trimHttp
    };
  },
  methods: {
    computeUpdate(title) {
      if(title == Number(title)) {
        return `更新至${Number(title)}话`
      } else {
        return `更新至${title}`
      }
    }
  },
};
</script>

<style lang="less">
.manga-rank-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 9px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .rank-number {
    display: inline-block;
    flex-shrink: 0;
    margin-right: 12px;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    background: #fff;
    color: #999;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    cursor: default;
    &.on {
      background: #00a1d6;
      color: #fff;
    }
  }

  // rank 1
  .preview {
    position: relative;
    width: 290px;
    .preview-link {
      display: flex;
      img {
        flex-shrink: 0;
        width: 112px;
        height: 149px;
        border-radius: 2px;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 2px;
        background-image: url("~g-public/images/icon/img_loading.png");
      }
    }

    .preview-desc {
      margin-left: 12px;

      .title {
        font-weight: 500;
        display: -webkit-box;
        overflow: hidden;
        /*! autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        font-size: 14px;
        line-height: 20px;
        -webkit-line-clamp: 2;
      }

      .style {
        color: #999;
        line-height: 18px;
      }

      .update {
        color: #999;
        line-height: 18px;
      }
    }
  }

  // rank other
  .other-link {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    line-height: 18px;

    .title {
      overflow: hidden;
      width: 198px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    .update {
      overflow: hidden;
      min-width: 80px;
      height: 18px;
      color: #999;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }
  }


}
</style>
