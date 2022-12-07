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

    <div class="notice">
      <van-icon name="bullhorn-o" />
      <p>朽木白提交的费用申请</p>
      <span class="pass">审批通过</span>
    </div>

    <div class="footer">
      <div class="left-action">
        <div class="action back" @click="() => $router.back()">
          <van-icon name="revoke" />
          <span>返回</span>
        </div>
      </div>
      <div class="right-button">
        <van-button type="default" size="small">审批拒绝</van-button>
        <span style="margin: 0 4px"></span>
        <van-button type="info" size="small">审批通过</van-button>
      </div>
    </div>
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
  padding-bottom: 86px;
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

  .notice {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 12px;
    padding: 8px 10px;
    background: #FEFBE8;
    position: fixed;
    bottom: 53px;
    z-index: 10;
    p {
      flex: 1;
      margin: 4px;
    }
    .pass {
      color: #07c160;
      margin-right: 20px;
    }
  }
  .footer {
    // height: 50px;
    padding: 10px;
    background: #F8F8F8;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 10;
    .left-action {
      flex: 1;
      .action {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
          font-size: 12px;
          color: #838485;
        }
      }
    }

    .right-button {
      margin-right: 20px;
    }
  }
}
</style>
