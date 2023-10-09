<template>
  <d2-container class="page">
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="4">
          <img class="head" alt="">
          <div>root</div>

        </el-col>
        <el-col :span="20">
          <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
            <el-tab-pane label="我的数据" name="mine">
              <div class="list" v-for="(item, index) of userList">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <img :src="item.picUrl" alt="">
                  </el-col>
                  <el-col :span="20">
                    <div class="text">
                      <div class="title">{{ item.dataName }}</div>
                      <div class="des">{{ item.introduce }}</div>
                    </div>
                  </el-col>
                </el-row>
              </div>

              <div class="block">
                <el-pagination @current-change="handleCurrentChange1" :current-page="page1.pageCurrent"
                  :page-size="page1.pageSize" :total="page1.pageTotal" layout="total, prev, pager, next">
                </el-pagination>
              </div>
            </el-tab-pane>

            <el-tab-pane label="使用历史" name="history">
              <div class="list" v-for="(item, index) of 4">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <img src="" alt="">
                  </el-col>
                  <el-col :span="20">
                    <div class="text">
                      <div class="title">hutb-电力数据集</div>
                      <div class="des">电力数据集简介：收集了来自长沙市xxx小区的xxx户电力信息，同时包含了来自长沙气象站的气象数据</div>
                    </div>
                  </el-col>
                </el-row>
              </div>

              <div class="block">
                <el-pagination @current-change="handleCurrentChange2" :current-page="page2.pageCurrent"
                  :page-size="page2.pageSize" :total="page2.pageTotal" layout="total, prev, pager, next">
                </el-pagination>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>

      </el-row>
    </div>

    <div class="statistics">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="content">
            <h3>使用情况</h3>
            <img src="" alt="">
          </div>
        </el-col>
        <el-col :span="12">
          <div class="content">
            <h3>收入</h3>
            <img src="" alt="">
          </div>
        </el-col>
      </el-row>

    </div>

    <div class="footer"></div>



  </d2-container>
</template>

<script>
import util from '@/libs/util.js'
import { UserData, UserStats } from '@api/user'
export default {
  name: 'page1',
  data() {
    return {
      activeName: 'mine',
      userList: [],
      data: {},
      page1: {
        pageCurrent: 1,
        pageSize: 4,
        pageTotal: 0
      },
      page2: {
        pageCurrent: 1,
        pageSize: 4,
        pageTotal: 0
      }


    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentChange1(val) {
      this.page1.pageCurrent = val
      this.getData()
      console.log(`当前页: ${val}`);
    },
    handleCurrentChange2(val) {
      this.page2.pageCurrent = val
      this.getData()
      console.log(`当前页: ${val}`);
    },
    getData() {
      const params1 = {
        ownId: util.cookies.get('ownId'),
        page: this.page1.pageCurrent,
        pageSize: this.page1.pageSize
      }
      const params2 = {
        uid: util.cookies.get('uuid'),
        page: this.page2.pageCurrent,
        pageSize: this.page2.pageSize
      }
      console.log('params2', params2)

      UserData(params1)
        .then(res => {
          this.userList = res.records
          this.page1.pageTotal = res.total
        })
        .catch(err => {
          console.log('err', err)
        })

      UserStats(params2)
        .then(res => {
          this.data = res
        })
        .catch(err => {
          console.log('err', err)
        })
    }
  }
};

</script>

<style lang="scss" scoped>
.page {
  .header {
    width: 100%;
    padding: 20px 100px;
    box-sizing: border-box;
    text-align: center;

    .head {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: aqua;
      margin-bottom: 10px;
    }

    .list {
      height: 120px;
      padding: 10px;
      box-sizing: border-box;
      text-align: left;


      img {
        width: 100px;
        height: 100px;
        background-color: #999;
      }

      .text {
        height: 100px;
        border-bottom: #edeff0 solid 1px;

        .des {
          color: #999;
          font-size: 12px;
          margin: 20px auto;
        }
      }
    }
  }

  .statistics {
    width: 100%;
    height: auto;
    padding: 20px 100px;
    box-sizing: border-box;
    text-align: center;

    .content {
      img {
        width: 500px;
        height: 250px;
        background-color: #999;
      }
    }
  }

  .footer {
    width: 100%;
    height: 200px;
    background-color: #344153;
  }

  .el-tabs--card {
    height: 500px;
    /* overflow-y: auto; */
  }

  .el-tab-pane {
    height: 500px;
    // overflow-y: auto;
  }

}
</style>
