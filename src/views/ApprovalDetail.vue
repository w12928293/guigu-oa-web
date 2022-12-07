<template>
  <div class="container">
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="() => $router.back()"
    />

    <van-list>
      <van-cell>
        <template slot="default">
          <div class="header-warp">
            <h3>朽木白提交的申请</h3>
            <p>北京尚硅谷教育科技公司</p>
            <span class="pass">审批通过</span>
            <!-- <seal-avatar class="seal-wrap"></seal-avatar> -->
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template slot="default">
          <div class="detail-wrap">
            <div class="item" v-for="item in detail" :key="item.id">
              <h5>{{item.title}}</h5>
              <p>{{item.content}}</p>
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell>
        <template slot="default">
          <div class="result">
            <h3>流程</h3>
            <van-steps direction="vertical" :active="1">
              <van-step>
                <h4>我 发起申请</h4>
                <p>2016-07-12 12:40</p>
              </van-step>
              <van-step>
                <h4>朽木白 已同意</h4>
                <p>2016-07-11 10:00</p>
              </van-step>
              <van-step>
                <h4>朽木白 正在处理</h4>
                <p>2016-07-10 09:30</p>
              </van-step>
            </van-steps>

          </div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { cellDetail } from '../mock/index';
// import SealAvatar from '../components/Seal.vue';
export default {
  name: 'HelloWorld',
  components: {
    // SealAvatar,
  },
  props: {
    msg: String
  },
  data() {
    return {
      detail: Object.freeze(cellDetail),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  padding-bottom: 50px;
  .header-warp {
    position: relative;
    h3 {
      font-size: 16px;
    }

    .pass {
        color: #4CB971;
      }
      .refused {
        color: #EB8473;
      }
  }
  .detail-wrap {
    .item {
      h5 {
        color: #838485;
      }
      p {
        color: #1B1F22;
      }
    }
  }
  .result {
    font-size: 12px;
    h4, p {
      font-size: 12px;
    }
  }
  .seal-wrap {
    position: absolute;
    right: 0;
  }
}
</style>
