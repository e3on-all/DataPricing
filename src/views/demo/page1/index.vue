<template>
  <d2-container class="page">
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="4">
          <img class="head" alt="">
          <div>username</div>

        </el-col>
        <el-col :span="20">
          <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
            <el-tab-pane label="我的数据" name="mine">

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
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page.sync="currentPage" :page-size="100" layout="total, prev, pager, next" :total="1000">
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
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page.sync="currentPage" :page-size="100" layout="total, prev, pager, next" :total="1000">
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
export default {
  name: 'page1',
  data() {
    return {
      activeName: 'mine',
      currentPage: 1
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
  .statistics{
    width: 100%;
    height: auto;
    padding: 20px 100px;
    box-sizing: border-box;
    text-align: center;

    .content{
      img{
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

}</style>
