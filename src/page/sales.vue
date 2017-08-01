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
              <div class="col-md8 col-sm-8 col-xs-8">
                <div class="arrow-left" ng-show="showLeft()" ng-click="left()">
                  <!--向左的三角-->
                </div>
                <div class="arrow-right" ng-show="showRight()"ng-click="right()">
                  <!--向右的三角-->
                </div>
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
            <div class="col-md8 col-sm-8 col-xs-8">
              <div class="arrow-left" ng-show="showLeft()" ng-click="left()">
                <!--向左的三角-->
              </div>
              <div class="arrow-right" ng-show="showRight()"ng-click="right()">
                <!--向右的三角-->
              </div>
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
              <div class="arrow-left" ng-show="showLeft()" ng-click="left()">
                <!--向左的三角-->
              </div>
              <div class="arrow-right" ng-show="showRight()"ng-click="right()">
                <!--向右的三角-->
              </div>
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
              }
            }
        },
        activated(){
        let myEchart = echarts.init(document.getElementById('main'))
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
        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
          },
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
  .sales {
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100% !important;
    color: white;
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
    .main {
      width: 100%;
      height: 200px;
    }
  }
</style>
