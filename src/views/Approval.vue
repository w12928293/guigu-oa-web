<template>
  <div class="container">
    <van-nav-bar
      title="审批中心"
    />
    <van-tabs v-model="active" @click="onClick">
      <van-tab 
        v-for="item in tabList"
        :key="item.id"
        :title="item.title"
      >
      </van-tab>
    </van-tabs>

    <div class="list-wrap" >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item.id">
          <template slot="default">
            <router-link :to="`/approval/${item.id}`">
              <div class="item-wrap">
                <div class="item-header">
                  <img :src="item.avatar" alt="">
                  <h3>{{item.title}}</h3>
                  <span>{{item.createTime}}</span>
                </div>
                <div class="item-block">
                  <p>{{item.type}}</p>
                  <p>开始时间：{{item.startTime}}</p>
                  <p>结束时间：{{item.endTime}}</p>
                </div>
                <div class="item-status">
                  <span :class="item.status ? 'pass' : 'refused'">{{item.statusText}}</span>
                </div>
              </div>
            </router-link>
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { tabList, cellList } from '../mock/index';
export default {
  name: 'HelloWorld',
  data() {
    return {
      tabList: Object.freeze(tabList),
      active: 0,
      list: cellList,
      loading: false,
      finished: false,
    }
  },
  methods: {
    onClick(name, title) {
      this.active = name
      console.log(name, title);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length > 0) {
          this.finished = true;
        }
      }, 1000);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/deep/ .van-nav-bar {
  background: #1D1E20;
}
/deep/ .van-nav-bar__title {
  color: #fff;
}
.container {
  padding-bottom: 50px;
  .list-wrap {
    margin-top: 4px;
    border-top: 1px solid #ebedf0;
  }
  .item-wrap {
    font-size: 12px;
    color: #A7A8A9;
    .item-header {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        margin-right: 4px;
      }
      h3 {
        flex: 1;
        font-size: 14px;
        color: #000;
        padding: 0;
        margin: 0;
      }

    }

    .item-block {
      padding: 4px 0;
      p {
        padding: 0;
        margin: 0;
        line-height: 20px;
      }
    }
    .item-status {
      .pass {
        color: #4CB971;
      }
      .refused {
        color: #EB8473;
      }
    }
  }
}
</style>
