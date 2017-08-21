<!--区域桌面-关键指标-->
<template>
    <div class="annualindicator">
      <div class="maintop">
        <div class="titlezb">
          <div class="toptitlestyle">关键指标</div>
          <img src="../assets/jiantou.png" alt="">
        </div>
        <div class="line03"></div>
        <div class="titledetail">
          <span class="font01" >合同销售额</span>
          <span class="font02" v-html="summary.zbzA"></span>
          <span class="font03">亿</span>
        </div>
        <div class="maintopfc clearfix" v-if="qjt">
          <div class="maintopf">
            <img src="../assets/jinqian.png" alt="">
            <span style="color:#E7E7E6;">保底目标</span>
            <div style="color: #E7E7E6;"><span v-html="summary.bdmbje"></span>亿</div>
          </div>
          <div class="maintopf">
            <img src="../assets/jinqian.png" alt="">
            <span style="color: #E7E7E6;">其他业绩</span>
            <div style="color: #E7E7E6;"><span v-html="summary.qtyj"></span>亿</div>
          </div>
          <div class="maintopf">
            <img src="../assets/wcjd.png" alt="">
            <span style="color: #E7E7E6;">完成率</span>
            <div style="color: #E7E7E6;" ><span v-html="summary.wclA"></span>%</div>
          </div>
          <div class="maintopf">
            <img src="../assets/wcjd.png" alt="">
            <span style="color: #E7E7E6">完成率排名</span>
            <div style="color: #ff9600;" v-html="summary.wclpmA"></div>
          </div>
        </div>
      </div>
      <!--中间主体部分-->
      <div  v-if="qjt" class="clearfix">
        <!--回款金额模块-->
        <div class="maincontentpart01">
          <div class="mainfootertitle">
            <div class="divstyle01" v-html="region.gjzbidD"></div>
            <div class="divstyle02"><span v-html="region.zbzD"></span>亿</div>
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
          </div>
        </div>
        <!--土地投资数量模块-->
        <div class="maincontentpart03 myspan" style="font-size:12px !important;">
          <div class="mainfootertitle">
            <div class="divstyle03" v-html="region.gjzbidE"></div>
            <div class="divstyle04" v-show="region.zbzE!=''">
              <span v-html="region.zbzE"></span>个
            </div>
          </div>
          <div class="line02" v-show="region.zbzE!=''"></div>
          <div style="width:85%;height:1px;margin-left: 5%;margin-right: 10%;margin-bottom: 5px;" v-show="region.zbzE==''"></div>
          <div class="mainfootercontent">
            <div class="divht01">
              <div style="color: white;float:left" v-show="region.clearincomeE!=''">本年累计投资</div>
              <div class="ng-binding" style="float: right;color: #ff9600" v-show="region.clearincomeE!=''">{{region.clearincomeE+"亿"}}</div>
            </div>
          </div>
        </div>
        <!--确认收入模块-->
        <div class="maincontentpart02">
          <div class="mainfootertitle">
            <div class="divstyle01" v-html="region.gjzbidB"></div>
            <div class="divstyle02" ><span v-html="region.zbzB"></span>亿</div>
          </div>
          <div class="line02"></div>
          <div class="mainfootercontent">
            <div class="divht">
              <div style="float: left;">年度目标</div>
              <div class="spanmarginright" v-show="region.ndmbB/1!=0"><span v-html="region.ndmbB"></span>亿</div>
              <div class="spanmarginright" v-show="region.ndmbB/1==0">—</div>
            </div>
            <div class="divht">
              <div style="float: left;">完成率</div>
              <div class="spanmarginright" v-show="region.ndmbB/1!=0"><span v-html="region.wclB"></span>%</div>
              <div class="spanmarginright" v-show="region.ndmbB/1==0">—</div>
            </div>
            <div class="divht">
              <div style="float: left;">完成率排名</div>
              <div class="spanmarginright" v-show="region.ndmbB/1!=0"><span v-html="region.wclpmB"></span></div>
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
      <div class="font04" >
        <div>1. 合同销售额按奖励基数统计，含常规销售、非常规销售、品牌输出、非产权车位。完成率按奖励门槛线统计,含合同销售额及其他业绩（代理业绩及额外业绩）</div>
        <div>2.土地投资数量截止到（<span ng-bind="key9"></span>）前，区域上报集团的土地获取数量，不含品牌输出项目。</div>
        <div>3.更新时间:{{date}}</div>
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
    color:#FFFFFF;
    margin-top: 45px;
    .titlezb  {
      height: 45px;
      background-color: #28465E;
      img {
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
    .line03 {
      width: 100%;
      height: 1px;
      background-color: #ccc;
    }
    .titledetail {
      height: 45px;
      padding-left: 5%;
      line-height: 45px;
    }
    .font01 {
      font-size: 18px;
    }
    .font02 {
      margin-left: 10px;
      font-size: 22px;
      color: #ff9600;
    }
    .font03 {
      margin-left: 5px;
      font-size: 14px;
    }
    .line01 {
      width: 100%;
      height: 1px;
      background-color: #ccc;
    }
    .maintopfc {
      width: 100%;
      margin-top: 5px;
      font-size: 15px;
    }
    .maintopf {
      float: left;
      width: 50%;
      padding: 8px 0 15px 5%;
      vertical-align:middle;
      border-top: 2px solid #11334E;
      img {
        margin-right: 5px;
        width: 18px;
        height: 18px;
      }
    }
    .maintopf div {
      margin-top: 5px;
      padding-left: 23px;
      font-size: 14px;
    }
    .maintopf div span {
      color: #ff9600;
      font-size: 16px;
      margin-right: 8px;
    }
    .maincontentpart01 {
      float: left;
      width: 48%;
      height: 123px;
      background: #1C3B57;
    }
    .maincontentpart03 {
      float: right;
      width: 48%;
      height: 123px;
      background: #1C3B57;
    }
    .maincontentpart02 {
      float: left;
      width: 48%;
      height: 123px;
      background: #1C3B57;
      margin-top: 3%;
    }
    .maincontentpart04 {
      float: right;
      width: 48%;
      height: 123px;
      background: #1C3B57;
      margin-top: 3%;
    }
    .mainfootertitle {
      font-size: 18px;
      height: 38px;
      line-height: 38px;
      padding-left: 8%;
      background-color: #2F72A9;
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
      height: 28px;
      line-height: 28px;
      color: #EDEFF1;
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
    .divstyle01 {
      color: white;
      float: left;
      width: 50%;
      font-size: 16px;
    }
    .divstyle03 {
      color: white;
      float: left;
      width: 67%;
      font-size: 16px;
    }
    .divstyle04 {
      padding-right: 5px;
      float: right;
      text-align: center;
      font-size: 16px;
      span {
        padding-right: 8px;
        color: #ff9600;
      }
    }
    .divstyle02 {
      padding-right: 5px;
      float: right;
      text-align: center;
      font-size: 16px;
      span {
        padding-right: 8px;
        color: #ff9600;
      }
    }
    .spanmarginright {
      color: #ff9600;
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
      margin-top: 10px;
      text-indent: 1em;
      color: #6F98B8;
      padding: 8px 0 8px 10px;
      font-size: 12px;
      line-height: 15px;
      background-color: #1A3E58;
    }
  }

</style>
