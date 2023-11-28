<template>
  <d2-container class="page">

    <div class="content">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="left">
            <h1>{{ table.dataName }}</h1>
            <div class="des">{{ table.abstracts }}</div>
            <div class="score">
              <!-- <div class="number">{{ table.score }}</div> -->
              <div class="number">9.0</div>
              <div class="fen">分</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <img :src=table.picUrl alt="">
        </el-col>
      </el-row>
    </div>

    <div class="introduce">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="left">
            <h2>关于数据集</h2>
            <div class="des">{{ table.introduce }}</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="right">
            <div class="list" v-for="(item, index) of list">
              <div>{{ list[index] }}:</div>
              <div class="sub">{{ sub[index] }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="status">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="left">
            <h2>使用情况</h2>
            <div class="use" v-for="(item, index) of use">
              <div class="title">{{ item }}</div>
              <div class="times">886</div>
            </div>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="fold" id="echart">
          </div>
        </el-col>
      </el-row>

    </div>


  </d2-container>
</template>

<script>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

import { MarketDataDetail } from '@api/market'

export default {
  name: 'detail',
  data() {
    return {
      table: {
        abstracts: '',
        dataName: '',
        introduce: '',
        license: '',
        ownUser: '',
        picUrl: '',
        price: ''
      },

      list: ["价格", "License", "Expected update frequency"],
      sub: ['', '', "Annually"],
      use: ["使用次数", "购买"],
      options: {},
      detail: {
        title: "企业信贷数据",
        score: "9.5",
        des1: "结合企业数据与公共数据，建立企业信贷风险分析模型。场景方向可从准入管理、预警监控、信贷调整、贷后管理等方面，对企业各方面的风险进行评估，结合模型及业务场景设计完整的风险防控方案，提升银行信贷风险防控能力。",
        des2: "国有银行基于自身的技术能力和基础数据管理能力，均已建成智能化风控平台并开始体系化运营。工商银行着力构建“融安e盾”等一系列智能风控系统，打造了企业级智慧化风险防控整体解决方案；积极开展智能风控体系建设，如个人客户智能化风险监控的十大应用场景等。其中，基于大数据创新的风险管理服务形态智能模型自投产以来，模型预警量较原监督体系减少了30%，风险识别率达到21%，风险监控的精准性、时效性得到有效提升。农业银行目前已建成包含即时查询、可视化展示、图计算分析等功能于一体的大数据平台；逐步建成模型管控中心、风险策略中心、风险计量中心，形成以“三大中心”为核心的风控模型体系；建立了客户准入评价、信用风险评估、反欺诈、贷后风险监测和集中催收等智能风险管理模型，为风险管理全流程提供支撑和服务。"
      },
    }
  },
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter(to, from, next) {
    const id = to.params.id
    if (id) {
      next(instance => {
        instance.getDetail(id)
      })
    } else {
      next(new Error('未指定ID'))
    }
  },
  // // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate(to, from, next) {
    const id = to.params.id
    if (id) {
      instance.getDetail(id)
      next()
    } else {
      next(new Error('未指定ID'))
    }
    },
// 第一次进入或从其他组件对应路由进入时触发
beforeRouteEnter(to, from, next) {
  const id = to.params.id
  if (id) {
    next(instance => {
      instance.getDetail(id)
    })
  } else {
    next(new Error('未指定ID'))
  }
},
// // 在同一组件对应的多个路由间切换时触发
beforeRouteUpdate(to, from, next) {
  const id = to.params.id
  if (id) {
    instance.getDetail(id)
    next()
  } else {
    next(new Error('未指定ID'))
  }
},
mounted() {
  this.initEcharts()
  console.log("999ggg")
},

methods: {
  getDetail(id) {
    MarketDataDetail(id).then((response) => {
      this.table = response
      this.sub[0]=response.price
      this.sub[1]=response.license
    }).catch((error) => {
      console.log(error)
      this.$message.error('failed')
    })
  },


  initEcharts() {
    const chartBox = echarts.init(document.getElementById("echart"))
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };

    chartBox.setOption(option);
    window.addEventListener("resize", function () {
      chartBox.resize();
    });


  }

}

}
</script>

<style lang="scss" scoped>
.page {
  .content {
    width: 100%;
    height: 240px;
    padding: 20px 100px;
    box-sizing: border-box;

    .left {
      .des {
        text-indent: 2em;
        margin: 20px 0;
      }

      .score {
        text-align: center;
        margin-top: 40px;
        color: #d3b38f;

        .number {
          display: inline-block;
          font-weight: 600;
          font-size: 36px;
        }

        .fen {
          margin-left: 10px;
          display: inline-block;
        }
      }
    }

    img {
      width: 100%;
      height: 240px;
      margin: auto;
      overflow: hidden;
    }
  }

  .introduce {
    width: 100%;
    height: 400px;
    padding: 40px 100px 20px 100px;
    box-sizing: border-box;

    .left {
      height: auto;
      padding: 10px 30px 30px 30px;
      background-color: #f2f2f2;

      .des {
        text-indent: 2em;
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .right {
      width: 75%;
      margin: auto;
      padding-top: 40px;

      .list {
        margin-bottom: 40px;

        .sub {
          margin-top: 10px;
          font-weight: 500;
          color: #3871e0;
        }
      }
    }
  }

  .status {
    width: 100%;
    height: 240px;
    padding: 0 100px;
    box-sizing: border-box;
    background-color: #f2f2f2;

    .left {
      margin: 40px auto;

      .use {
        display: inline-block;
        margin-right: 60px;
        text-align: center;

        .times {
          font-weight: 600;
          font-size: 32px;
        }
      }
    }

    .fold {
      width: 100%;
      height: 240px;
    }

  }

}
</style>
