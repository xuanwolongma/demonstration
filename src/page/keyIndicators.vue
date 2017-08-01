<template>
    <div class="keyIndicators">
      <div class="titlezb">
        <div class="toptitlestyle">关键指标</div>
        <modelselect></modelselect>
      </div>
      <div class="bgcolor">
        <!-- 合同销售额 -->
        <div class="kptop"></div>
        <div class='kpbg02'>
          <div class="kpztdiv01">
            <div class="kpztdiv02"><span class="font01">合同销售额</span></div>
            <div class="kpztdiv03">
              <span class="font02" v-html="htxse"></span>
              <span class="font03">万元</span>
            </div>
            <div style="width:10%;float:left;height:45px;">
              <img alt="" src="../assets/in_01.png" class="a01">
            </div>
          </div>
          <div class="line"></div>
          <div class="kpztdiv04">
            <div class="kpztdiv07"><span class="font04" v-html="bnmb"></span></div>
            <div class="kpztdiv08"><span class="font04" v-html="ewyj"></span></div>
            <div class="kpztdiv07"><span class="font04" v-html="wcl"></span><span class="font04">%</span></div>
            <div class="kpztdiv07"><span class="font05">本年目标</span></div>
            <div class="kpztdiv08"><span class="font05">其他业绩</span></div>
            <div class="kpztdiv07"><span class="font05">完成率</span></div>
          </div>
        </div>
        <!-- 回款金额 -->
        <div class="kptop"></div>
        <div class='kpbg02'>
          <div class="kpztdiv01">
            <div class="kpztdiv02"><span class="font01">回款金额</span></div>
            <div class="kpztdiv03">
              <span class="font02" v-html="hkje"></span>
              <span class="font03">万元</span>
            </div>
            <div style="width:10%;float:left;height:45px;">
              <img alt="" src="../assets/in_01.png" class="a01">
            </div>
          </div>
          <div class="line"></div>
          <div class="kpztdiv04">
            <div class="kpztdiv05"><span class="font04" v-html="cqqk"></span></div>
            <div class="kpztdiv05"><span class="font04" v-html="wcqqk"></span></div>
            <div class="kpztdiv06"><span class="font05">超期欠款</span></div>
            <div class="kpztdiv06"><span class="font05">未超期欠款</span></div>
          </div>
        </div>
        <!-- 当前存货 -->
        <div class="kptop"></div>
        <div class='kpbg02'>
          <div class="kpztdiv01">
            <div class="kpztdiv02"><span class="font01">当前存货</span></div>
            <div class="kpztdiv03">
              <span class="font02" v-html="dqch"></span>
              <span class="font03">万元</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="kpztdiv04">
            <div class="kpztdiv07"><span class="font04" v-html="yts"></span></div>
            <div class="kpztdiv08"><span class="font04" v-html="ljqyje"></span></div>
            <div class="kpztdiv07"><span class="font04" v-html="qhl"></span><span class="font04">%</span></div>
            <div class="kpztdiv07"><span class="font05">累计已推售</span></div>
            <div class="kpztdiv08"><span class="font05">累计签约</span></div>
            <div class="kpztdiv07"><span class="font05">去化率</span></div>
          </div>
        </div>
        <!-- 经营性净现金流 -->
        <div class="kptop"></div>
        <div class='kpbg02'>
          <div class="kpztdiv01">
            <div>
              <div class="kpztdiv02"><span class="font01">经营性净现金流</span></div>
              <div class="kpztdiv03">
                <span class="font02" v-html="jyxjxjl"></span>
                <span class="font03">万元</span>
              </div>
              <div style="width:10%;float:left;height:45px;">
                <img alt="" src="../assets/in_01.png" class="a01">
              </div>
            </div>
            <div style="padding-left:10%;"><span>(<span v-html="jh_month"></span>月，不含土地款)</span></div>
          </div>
          <div class="line"></div>
          <div class="kpztdiv04">
            <div class="kpztdiv05"><span class="font04" v-html="yjh"></span></div>
            <div class="kpztdiv05"><span class="font04" v-html="pcl"></span><span class="font04">%</span></div>
            <div class="kpztdiv06"><span class="font05"><span ng-bind="jh_month"></span>月计划</span></div>
            <div class="kpztdiv06"><span class="font05">偏差率</span></div>
          </div>
        </div>
        <!-- 监控资金余额 -->
        <div class="kptop"></div>
        <div class='kpbg02'>
          <div class="kpztdiv01" >
            <div class="kpztdiv02"><span class="font01">监控资金余额</span></div>
            <div class="kpztdiv03">
              <span class="font02" v-html="jkzjye"></span>
              <span class="font03">万元</span>
            </div>
            <div style="width:10%;float:left;height:45px;">
              <img alt="" src="../assets/in_01.png" class="a01">
            </div>
          </div>
          <div class="line"></div>
          <div class="kpztdiv04">
            <div class="kpztdiv07" style="margin-top:4px;width:24%;"><span class="font04" v-html="xsjk_yh"></span></div>
            <div class="kpztdiv07" style="margin-top:4px;width:23%;"><span class="font04" v-html="xsjk_zf"></span></div>
            <div class="kpztdiv07" style="margin-top:4px;width:23%;"><span class="font04" v-html="zybz"></span></div>
            <div class="kpztdiv07" style="margin-top:4px;width:30%;"><span class="font04" v-html="syzj"></span></div>
            <div class="kpztdiv07" style="margin-top:0px;width:24%;"><span class="font05">销售监控</span></div>
            <div class="kpztdiv07" style="margin-top:0px;width:23%;"><span class="font05">销售监控</span></div>
            <div class="kpztdiv07" style="margin-top:0px;width:23%;"><span class="font05">质押保证</span></div>
            <div class="kpztdiv07" style="margin-top:0px;width:30%;"><span class="font05">其他不可动用</span></div>
            <div class="kpztdiv07" style="margin-top:0px;width:24%;font-size:12px;color:#808080;">(银行)</div>
            <div class="kpztdiv07" style="margin-top:0px;width:23%;font-size:12px;color:#808080;">(政府)</div>
            <div class="kpztdiv07" style="margin-top:0px;width:23%;"></div>
            <div class="kpztdiv07" style="margin-top:0px;width:23%;"></div>
          </div>
        </div>
        <!-- 营销费用 -->
        <div class="kptop"></div>
        <div class='kpbg02'>
          <div class="kpztdiv01">
            <div class="kpztdiv02"><span class="font01">营销费用</span></div>
            <div class="kpztdiv03">
              <span class="font02" v-html="yxfy"></span>
              <span class="font03">万元</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="kpztdiv04">
            <div class="kpztdiv05" style="text-align:left;">
              <div style="float: left;width: 50%;text-align: right;">
                <span class="font05">年度已批</span>
              </div>
              <span class="font04" style="margin-left:10px;" v-html="ndypfy"></span>
            </div>
            <div class="kpztdiv05" style="text-align:left;">
              <div style="float: left;width: 50%;text-align: right;">
                <span class="font05">实际费率</span>
              </div>
              <span class="font04" style="margin-left:10px;" v-html="sjfl"></span>
              <span class="font04">%</span>
            </div>
            <div class="kpztdiv06" style="text-align:left;">
              <div style="float: left;width: 50%;text-align: right;">
                <span class="font05">剩余费用</span>
              </div>
              <span class="font04" style="margin-left:10px;" v-html="syfy"></span>
            </div>
            <div class="kpztdiv06" style="text-align:left;">
              <div style="float: left;width: 50%;text-align: right;">
                <span class="font05">已批费率</span>
              </div>
              <span class="font04" style="margin-left:10px;" v-html="ypfl"></span>
              <span class="font04">%</span>
            </div>
          </div>
        </div>
        <div class="kptop lastkptop"></div>
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
//         汇总数据
          htxse:34610,
          bnmb:28082,
          ewyj:6376,
          wcl:45.65,
//          回款金额
          hkje:25488,
          cqqk:14230,
          wcqqk:1912,
//          当前存货
          dqch:2326,
          yts:124565,
          ljqyje:122240,
          qhl:98.13,
//          经营性净现金流
          jyxjxjl:2024,
          jh_month:7,
          yjh:-74,
          pcl:-2724.10,
//          监控资金余额
          jkzjye:3878,
          xsjk_yh:0,
          xsjk_zf:3491,
          zybz:388,
          syzj:0,
//          营销费用
          yxfy:694,
          ndypfy:663,
          sjfl:2.00,
          syfy:-31,
          ypfl:2.00
        }
      },
  }
</script>

<style scoped lang="scss">
  #app {
    background: #01304a;
  }
  .keyIndicators {
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
    .kptop{
      width:100%;
      height:10px;
      background-color: #F2F2F2;
    }
    .kpbg02{
      width:96%;
      height:130px;
      margin-left:2%;
      margin-right:2%;
      background-color:#023c64;
    }
    .kpztdiv01{
      width:100%;
      height:64px;
    }
    .kpztdiv02{
      width:60%;
      float:left;
      padding-top:18px;
      padding-left:10%;
    }
    .kpztdiv03{
      width:30%;
      float:left;
      padding-top:18px;
    }
    .kpztdiv04{
      width:100%;
    }
    .kpztdiv05{
      width:50%;
      float:left;
      margin-top:10px;
      text-align: center;
    }
    .kpztdiv06{
      width:50%;
      float:left;
      margin-top:3px;
      text-align: center;
    }
    .kpztdiv07{
      width:33%;
      float:left;
      margin-top:7px;
      text-align: center;
    }
    .kpztdiv08{
      width:34%;
      float:left;
      margin-top:7px;
      text-align: center;
    }
    .kpztdiv09{
      width:45%;
      float:left;
      padding-top:18px;
      padding-left:10%;
    }
    .kpztdiv10{
      width:30%;
      float:left;
      padding-top:20px;
    }
    .kpztdiv11{
      width:25%;
      float:left;
      padding-top:20px;
      padding-left:3%;
    }
    .kpztdiv12{
      width:30%;
      float:left;
      margin-top:7px;
      padding-left:10%;
    }
    .kpztdiv13{
      width:15%;
      float:left;
      margin-top:7px;
      text-align: left;
    }
    .kpztdiv14{
      width:10%;
      float:left;
      margin-top:7px;
      text-align: left;
    }
    .font01{
      font-size:18px;
      font-weight:bold;
    }
    .font02{
      font-size:18px;
      color:#FF9A11;
    }
    .font03{
      font-size:14px;
      color:#FF9A11;
      margin-left:3px;
    }
    .font04{
      font-size:16px;
      color:#15ADEF;
    }
    .font05{
      font-size:16px;
      color:whitesmoke;
    }
    .line{
      width:90%;
      height:2px;
      background-color:#F2F2F2;
      margin-left:5%;
    }
    .a01{
      float:right;
      height:18px;
      width:18px;
      margin-top:10px;
      margin-right:10px;
    }
    .lastkptop {
      height: 0;
      margin-bottom: 60px;
    }
  }
</style>
