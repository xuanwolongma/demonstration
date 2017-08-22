<!--<区域桌面-回款情况-->
<template>
  <div class="backmoney">
    <div class="maintop">
      <div class="titlezb">
        <div class="toptitlestyle">回款情况</div>
        <img src="../assets/jiantou.png" alt="">
      </div>
      <div>
        <div style="margin:4px 0 0" class="clearfix">
          <div class="topmaincontentitem">
            <img src="../assets/jinqian.png" alt="">
            <span class="topmaincontent04">当年签约</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.dnqyzjgkvalue"></span>亿</div>
          </div>
          <div class="topmaincontentitem">
            <img src="../assets/jinqian.png" alt="">
            <span class="topmaincontent04">当月签约</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.dyqyzjgkvalue"></span>亿</div>
          </div>
          <div class="topmaincontentitem">
            <img src="../assets/jinqian.png" alt="">
            <span class="topmaincontent04">当年总回款</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.dnzhkvalue"></span>亿</div>
          </div>
          <div class="topmaincontentitem">
            <img src="../assets/jinqian.png" alt="">
            <span class="topmaincontent04">当月回款金额</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.dyhkjevalue"></span>亿</div>
          </div>
          <div class="topmaincontentitem">
            <img src="../assets/jinqian.png" alt="">
            <span class="topmaincontent04">当年签约当年回款:</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.dnqydnhkvalue"></span>亿</div>
          </div>
          <div class="topmaincontentitem">
            <img src="../assets/jinqian.png" alt="">
            <span class="topmaincontent04">逾期欠款总额:</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.cqqkzevalue"></span>亿</div>
          </div>
          <div class="topmaincontentitem">
            <img src="../assets/wcjd.png" alt="">
            <span class="topmaincontent04">回款率:</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.hklvalue"></span>%</div>
          </div>
          <div class="topmaincontentitem">
            <img src="../assets/wcjd.png" alt="">
            <span class="topmaincontent04">上月回款率:</span>
            <div class="topmaincontent02"><span v-html="backMoneyDetail.syhklvalue"></span>%</div>
          </div>
      </div>
        <div class="font08">
          <div style="text-indent: -0.3rem">数据来源:售楼系统,更新时间:{{dtts}}</div>
        </div>
      </div>
    </div>
    <div class="col-md-7 col-xs-7 backmoneyT" style="width: 100%;">
      <ul id="myTab" class="nav nav-tabs">
        <li class="listyle active"  style="border-radius: 5px 5px 5px 5px;">
          <div class="navbarcss">
            <div style="width:100%;float: left;">
              <span class="font06">超期欠款</span>
              <img class="logstyle" src="../assets/jiantou.png"/>
            </div>
          </div>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content col-md-12 col-xs-12" style="padding:0;">
        <div class="tab-pane fade  in active" id="mxtz">
          <div class="echarts1" id="main1">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import modelselect  from  "../components/modelselect.vue"
  import echarts from "echarts"
  export default{
    components:{
      modelselect
    },
    data(){
      return {
        dnxzqk:436,
        dtts:'2017-07-27 02:20',
        backMoneyDetail:{
          dnqyzjgkvalue:'5432',
          dyqyzjgkvalue:'890',
          dnzhkvalue:'3278',
          dyhkjevalue:'663',
          dnqydnhkvalue:'5881',
          cqqkzevalue:'889',
          hklvalue:'81',
          syhklvalue:'78',
          hklbdvalue:'104',
          jszjyevalue:'556'
        }
      }
    },
    mounted(){
      let myEchart = echarts.init(document.getElementById('main1'))
      // 指定图表的配置项和数据
      var option1 = {
        title : {
          text: this.dnxzqk+'万元',//需替换数据
          textStyle:{
            color:'#FF9F00'
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
                color: 'whitesmoke'
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
            data:[312,56,36,33],//需替换
            barWidth:20,
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
  .clearfix::before {
    content: '';
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }
  .backmoney {
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100% !important;
    color: white;
    margin-top: 45px;
    .maintop {
      margin-bottom: 10px;
    }
    .titlezb {
      height: 45px;
      background-color: #28465E;
      border-bottom: 1px solid #ccc;
      img {
        margin: 20px 0 0 15px;
        margin: 20px 0 0 15px;
        height: 10px;
        width: 10px;
      }
    }
    .toptitlestyle {
      float: left;
      padding-left: 5%;
      padding-top: 11px;
      font-size: 18px;
      margin-left: 1%;
    }
    .topmaincontentitem {
      width: 50%;
      float: left;
      padding-left: 5%;
      margin-top: 5px;
      border-bottom: 1px solid #28465E;
      img {
        margin-right: 5px;
        width: 18px;
        height: 18px;
      }
    }
    .topmaincontent04 {
      font-size: 14px;
      color:white;
    }
    .topmaincontent02 {
      margin:5px 0 8px 23px;
      font-size: 14px;
      span {
        margin-right: 5px;
        font-size: 17px;
        color: #FF9C00;
      }
    }
    .topmaincontent03 {
      font-size: 14px;
      float: left;
      text-align: right;
      color: #009ae4;
    }
    .topmaincontent01 {
      font-size: 14px;
      float: left;
      margin-left: 3%;
      color: white;
    }
    .font08 {
      font-size: 12px;
      text-indent: 0.5em;
      color: #7299B9;
      padding: 8px 0 8px 10px;
      background-color: #183D5A;
    }
    .backmoneyT .listyle {
      width: 100%;
      text-align: left;
    }
    .backmoneyT .navbarcss {
      height: 45px;
      line-height: 45px;
      margin-top: 5px;
      padding-left: 5%;
      background-color: #244661;
      img {
        height: 10px;
        width: 10px;
      }
    }
    .backmoneyT .logstyle {
      vertical-align:middle;
      margin-left: 5%;
      margin-top: -3px;
      height: 20px;
    }
    .backmoneyT .font06 {
      font-size: 16px;
      color: white;
      margin-left: 1%;
    }
    #myTabContent {
      background-color: #01304a;
    }
    .backmoneyT .tab-pane {
      padding: 0 15px;
    }
    .echarts1 {
      width: 340px;
      height: 195px;
    }
  }
</style>
