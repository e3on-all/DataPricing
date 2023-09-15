<template>
  <d2-container class="page">
    <div class="header">

    </div>
    <!-- <div class="classify">
      <div class="bg">
        <div class="line" v-for="(item,index) in 3">
          <div class="category">行业</div>
          <div class="all">全部</div>
          <div class="type">
            <div>建筑地产</div>
            <div>建筑地产</div>
            <div>建筑地产</div>
            <div>建筑地产</div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- @click="handleDetailEntry(scope.row.id)"  -->
    <div class="goods">
      <div class="data-box" 
      @click="handlDetail()"
      v-for="(item, index) in 6">
        <img class="img" src="./image/img.jpg" alt="">
        <div class="text">
          <div class="title">hutb-电力数据集{{ index }}</div>
          <div class="des">
            电力数据集简介：收集了来自长沙市xxx小区的xxx户电力信息，同时包含了来自长沙气象站的气象数据
          </div>
          <div class="btn">
          <el-button type="primary">详情</el-button>
          <el-button>$11.1/h</el-button>
        </div>
        </div>
       
      </div>
    </div>

    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="page.pageCurrent" :page-size="page.pageSize" layout="total, prev, pager, next, jumper" :total="page.pageTotal">
      </el-pagination>
    </div>
    <div class="footer"></div>

  </d2-container>
</template>

<script>
import { MarketList } from '@api/market'


export default {
  components: {

  },
  data() {
    return {
      table: [],
      page: {
        pageCurrent: 1,
        pageSize: 6,
        pageTotal: 30
      }
    }

  },
  mounted() {
    this.initList()
  },

  methods: {
    initList (form) {
      MarketList({
        ...form,
        ...this.page
      })
        .then(res => {
          this.table = res.list
          this.page.pageTotal = res.total
        })
        .catch(err => {
          console.log('err', err)
        })
    },
    handlDetail() {
      this.$router.push({ path: '/detail' })
    },
    handleDetailEntry (val) {
      this.$router.push({
        path: '/detail',
        params: {
          id: val
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }

  }
}
</script>

<style lang="scss" scoped>
.page {
  .header {
    width: 100%;
    height: 320px;
    background-image: url(./image/header_bg.jpg);
    background-size: cover;
  }

  .classify {
    width: 100%;
    padding: 20px 140px;
    height: auto;
    box-sizing: border-box;


    .bg {
      padding: 20px 40px 0 40px;
      box-sizing: border-box;
      background-color: #f8f9fc;
      box-shadow: 0px 0px 4px 0px rgba(24, 24, 24, 0.1);

      .line {
        display: flex;
        padding-bottom: 20px;
        box-sizing: border-box;

        .category {
          line-height: 30px;
          margin-right: 40px;
        }

        .all {
          width: 60px;
          height: 30px;
          background-color: #f3f3f9;
          border: #2f74ff solid 1px;
          text-align: center;
          line-height: 30px;
          color: #2f74ff;
          margin-right: 40px;
          transform: all 0.3s;
        }

        .all:hover {
          cursor: pointer;
          background-color: #2f74ff;
          color: #fff;

        }

        .type {
          line-height: 30px;
          display: flex;
          flex-direction: row;

          div {
            margin-right: 20px;
          }

          div:hover {
            color: #2f74ff;
            cursor: pointer;
          }

        }
      }


    }
  }

  .goods {
    width: 100%;
    min-width: 1280px;
    margin: auto;
    padding: 20px 140px;
    height: 640px;
    box-sizing: border-box;
    overflow: hidden;

    .data-box {
      float: left;
      width: calc(calc(100% - 40px) / 3);
      min-width: 370px;
      min-width: none;
      margin-right: 20px;
      margin-bottom: 20px;
      background-color: #f8f9fc;
      flex: 1;
      height: 290px;
      overflow: hidden;
      box-shadow: 0px 0px 4px 0px rgba(24, 24, 24, 0.1);
      transform: all 0.3s;

      .img {
        width: 100%;
        height: 140px;
        transition: all 0.3s;
        transform: scale(1);

      }

      .img:hover {
        transform: scale(1.01);
      }

      .text {
        height: 70px;
        padding: 10px;

        .title {
          font-weight: 600;
          font-size: 24px;
          margin-bottom: 10px;
        }

        .des {
          margin: 10px auto;
          font-size: 12px;
          color: #999999;
        }
      }

    }

    .data-box:hover {
      cursor: pointer;
      box-shadow: 0px 4px 4px 0px rgba(13, 12, 12, 0.1);

    }

    div.data-box:nth-child(3n) {
      margin-right: 0px;

    }



  }

  .block {
    width: 100%;
    margin: 10px auto;
    text-align: center;
  }

  .footer {
    width: 100%;
    height: 200px;
    background-color: #344153;
  }




}</style>
