<!--<区域桌面-回款情况-->
<template>
    <div class="backmoney">
      <div class="maintop" style="height: 210px">
        <div class="titlezb">
          <div class="toptitlestyle">回款情况</div>
          <modelselect></modelselect>
        </div>
        <div>
          <div style="margin-top: 4px;">
            <div class="topmaincontentitem">
              <span class="topmaincontent04" style="width: 70%">当年签约(资金管控口径):</span>
              <span class="topmaincontent02" style="width: 30%">{{backMoneyDetail.dnqyzjgkvalue}}</span>
            </div>
            <div class="topmaincontentitem">
              <span class="topmaincontent04" style="width: 70%">当月签约(资金管控口径):</span>
              <span class="topmaincontent02" style="width: 30%">{{backMoneyDetail.dyqyzjgkvalue}}</span>
            </div>
            <div class="topmaincontentitem">
              <span class="topmaincontent04" style="width: 23%">当年总回款:</span>
              <span class="topmaincontent03" style="width: 28%">{{backMoneyDetail.dnzhkvalue}}</span>
              <span class="topmaincontent01"  style="width: 25%">当月回款金额:</span>
              <span class="topmaincontent02" style="width: 21%">{{backMoneyDetail.dyhkjevalue}}</span>
            </div>
            <div class="topmaincontentitem">
              <span class="topmaincontent04" style="width: 33%">当年签约当年回款:</span>
              <span class="topmaincontent03" style="width: 18%">{{backMoneyDetail.dnqydnhkvalue}}</span>
              <span class="topmaincontent01" style="width: 28%"> <!--{{backMoneyDetail.jcjename}}-->逾期欠款总额:</span>
              <span class="topmaincontent02" style="width: 18%">{{backMoneyDetail.cqqkzevalue}}</span>
            </div>
            <div class="topmaincontentitem">
              <span class="topmaincontent04" style="width: 25%">回款率:</span>
              <span class="topmaincontent03" style="width: 26%">{{backMoneyDetail.hklvalue+'%'}}</span>
              <span class="topmaincontent01" style="width: 30%"> <!--{{backMoneyDetail.jcjename}}-->上月回款率:</span>
              <span class="topmaincontent02" style="width: 16%">{{backMoneyDetail.syhklvalue+"%"}}</span>
            </div>
            <div class="topmaincontentitem">
              <span class="topmaincontent04" style="width: 30%;">回款率变动:</span>
              <span class="topmaincontent03" style="width: 21%;">{{backMoneyDetail.hklbdvalue+"%"}}</span>
              <span class="topmaincontent01" style="width: 25%;">监控资金余额:</span>
              <span class="topmaincontent02" style="width: 21%;">{{backMoneyDetail.jszjyevalue}}</span>
            </div>
            <div class="font08">
              <div style="text-indent: -0.3rem">数据来源:售楼系统,更新时间:{{dtts}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-xs-7 backmoneyT" style="width: 100%;background: #ffffff;">
        <ul id="myTab" class="nav nav-tabs">
          <li class="listyle active"  style="border-radius: 5px 5px 5px 5px;">
            <div class="navbarcss">
              <div style="width:75%;float: left;">
                <img class="logstyle" src="../assets/sale-white@2x.png"/>
                <span class="font06">超期欠款</span>
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
        dnqyzjgkvalue:'3018亿',
        dyqyzjgkvalue:'235亿',
        dnzhkvalue:'2434亿',
        dyhkjevalue:'267亿',
        dnqydnhkvalue:'2055亿',
        cqqkzevalue:'455亿',
        hklvalue:'81',
        syhklvalue:'78',
        hklbdvalue:'104',
        jszjyevalue:'556亿'
      }
    }
  },
  activated(){
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
      border-bottom: 1px solid #ccc;
    }
    .toptitlestyle {
      width: 30%;
      float: left;
      padding-top: 6px;
      font-size: 23px;
      text-align: center;
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
      font-size: 14px;
      float: left;
      color:white;
    }
    .topmaincontent02 {
      font-size: 14px;
      text-align: right;
      color: #009ae4;
      float: left;
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
      float: left;
      text-indent: 0.5em;
      color: whitesmoke;
      margin-top: 8px;
      margin-left: 10px;
    }
    .backmoneyT .listyle {
      width: 100%;
      text-align: left;
    }
    .backmoneyT .navbarcss {
      height: 40px;
      line-height: 40px;
      background-image: url(../assets/common-bluebox_b.png);
      background-repeat: no-repeat;
       background-size: 100% 100%;
      margin-top: 5px;
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
