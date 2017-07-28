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
//import echarts from "echarts"
export default{
  components:{
    modelselect
  },
  data(){
    return {
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
      color: #666;
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
      background-image: url(../assets/common-bluebox@3x.png);
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
  }
</style>
