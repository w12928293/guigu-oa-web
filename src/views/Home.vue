<template>
  <div class="container">
    <van-nav-bar
      title="OA审批"
    />
    <van-collapse v-model="activeNames">
      <van-collapse-item 
        v-for="item in list"
        :key="item.id"
        :title="item.title"
        :name="item.name">
        <van-row>
          <van-col v-for="col in item.data" :key="col.id" span="6">
            <div class="item">
              <img :src="col.imgUrl"/>
              <span>{{col.name}}</span> 
            </div>
          </van-col>
        </van-row>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { list } from '../mock/index';

export default {
  name: 'HelloWorld',
  data() {
    return {
      list: Object.freeze(list),
      activeNames: ['1', '2', '3', '4', '5'],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  padding-bottom: 50px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    span {
      font-size: 12px;
      padding: 8px 4px;
      text-align: center;
    }
  }
}
</style>
