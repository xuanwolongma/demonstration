<template>
    <div class="sales">
      <div class="titlezb">
        <div class="toptitlestyle">销售情况</div>
        <modelselect></modelselect>
      </div>
      <template>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="2017年" name="first">
              <div style="margin-top: 5px;">
                <div class="salescontextfloat">
                  <div class="topmaincontentitem">
                    <span class="topmaincontent04">签约金额:</span>
                    <span class="topmaincontent03"><span v-html="qydataitem.par11"></span>亿</span>
                    <span class="topmaincontent01">完成率:</span>
                    <span class="topmaincontent02"><span v-html="qydataitem.par51"></span>%</span>
                  </div>
                  <div class="topmaincontentitem01">
                    <!--<span class="topmaincontent05">(项目合计)</span>-->
                  </div>
                  <div class="topmaincontentitem">
                    <span class="topmaincontent04">签约目标:</span>
                    <span class="topmaincontent03"><span v-html="qydataitem.par31"></span>亿</span>
                    <span class="topmaincontent01"><span v-if="!qjt">完成率排名:</span><span v-if="qjt">激励完成:</span></span>
                    <span class="topmaincontent02"><span v-if="!qjt" v-html="qydataitem.par52"></span><span v-if="qjt"><span v-html="qydataitem.par49"></span>%</span></span>
                  </div>
                  <div class="topmaincontentitem01">
                    <span class="topmaincontent05" style="float: left;">(首<span v-html='month'></span>月)</span>
                  </div>
                  <div class="topmaincontentitem">
                    <span class="topmaincontent04">签约套数:</span>
                    <span class="topmaincontent03"><span v-html="qydataitem.par12"></span>套</span>
                    <span class="topmaincontent01">认购未签:</span>
                    <span class="topmaincontent02"><span v-html="qydataitem.par28"></span>亿</span>
                  </div>
                  <div class="topmaincontentitem01">
                    <span class="topmaincontent05">(无预售证)</span>
                  </div>
                  <div class="topmaincontentitem">
                    <span class="topmaincontent04">认购未签:</span>
                    <span class="topmaincontent03"><span v-html="qydataitem.par26"></span>亿</span>
                    <span class="topmaincontent01">激励目标:</span>
                    <span class="topmaincontent02"><span v-html="qydataitem.par48"></span>亿</span>
                  </div>
                  <div class="topmaincontentitem01">
                    <span class="topmaincontent05" style="float: left;">(有预售证)</span>
                  </div>
                  <div class="topmaincontentitem" v-if='!qjt'>
                    <span class="topmaincontent04">激励完成:</span>
                    <span class="topmaincontent03"><span v-html="qydataitem.par49"></span>%</span>
                    <span class="topmaincontent01">激励完成排名:</span>
                    <span class="topmaincontent02"><span v-html="qydataitem.par50"></span></span>
                  </div>
                </div>
                <div class="font05">
                  <div>1.合同销售额按奖励门槛进行统计,含常规销售、非常规销售、品牌输出、代理销售、非产权车位。</div>
                  <div>2.数据来源:售楼系统,更新时间:{{dtts}}</div>
                </div>
                <div class="linegray"></div>
                <div class="navbarcss">
                  <div style="width:75%;float: left;">
                    <img class="logstyle" src="../assets/sale-white@2x.png"/>
                    <span class="font06">各<span ng-bind='xmorqu'></span>年度签约情况</span>
                  </div>
                  <div class="font07"><span>单位:<span v-html='dw1'></span>元</span></div>

                </div>
              </div>
              <div class="col-md8 col-sm-8 col-xs-8" style="position: relative">
                <div id="main" class="main"></div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="7月" name="second">
            <div style="margin-top: 10px;">
              <div class="topmaincontentitem">
                <span class="topmaincontent04">签约金额:</span>
                <span class="topmaincontent03"><span v-html="qydataitem.par9"></span><span v-html="dw1"></span></span>
                <span class="topmaincontent01">完成率:</span>
                <span class="topmaincontent02"><span v-html="qydataitem.par1"></span>%</span>
              </div>
              <div class="topmaincontentitem01">
                <!--<span class="topmaincontent05">(项目合计)</span>-->
              </div>
              <div class="topmaincontentitem">
                <span class="topmaincontent04">签约目标:</span>
                <span class="topmaincontent03"><span v-html="qydataitem.par29"></span><span v-html="dw1"></span></span>
                <span class="topmaincontent01"><span v-if="!qjt">完成率排名:</span><span v-if="qjt">正式认购:</span></span>
                <span class="topmaincontent02"><span v-if="!qjt" v-html="qydataitem.par5"></span><span v-if="qjt" v-html="qydataitem.par17"></span><span ng-bind="dw1"></span></span>
              </div>
              <div class="topmaincontentitem01">
                <span class="topmaincontent05" style="float: left;">(已摘牌合计)</span>
              </div>
              <div class="topmaincontentitem">
                <span class="topmaincontent04">签约套数:</span>
                <span class="topmaincontent03"><span v-html="qydataitem.par10"></span>套</span>
                <span class="topmaincontent01">诚意认购:</span>
                <span class="topmaincontent02"><span v-html="qydataitem.par19"></span><span v-html="dw1"></span></span>
              </div>
              <div class="topmaincontentitem01">
                <!--<span class="topmaincontent05">(项目合计)</span>-->
              </div>
              <div class="topmaincontentitem" v-if="!qjt">
                <span class="topmaincontent04">正式认购:</span>
                <span class="topmaincontent03"><span v-html="qydataitem.par17"></span><span v-html="dw1"></span></span>
              </div>
              <div class="font05">
                <div>1.合同销售额按奖励门槛进行统计,含常规销售、非常规销售、品牌输出、代理销售、非产权车位。</div>
                <div>2.数据来源:售楼系统,更新时间:{{dtts}}</div>
              </div>
              <div class="linegray"></div>
              <div class="navbarcss">
                <img class="logstyle" src="../assets/sale-white@2x.png"/>
                <span class="font06">各<span v-html='xmorqu'></span>月度签约情况</span>
                <span class="font07">单位:<span v-html='dw1'></span>元</span>
              </div>
            </div>
            <div class="col-md8 col-sm-8 col-xs-8" style="position: relative">
              <div id="mainM" class="main"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="29日" name="third">
            <div style="margin-top: 10px;">
            <div class="topmaincontentitem">
              <span class="topmaincontent04">签约套数:</span>
              <span class="topmaincontent03"><span v-html="qydataitem.par8"></span>套</span>
              <span class="topmaincontent01">签约金额:</span>
              <span class="topmaincontent02"><span v-html="qydataitem.par7"></span><span v-html="dw"></span></span>
            </div>
            <div class="topmaincontentitem01">
              <!--<span class="topmaincontent05">(正式认购)</span>-->
            </div>
            <div class="topmaincontentitem">
									<span class="topmaincontent04">
										认购套数:
									</span>
              <span class="topmaincontent03"><span v-html="qydataitem.par14"></span>套</span>
              <span class="topmaincontent01">
										认购金额:
									</span>
              <span class="topmaincontent02"><span v-html="qydataitem.par13"></span><span v-html="dw"></span></span>
            </div>
            <div class="topmaincontentitem01">
              <span class="topmaincontent05">(正式认购)</span>
              <span class="topmaincontent05">(正式认购)</span>
            </div>
            <div class="topmaincontentitem">
									<span class="topmaincontent04">
										认购套数:
                    <!--(诚意认购)-->
									</span>
              <span class="topmaincontent03"><span v-html="qydataitem.par16"></span>套</span>
              <span class="topmaincontent01">
										认购金额:
                <!--(诚意认购)-->
									</span>
              <span class="topmaincontent02"><span v-html="qydataitem.par15"></span><span v-html='dw'></span></span>
            </div>
            <div class="topmaincontentitem01">
              <span class="topmaincontent05">(诚意认购)</span>
              <span class="topmaincontent05">(诚意认购)</span>
            </div>
            <div class="font05">
              <div>1.合同销售额按奖励门槛进行统计,含常规销售、非常规销售、品牌输出、代理销售、非产权车位。</div>
              <div>2.数据来源:售楼系统,更新时间:{{dtts}}</div>
            </div>
            <div class="linegray"></div>
            <div class="navbarcss">
              <img class="logstyle" src="../assets/sale-white@2x.png"/>
              <span class="font06">各<span v-html='xmorqu'></span>昨日销售</span>
              <span class="font07">单位:<span v-html='dw1'></span>元</span>
            </div>
          </div>
            <div class="col-md8 col-sm-8 col-xs-8">
              <div id="mainD" class="main"></div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
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
              showLeft:true,
              showRight:true,
              qjt:true,
              activeName2: 'first',
              month:7,
              dtts:'2017-07-30 20:03',
              dw1:'亿',
              dw:'万',
              xmorqu:'区域',
              qydataitem:{
                par11:3356.70,par51:174,par31:1924.58,par52:12,par49:108,par12:335542,par28:108.92,par26:115.03,
                par50:6421.10,par9:337,par1:103,par29:328,par5:12,par17:402,par10:35109,par19:27,
                par8:2329,par7:221834,par14:6106,par13:479571,par16:696,par15:65144,
              },
              syhz:[4.33,0.61,3.72],
              qyhz:[7.21,2.96,4.25],
              qhl:[62.49,82.89,53.34],
              syhz1:[2.33,4.61,1.72],
              qyhz1:[1.21,7.96,4.25],
              qhl1:[67.49,42.89,76.34],
              syhz2:[6.33,5.61,2.72],
              qyhz2:[5.21,6.96,4.25],
              qhl2:[89.49,70.89,53.34],
            }
        },
      mounted(){
            this.echart('main',this.syhz,this.qyhz,this.qhl)
          this.echart('mainM',this.syhz1,this.qyhz1,this.qhl1)
          this.echart('mainD',this.syhz2,this.qyhz2,this.qhl2)
      },
        methods: {
          handleClick(tab, event) {
          },
          echart(a,b,c,d){
            let myEchart = echarts.init(document.getElementById(a))
            // 指定图表的配置项和数据
            var	option = {
              tooltip : {
                trigger: 'axis',
                formatter: function (params) {
                  var temp='';
                  for(var i = 0;i<params.length;i++){
                    if(i == params.length-1){
                      temp += params[i].seriesName+':'+params[i].data+'%<br/>';
                    }else {
                      temp += params[i].seriesName+':'+params[i].data+'亿<br/>';
                    }

                  }
                  return temp
                }
              },
              legend: {
                textStyle: {
                  color: '#000',
                },

                data:['剩余货值','签约货值','去化率']
              },
              grid: {
                top:'20%',
                left: '3%',
                right: '5%',
                bottom: '30%',
              },
              xAxis : [
                {
                  type : 'category',
                  splitLine:{
                    show: true,
                    lineStyle:{
                      color:'white'
                    }
                  },
                  axisLabel:{
                    interval:0,
                    textStyle:{
                      color:'white'
                    }
                  },
                  data : ['整体货值','上年积存\n积存目标:100亿元','本年新货\n新货目标：70%']
                }
              ],
              yAxis : [
                {
                  type : 'value',
                  axisTick: {
                    show: false,
                  },
                  axisLabel: {
                    show: false
                  },
                  axisLine: {
                    show: false
                  },
                  splitLine:{
                    show: false,
                  },
                },
                {
                  type : 'value',

                  axisLabel : {
                    show: false,
                  },
                  axisTick: {
                    show: false,
                  },

                  axisLine: {
                    show: false
                  },
                  splitLine:{
                    show: false,
                  },
                }
              ],
              series : [

                {
                  name:'剩余货值',
                  type:'bar',
                  itemStyle: {
                    normal: {
                      color: '#6AC3EF',
                    },
                  },
                  barWidth: 50,
                  stack: '广告',
                  data:b
                },
                {
                  name:'签约货值',
                  type:'bar',
                  itemStyle: {
                    normal: {
                      color: '#FE5A35',
                    },
                  },

                  barWidth: 50,
                  stack: '广告',
                  data:c
                },
                {
                  name:'去化率',
                  type:'line',
                  yAxisIndex: 1,
                  itemStyle: {
                    normal: {
                      color: '#31B377'
                    },
                  },
                  label:{
                    normal:{
                      show: true,
                      formatter: '{c}%'
                    },
                  },
                  barWidth: 50,
                  symbolSize: 2|10,
                  data:d
                }
              ]
            };
            myEchart.setOption(option)
          }
        }
    }
</script>

<style lang="scss">
  #app {
    background: #01304a;
  }
  .sales {
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100% !important;
    color: white;
    margin-top: 45px;
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
    .el-tabs__header {
      border-bottom: none;
      margin-top: 10px;
    }
    .el-tabs__nav-wrap {
      border-bottom: 0;
      margin-left: 1%;
      margin-right: 1%;
      .el-tabs__nav {
        width: 100%;
      }
      .el-tabs__item {
        width: 33.3%;
        border: 1px solid #009ae4;
        text-align: center;
        color: white;
      }
      .el-tabs__item.is-active {
        border: 1px solid #009ae4;
        border-bottom-color: #009ae4;
        border-radius: 4px 4px 0 0;
        background-color: #009ae4;
        color: #333;
      }
    }
    .salescontextfloat {
      overflow-y: scroll;
      height: 140px;
    }
    .topmaincontentitem {
      width: 96%;
      height: 19px;
      margin-left: 2%;
      margin-right: 2%;
      line-height: 19px;
    }
    .topmaincontent04 {
      width: 21%;
      font-size: 16px;
      float: left;
      color: white;
    }
    .topmaincontent03 {
      width: 26%;
      font-size: 16px;
      float: left;
      text-align: right;
      color: #009ae4;
    }
    .topmaincontent01 {
      width: 24%;
      font-size: 16px;
      float: left;
      color: white;
      margin-left: 3%;
    }
    .topmaincontent02 {
      width: 24%;
      font-size: 16px;
      text-align: right;
      color: #009ae4;
      float: left;
    }
    .topmaincontentitem01 {
      width: 96%;
      height: 15px;
      margin-left: 2%;
      margin-right: 2%;
      line-height: 15px;
    }
    .topmaincontent05 {
      width: 25%;
      font-size: 12px;
      float: right;
      color: white;
      margin-right: 24%;
    }
    .font05 {
      font-size: 14px;
      float: left;
      text-indent: 1.2em;
      color: whitesmoke;
      margin-top: 8px;
    }
    .linegray {
      background-image: url(../assets/grayline.png);
      background-repeat: repeat;
      width: 100%;
      height: 10px;
      margin-top: 68px;
    }
    .navbarcss {
      height: 40px;
      line-height: 40px;
      background-image: url(../assets/common-bluebox@3x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-top: 5px;
    }
    .logstyle {
      margin-left: 5%;
      margin-top: -3px;
      height: 20px;
    }
    .font07 {
       width: 25%;
       float: right;
       font-size: 16px;
       color: #666;
     }
    img {
      vertical-align: middle;
    }
    .arrow-left {
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid #009ae4;
      position: absolute;
      top: 108px;
      left: 2%;
    }
    .arrow-right {
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid #009ae4;
      position: absolute;
      top: 108px;
      right: 2%;
    }
    .main {
      width: 330px;
      height: 200px;
      margin-left: 20px;
    }
  }
</style>
