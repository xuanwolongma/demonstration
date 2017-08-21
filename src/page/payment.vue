<template>
  <div class="receivable">
    <div class="maintop">
      <div class="titlezb1">
        <div class="toptitlestyle01">回款情况</div>
      </div>
      <div>
        <div class="navbarcss01">
          <img height="20" style="margin-left: 5%;margin-top:-8px;" src="../assets/money-paper-white@2x.png"/>
          <span class="font01">当年签约当年回款</span>
        </div>

        <div style="margin-top: 4px;">
          <div class="topmaincontentitem">
            <span class="topmaincontent04" style="width: 70%">当年签约(资金管控口径):</span>
            <span class="topmaincontent02" style="width: 30%">{{dnjyzjgkkj1+'万'}}</span>
          </div>

          <div class="topmaincontentitem">
            <span class="topmaincontent04" style="width: 70%">当月签约(资金管控口径):</span>
            <span class="topmaincontent02" style="width: 30%">{{dyjyzjgkkj1+'万'}}</span>
          </div>
          <div class="topmaincontentitem">
            <span class="topmaincontent04" style="width: 23%">当年总回款:</span>
            <span class="topmaincontent03" style="width: 28%">{{dnzhk1+'万'}}</span>
            <span class="topmaincontent01"  style="width: 25%">当月回款金额:</span>
            <span class="topmaincontent02" style="width: 21%">{{dyhkje1+'万'}}</span>
          </div>
          <div class="topmaincontentitem">
            <span class="topmaincontent04" style="width: 33%">当年签约当年回款:</span>
            <span class="topmaincontent03" style="width: 18%">{{dnqydnhk1+'万'}}</span>
            <span class="topmaincontent01" style="width: 28%">逾期欠款总额:</span>
            <span class="topmaincontent02" style="width: 18%">{{yqqkze1+'万'}}</span>
          </div>
          <div class="topmaincontentitem">
            <span class="topmaincontent04" style="width: 25%">回款率:</span>
            <span class="topmaincontent03" style="width: 26%">{{hkl1+'%'}}</span>
            <span class="topmaincontent01" style="width: 30%">上月回款率： </span>
            <span class="topmaincontent02" style="width: 16%">{{syhkl1+'%'}}</span>
          </div>
          <div class="topmaincontentitem">
            <span class="topmaincontent04" style="width: 30%;">回款率变动:</span>
            <span class="topmaincontent03" style="width: 21%;">{{hklbd1+'%'}}</span>
            <span class="topmaincontent01" style="width: 25%; display: none">监控资金余额:</span>
            <span class="topmaincontent02" style="width: 21%;"></span>
          </div>
          <div class="font08">
            <div style="text-indent: -0.3rem">数据来源:售楼系统,更新时间:{{dtts}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--回款柱状图显示区域-->
    <div class="col-md-7 col-xs-7 backmoney1" style="width: 100%;background: #ffffff;">
      <ul id="myTab" class="nav nav-tabs">
        <li class="listyle active" style="border-radius: 5px 5px 5px 5px;">
          <div class="navbarcss01">
            <img height="20" style="margin-left: 5%;margin-top:-8px;" src="../assets/money-paper-white@2x.png"/>
            <span class="font01">超期欠款</span>
          </div>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content col-md-12 col-xs-12" style="padding:0;">
        <div class="tab-pane fade in active" id="mxtz">
          <div class="echarts1_RECE" id="main1">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import modelselect from "../components/modelselect.vue"
  import echarts from "echarts"

  export default{
    components:{
      modelselect
    },
    data(){
      return {
        dtts:'2017-07-29',
        dnjyzjgkkj1:94890,
        dyjyzjgkkj1:1996,
        dnzhk1:96533,
        dyhkje1:4988,
        dnqydnhk1:74315,
        yqqkze1:3385,
        hkl1:102,
        syhkl1:99,
        hklbd1:103,
        dnxzqk:2346
      }
    },
    mounted(){
      let myEchart = echarts.init(document.getElementById('main1'))
      // 指定图表的配置项和数据
      var option1 = {
        title : {
          text: this.dnxzqk+'万元',//需替换数据
          textStyle:{
            color:'red'
          }
        },
        tooltip : {
          trigger: 'item'
        },
        xAxis : [
          {
            type : 'category',
            data : ["欠款3个月内","欠款3个月-6个月","欠款6个月-9个月","欠款9个月-12个月"],//需替换
            axisLabel:{
              interval: 0,
              textStyle : {
                fontSize : '16',
                color    : '#666'
              },
              rotate:0
            },
            axisLine :{
              lineStyle:{
                color:'white'
              }
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            show : false
          }
        ],
        grid:{
          x:10,
          y:50,
          x2:10,
          y2:70
        },
        series : [
          {
            name:'',
            type:'bar',
            data:[1995,285,272,834],//需替换
            itemStyle:{
              normal:{
                color:'#60cafc',
                label : {show: true, position: 'top', textStyle: {
                  fontSize: 15
                }}
              }
            }
          }

        ],
        backgroundColor:['#01304a']
      };
      option1 = this.newline(option1,5,"xAxis");
      myEchart.setOption(option1)
    },
    methods:{
      newline : function (option, number, axis){
        option[axis][0]['axisLabel']={
          interval: 0,
          textStyle : {
            fontSize : '15',
            color    : '#666'
          },
          formatter: function(params){
            var newParamsName = "";
            var paramsNameNumber = params.length;
            var provideNumber = number;
            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
            if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                var start = p * provideNumber;
                var end = start + provideNumber;
                if (p == rowNumber - 1) {
                  tempStr = params.substring(start, paramsNameNumber);
                } else {
                  tempStr = params.substring(start, end) + "\n";
                }
                newParamsName += tempStr;
              }
            } else {
              newParamsName = params;
            }
            return newParamsName;
          }
        };
        return option;
      }
    }
  }
</script>

<style lang="scss">
  #app {

    background: #01304a;
  }
  .receivable {
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100% !important;
    margin-top: 45px;
    color: white;
    .maintop {
      margin-bottom: 10px;
    }
    .titlezb1 {
      height: 45px;
      background-color: #28465E;
      border-bottom: 1px solid #ccc;
    }
    .toptitlestyle01 {
      float: left;
      padding-left: 5%;
      padding-top: 11px;
      font-size: 18px;
      margin-left: 1%;
    }
    .navbarcss01 {
      height: 40px;
      line-height: 40px;
      background-image: url(../assets/common-bluebox@4x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    img {
      vertical-align: middle;
    }
    .font01 {
      font-size: 18px;
      color: white;
      margin-left: 1%;
    }
    .topmaincontentitem {
      width: 96%;
      height: 22px;
      margin-left: 2%;
      margin-right: 2%;
      line-height: 18px;
    }
    .topmaincontent04 {
      width: 23%;
      font-size: 14px;
      float: left;
      color: white;
    }
    .topmaincontent02 {
      width: 25%;
      font-size: 14px;
      text-align: right;
      color: #009ae4;
      float: left;
    }
    .topmaincontent03 {
      width: 22%;
      font-size: 14px;
      float: left;
      text-align: right;
      color: #009ae4;
    }
    .topmaincontent01 {
      width: 25%;
      font-size: 14px;
      float: left;
      margin-left: 3%;
      color: white;
    }
    .font08 {
      font-size: 12px;
      float: left;
      text-indent: 0.5em;
      color: whitesmoke;
      margin-top: 8px;
      margin-left: 10px;
    }
    #myTabContent {
      background: #01304a;
    }
    .backmoney1 {
      margin-top: 35px;
    }
    .backmoney1 .tab-pane {
      padding: 0 15px;
    }
    .echarts1_RECE {
      width: 340px;
      height: 185px;
    }
  }
</style>

