<template>
  <d2-container class="page">

    <div class="content">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="left">
            <h1>HUTB-电力数据集</h1>
            <div class="des">Average hourly earnings of female and male employees (managers), local currency</div>
            <div class="score">
              <div class="number">9.5</div>
              <div class="fen">分</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <img src="./item.png" alt="">
        </el-col>
      </el-row>
    </div>

    <div class="introduce">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="left">
            <h1>About Dataset</h1>
            <div class="des">This comprehensive indicator offers detailed insights into
              the average hourly earnings derived from paid employment across various
              dimensions, including sex, occupation, age, and disability status.
              By examining the interplay of these factors, the indicator provides
              a nuanced understanding of wage differentials within the workforce.
              This information is invaluable for assessing patterns of income inequality,
              identifying potential areas for policy intervention, and fostering a more
              inclusive and equitable employment environment. Through its multifaceted
              approach, the indicator enables a thorough analysis of how various demographic
              variables intersect with earnings, thereby contributing to a more holistic
              comprehension of labor market dynamics and the socioeconomic landscape.PS I
              hope this dataset will answer many of your questions and will be trigger to
              many new ones. I will read every comment and notebooks as I do it every time
              and hope to see your mind blowing conclusions. Good luck and thank you for being here</div>
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

export default {
  name: 'detail',
  data() {
    return {
      list: ["价格", "License", "Expected update frequency"],
      sub: ["10.00", "CC0: Public Domain", "Annually"],
      use: ["使用次数", "购买"],
      options: {},
    }
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
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

        margin: 20px 0;
      }

      .score {
        text-align: center;
        margin-top: 60px;
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
      height: 300px;
      padding: 10px;
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
