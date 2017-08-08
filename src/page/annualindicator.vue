<!--区域桌面-关键指标-->
<template>
    <div class="annualindicator">
      <div class="maintop">
        <div class="titlezb">
          <div class="toptitlestyle">关键指标</div>
          <modelselect></modelselect>
        </div>
        <div class="line03"></div>
        <div class="titledetail">
          <span class="font01" >合同销售额</span>
          <span class="font02" v-html="summary.zbzA"></span>
          <span class="font03">单位:亿元</span>
        </div>
        <div class="line01"></div>
        <div class="maintopfc clearfix" v-if="qjt">
          <div class="maintopf">
            <div style="color: #009ae4;" v-html="summary.bdmbje"></div>
            <span style="color:white;">保底目标</span>
          </div>
          <div class="maintopf">
            <div style="color: #009ae4;" v-html="summary.qtyj"></div>
            <span style="color: white;">其他业绩</span>
          </div>
          <div class="maintopf">
            <div style="color: #009ae4;" >{{summary.wclA}}%</div>
            <span style="color: white;">完成率</span>
          </div>
          <div class="maintopf">
            <div style="color: #009ae4;" v-html="summary.wclpmA"></div>
            <span style="color: white">完成率排名</span>
          </div>
        </div>
        <div class="maintopfc clearfix"  :class = "{'qjt':qjt}" v-if="!qjt" >
          <div class="maintopf" style="width: 33%;">
            <div style="color: #009ae4;" v-html="summary.bdmbje"></div>
            <span style="color: white;">保底目标</span>
          </div>
          <div class="maintopf" style="width: 33%;">
            <div style="color: #009ae4;" v-html="summary.qtyj" ></div>
            <span style="color: white;">其他业绩</span>
          </div>
          <div class="maintopf" style="width: 33%;">
            <div style="color: #009ae4;" >{{summary.wclA}}%</div>
            <!--<div style="color: #009ae4;" >{{wclA}}%</div>-->
            <span style="color: white;">完成率</span>
          </div>

        </div>
      </div>
      <!--中间主体部分-->
      <div  v-if="qjt" class="clearfix">
        <!--回款金额模块-->
        <div class="maincontentpart01">
          <div class="mainfootertitle">
            <div class="divstyle01" v-html="region.gjzbidD"></div>
            <div class="divstyle02" v-html="region.zbzD"></div>
          </div>
          <div class="line02"></div>
          <div class="mainfootercontent">
            <div class="divht">
              <div style="float: left;">年度目标:</div>
              <div style="width: 48%;float: right;" class="spanmargin" v-html="region.ndmbD" v-show="region.ndmbD/1!=0"></div>
              <div style="width: 48%;float: right;" class="spanmargin" v-show="region.ndmbD/1==0">—</div>
            </div>
            <div class="divht">
              <div style="float: left;">完成率</div>
              <div class="spanmargin pull-right" v-show="region.ndmbD/1!=0">{{region.mbhklD+"%"}}</div>
              <div class="spanmargin pull-right" v-show="region.ndmbD/1==0">—</div>
            </div>
            <div class="divht">
              <div style="float: left;">回款率排名</div>
              <div class="spanmargin pull-right" v-bind="region.wclpmD" v-show="region.ndmbD/1!=0"></div>
              <div class="spanmargin pull-right" v-show="region.ndmbD/1==0">—</div>
            </div>
            <div class="divht">
            </div>
          </div>
        </div>
        <!--土地投资数量模块-->
        <div class="maincontentpart03 myspan" style="font-size:12px !important;">
          <div class="mainfootertitle">
            <div class="divstyle03" v-html="region.gjzbidE"></div>
            <div class="divstyle04" v-show="region.zbzE!=''">
              {{region.zbzE+"个"}}
            </div>
          </div>
          <div class="line02" v-show="region.zbzE!=''"></div>
          <div style="width:85%;height:1px;margin-left: 5%;margin-right: 10%;margin-bottom: 5px;" v-show="region.zbzE==''"></div>
          <div class="mainfootercontent">
            <div class="divht01">
              <div style="color: white;float:left" v-show="region.clearincomeE!=''">本年累计投资</div>
              <div class="ng-binding" style="float: right;" v-show="region.clearincomeE!=''">{{region.clearincomeE+"亿"}}</div>
            </div>
          </div>
        </div>
        <!--确认收入模块-->
        <div class="maincontentpart02">
          <div class="mainfootertitle">
            <div class="divstyle01" v-html="region.gjzbidB"></div>
            <div class="divstyle02" v-html="region.zbzB"></div>
          </div>
          <div class="line02"></div>
          <div class="mainfootercontent">
            <div class="divht">
              <div style="float: left;">年度目标</div>
              <div class="spanmarginright" v-html="region.ndmbB" v-show="region.ndmbB/1!=0"></div>
              <div class="spanmarginright" v-show="region.ndmbB/1==0">—</div>
            </div>
            <div class="divht">
              <div style="float: left;">完成率</div>
              <div class="spanmarginright" v-show="region.ndmbB/1!=0">{{region.wclB+"%"}}</div>
              <div class="spanmarginright" v-show="region.ndmbB/1==0">—</div>
            </div>
            <div class="divht">
              <div style="float: left;">完成率排名</div>
              <div class="spanmarginright" v-html="region.wclpmB" v-show="region.ndmbB/1!=0"></div>
              <div class="spanmarginright" v-show="region.ndmbB/1==0">—</div>
            </div>
          </div>
        </div>
        <!--1季度净利润模块-->
        <div class="maincontentpart04">
          <div class="mainfootertitle">
            <div class="divstyle01" v-html="region.gjzbidC"></div>
            <div class="divstyle02" v-html="region.zbzC"></div>
          </div>
          <div class="line02" v-show="region.zbzC!=''"></div>
          <div class="mainfootercontent">
            <div class="divht"><div style="float: left;" v-show="region.ndmbC!=''">年度目标</div><div class="spanmarginright" v-html="region.ndmbC"></div></div>
            <div class="divht"><div style="float: left;" v-show="region.wclC!=''">离目标差额</div><div class="spanmarginright" v-html="region.wclC"></div></div>
            <div class="divht"><div style="float: left;" v-show="region.wclpmC!=''">净利排名</div><div class="spanmarginright" v-html="region.wclpmC"></div></div>
          </div>
        </div>

      </div>
      <!--中间主体部分-->
      <div  v-if="!qjt" class="clearfix">
        <!--回款金额模块-->
        <div class="maincontentpart01 hd">
          <div class="mainfootertitle">
            <div class="divstyle01" v-html="domestic.gjzbidD"></div>
          </div>
          <div class="mainfootercontent">
            <div class="divstyle02 qjth" v-html="domestic.zbzD"></div>
            <div class="divht qjtc">
              <div class="qjtf1">年度目标:</div>
              <div class="spanmargin qjtf2" v-show="domestic.ndmbD!=0" ng-bind="ndmbD"></div>
              <div class="spanmargin qjtf2" v-show="domestic.ndmbD==0">—</div>
              <div class="spanmargin qjtf3" v-show="domestic.ndmbD!=0" >{{mbhklD+"%"}}</div>
              <div class="spanmargin qjtf3" v-show="domestic.ndmbD==0">—</div>
            </div>


          </div>
        </div>
        <!--土地投资数量模块-->
        <div class="maincontentpart03 hd">
          <div class="mainfootertitle" style="margin-left: 8px;">
            <div class="divstyle03" v-html="domestic.gjzbidE" style="width: 108px;"></div>
            <div class="pull-right" style="padding-right: 3px;" ><span v-html="domestic.clearincomeE"></span><span style="font-size: 14px;">亿</span></div>
          </div>
          <div class="mainfootercontent">
            <div class="divstyle04 qjth">{{domestic.zbzE+"个"}}</div>
            <!--<div class="divht qjtc">
                          <div class="qjtfxx">上半年目标</div>
                          <div class="spanmarginright qjtf2" ng-bind="ndmbE"></div>
                          <div class="spanmarginright qjtf3" >{{wclE+"%"}}</div>
                      </div>-->
          </div>
        </div>
        <!--确认收入模块-->
        <div class="maincontentpart02 hd">
          <div class="mainfootertitle">
            <div class="divstyle01" v-html="domestic.gjzbidB"></div>

          </div>
          <div class="mainfootercontent">
            <div class="divstyle02 qjth" v-html="domestic.zbzB"></div>
            <div class="divht qjtc">
              <div class="qjtf1">年度目标</div>
              <div class="spanmarginright qjtf2" v-show="domestic.ndmbB!=0" v-html="domestic.ndmbB"></div>
              <div class="spanmarginright qjtf2" v-show="domestic.ndmbB==0">—</div>
              <div class="spanmarginright qjtf3" v-show="domestic.ndmbB!=0">{{domestic.wclB+"%"}}</div>
              <div class="spanmarginright qjtf3" v-show="domestic.ndmbB==0">—</div>
            </div>
          </div>
        </div>
        <!--1季度净利润模块-->
        <div class="maincontentpart04 hd">
          <div class="mainfootertitle">
            <div class="divstyle01" style="width:80%;" v-html="domestic.gjzbidC"></div>
          </div>
          <div class="mainfootercontent">
            <div class="divstyle02 qjth" v-html="domestic.zbzC"></div>
            <div class="divht qjtc">
              <div class="qjtf1" style="width:42%;" v-show="domestic.ndmbC!=''">年度目标</div>
              <div class="spanmarginright qjtf2" style="width:20%;" v-html="domestic.ndmbC"></div>
              <div class="spanmarginright qjtf3" style="margin-right:0px;width:38%">
                <span style="color:#666" v-html="wclCflag"></span>
                <span ng-bind="wclC"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="font04" >
        <div>1. 合同销售额按奖励基数统计，含常规销售、非常规销售、品牌输出、非产权车位。完成率按奖励门槛线统计,含合同销售额及其他业绩（代理业绩及额外业绩）。
          2.土地投资数量截止到（<span ng-bind="key9"></span>）前，区域上报集团的土地获取数量，不含品牌输出项目。
          3.更新时间:{{date}}
        </div>
      </div>
    </div>
</template>

<script>
import modelselect  from  "../components/modelselect.vue"

    export default{
      components:{
        modelselect
      },
        data(){
            return {
              qjt:true,
//              头部合计数据
              summary:{ zbzA:'216.59',
                          bdmbje:'4918',
                          qtyj:'137.57',
                          wclA:'69.37',
                          wclpmA:'1'
              },
//              区域数据
              region :{
                gjzbidD:'回款金额',
                zbzD:'159.46',
                ndmbD:0,
                mbhklD:0.02,
                wclpmD:100,
                gjzbidE:'本年累计拿地',
                zbzE:'27',
                clearincomeE:'148',
                gjzbidB:'确认收入',
                zbzB:'38.61',
                ndmbB:'66.72',
                wclB:'57.86',
                wclpmB:'7',
                gjzbidC:'',
                zbzC:'',
                ndmbC:'',
                wclC:'',
                wclpmC:''
              },
//              国内数据
              domestic:{
                gjzbidD:'回款金额',
                zbzD:'2481.58',
                ndmbD:0,
                gjzbidE:'本年累计拿地',
                clearincomeE:'2197',
                zbzE:373,
                gjzbidB:'确认收入',
                zbzB:'630.44',
                ndmbB:'1537',
                wclB:'41.02',
                gjzbidC:'',
                zbzC:'',
                ndmbC:'',
                wclCflag:''
              },
              key9:'2017年07月27日',
              date:'2017-07-27 02:20'
            }
        },
    }
</script>

<style lang="scss">
  #app {
    background: #01304a;
  }
  .annualindicator{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100% !important;
    color:white;
    margin-top: 45px;
    .maintop {
      margin-bottom: 10px;
    }
    .titlezb  {
      height: 45px;
    }
    .toptitlestyle {
      width: 30%;
      float: left;
      padding-top: 6px;
      font-size: 23px;
      text-align: center;
      margin-left: 1%;
    }
    .line03 {
      width: 100%;
      height: 1px;
      background-color: #ccc;
    }
    .titledetail {
      height: 45px;
      text-align: center;
      line-height: 45px;
    }
    .font01 {
      font-size: 25px;
    }
    .font02 {
      font-size: 30px;
      color: #ff9600;
    }
    .annualindicator .font03 {
      margin-left: 15px;
      font-size: 18px;
    }
    .line01 {
      width: 80%;
      height: 1px;
      margin-left: 10%;
      margin-right: 10%;
      background-color: #ccc;
    }
    .maintopfc {
      width: 100%;
      margin-top: 5px;
      font-size: 17px;
    }
    .maintopf {
      float: left;
      height: 44px;
      width: 24.5%;
      padding-bottom: 5px;
      text-align: center;
    }
    .maincontentpart01 {
      float: left;
      width: 48%;
      height: 123px;
      background: #023c64;
    }
    .maincontentpart03 {
      float: right;
      width: 48%;
      height: 123px;
      background: #023c64;
    }
    .maincontentpart02 {
      float: left;
      width: 48%;
      height: 123px;
      background: #023c64;
      margin-top: 3%;
    }
    .maincontentpart04 {
      float: right;
      width: 48%;
      height: 123px;
      background: #023c64;
      margin-top: 3%;
    }
    .mainfootertitle {
      font-size: 18px;
      height: 38px;
      line-height: 38px;
      margin-left: 8%;
    }
    .divstyle01 {
      color: white;
      float: left;
      width: 65%;
    }
    .mainfootercontent {
      margin-left: 10%;
      font-size: 15px;
      color: white;
      width: 80%;
    }
    .qjth {
      font-size: 30px;
      width: 100%;
      line-height: 45px;
      padding-bottom: 10px;
    }
    .qjtc {
      width: 170px;
      margin-left: -10px;
    }
    .divht {
      height: 21px;
    }
    .annualindicator .divht {
      height: 21px;
    }
    .qjtf1 {
      float: left;
      width: 42%;
      color: white;
    }
    .qjtf2 {
      float: left;
      width: 18%;
      text-align: left;
    }
    .spanmargin {
      color: #009ae4;
      text-align: right;
    }
    .annualindicator .qjtf3 {
      float: right;
      width: 28%;
      color: white;
      margin-right: 10px;
    }
    .divstyle03 {
      color: white;
      float: left;
      width: 67%;
    }
    .divstyle04 {
      color: #ff9600;
      float: right;
      text-align: center;
    }
    .divstyle02 {
      color: #ff9600;
      float: right;
      text-align: center;
    }
    .spanmarginright {
      color: #009ae4;
      width: 40%;
      float: right;
      text-align: right;
    }
    .qjtf3 {
      float: right;
      width: 33%;
      color: white;
    }
    .divht01 {
      height: 84px;
      font-size: 15px;
      color: #009ae4;
      text-align: center;
      padding-top: 20px;
    }
    .font04 {
      text-indent: 1em;
      color: white;
      margin-top: 8px;
      margin-left: 10px;
      font-size: 12px;
      line-height: 15px;
    }
  }

</style>
