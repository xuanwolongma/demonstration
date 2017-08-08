<template>
    <div class="project">
      <div class="headerXM">
          <div class="datas">2017-07-28</div>
          <modelselect class="titlezb"></modelselect>
      </div>
      <div class="fx">
        <div class="content" >
          <div class="tcontent" >
            <div class="c1">
              <div class="btdiv" :class="{true:'btdiv',false:'btdivnolink'}[btdiv]">
                <div class="rectangle btfont">今日销情</div>
              </div>
              <div class="cc" v-for ="xm in xmData">
                ①【今日认购】共<span v-html="xm.jrrgts"></span>套<span v-html="xm.jrrgje"></span>万，其中正式认购<span v-html="xm.jrzsrgts"></span>套<span v-html="xm.jrzsrgje"></span>万，诚意认购<span v-html="xm.jrcyrgts"></span>套<span v-html="xm.jrcyrgje"></span>万
              </div>
              <div class="table">
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%">
                  <thead>
                  <tr>
                    <td class="myth" rowspan="2">房型</td>
                    <td colspan="2">正式认购</td>
                    <td colspan="2">诚意认购</td>
                  </tr>
                  <tr>
                    <td >套数</td>
                    <td >金额（万）</td>
                    <td >套数</td>
                    <td >金额（万）</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr></tr>
                  <tr v-for="xmfxd in xmFXData">
                    <td  v-html="xmfxd.huxing"></td>
                    <td  v-html="xmfxd.jrzsrgts"></td>
                    <td  v-html="xmfxd.jrzsrgje"></td>
                    <td  v-html="xmfxd.jrcyrgts"></td>
                    <td  v-html="xmfxd.jrcyrgje"></td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr class="hj1">
                    <td >合计</td>
                    <td v-html="today.jrzsrgtsAmount"></td>
                    <td v-for="xm in xmData" v-html="xm.jrzsrgje"></td>
                    <td v-html="today.jrcyrgtsAmount"></td>
                    <td v-for="xm in xmData" v-html="xm.jrcyrgje"></td>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <div class="cc"  v-for="xm in xmData">
                ②【今日签约】共<span v-html="xm.jrqyts"></span>套<span v-html="xm.jrqyje"></span>万，其中：
              </div>
              <div class="table">
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%">
                  <thead>
                  <tr >
                    <td class="myth" rowspan="2">房型</td>
                    <td colspan="4">今日签约</td>
                  </tr>
                  <tr >
                    <td >套数</td>
                    <td >金额（万）</td>
                    <td >均价（元/平）</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr></tr>
                  <tr v-for="xmfxd in xmFXData">
                    <td v-html="xmfxd.huxing"></td>
                    <td v-html="xmfxd.jrqyts"></td>
                    <td v-html="xmfxd.jrqyje"></td>
                    <td v-html="xmfxd.jrqyjj"></td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr class="hj1">
                    <td >合计</td>
                    <td v-html="today.jrqytsAmount"></td>
                    <td v-for="xm in xmData" v-html="xm.jrqyje"></td>
                    <td v-for="xm in xmData" v-html="xm.jrqyjj"></td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="c1">
              <div class="btdiv">
                <div class="rectangle btfont">本月销情</div>
              </div>
              <div class="cc" v-for="xm in xmData">
                ①【本月认购】共<span v-html="xm.byrgts"></span>套<span v-html="xm.byrgje"></span>万，
                其中正式认购<span v-html="xm.byzsrgts"></span>套<span v-html="xm.byzsrgje"></span>万，诚意认购<span v-html="xm.bycyrgts"></span>套<span v-html="xm.bycyrgje"></span>万
              </div>
              <div class="table">
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%">
                  <thead>
                  <tr>
                    <td class="myth" rowspan="2">房型</td>
                    <td colspan="2">正式认购</td>
                    <td colspan="2">诚意认购</td>
                  </tr>
                  <tr>
                    <td >套数</td>
                    <td >金额（万）</td>
                    <td >套数</td>
                    <td >金额（万）</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr></tr>
                  <tr v-for="xmfxd in xmFXData1">
                    <td v-html="xmfxd.huxing"></td>
                    <td v-html="xmfxd.byzsrgts"></td>
                    <td v-html="xmfxd.byzsrgje"></td>
                    <td v-html="xmfxd.bycyrgts"></td>
                    <td v-html="xmfxd.bycyrgje"></td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr class="hj1">
                    <td >合计</td>
                    <td v-html="tomonth.byzsrgtsAmount"></td>
                    <td v-for="xm in xmData" v-html="xm.byzsrgje"></td>
                    <td v-html="tomonth.bycyrgtsAmount"></td>
                    <td v-for="xm in xmData" v-html="xm.bycyrgje"></td>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <div class="cc" v-for="xm in xmData">
                ②【本月签约】共<span v-html="xm.byqyts"></span>套<span v-html="xm.byqyje"></span>万，单方均价<span v-html="xm.byqyjj"></span>元/平，按<span v-html="month"></span>月份目标<span v-html="xm.bymb"></span>万，完成率<span v-html="xm.bymbwcl"></span>%，其中：
              </div>
              <div class="table">
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%">
                  <thead>
                  <tr>
                    <td class="myth" rowspan="2">房型</td>
                    <td colspan="4"><span ng-bind="month"></span>月份签约</td>
                  </tr>
                  <tr>
                    <td >套数</td>
                    <td >金额（万）</td>
                    <td >均价（元/平）</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr></tr>
                  <tr v-for="xmfxd in xmFXData1">
                    <td v-html="xmfxd.huxing"></td>
                    <td v-html="xmfxd.byqyts"></td>
                    <td v-html="xmfxd.byqyje"></td>
                    <td v-html="xmfxd.byqyjj"></td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr class="hj1">
                    <td >合计</td>
                    <td v-html="byqytsAmount"></td>
                    <td v-for="xm in xmData" v-html="xm.byqyje"></td>
                    <td v-for="xm in xmData" v-html="xm.byqyjj"></td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="c1">
              <div class="btdiv">
                <div class="rectangle btfont">累计销情</div>
              </div>
              <div class="cc" v-for="xm in xmData">
                ①【累计认购】认购<span v-html="xm.ljrgts"></span>套<span v-html="xm.ljrgje"></span>亿，认购未签<span v-html="xm.rgwqyts"></span>套<span v-html="xm.rgwqyje"></span>亿，其中：
              </div>
              <div class="table">
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%" style="margin-bottom: 0px;">
                  <thead>
                  <tr>
                    <td class="ptd" rowspan="2">房型<br><span style="font-size: 12px;">(来源售楼系统)</span></td>
                    <td colspan="2">正式认购</td>
                    <td colspan="2">诚意认购</td>
                    <td rowspan="2" class="ptd">认购<br>未签（亿）</td>
                  </tr>
                  <tr>
                    <td class="ptd">套数</td>
                    <td class="ptd">金额（亿）</td>
                    <td class="ptd">套数</td>
                    <td class="ptd">金额（亿）</td>
                  </tr>
                  </thead>
                </table>
                <div class="ptable" id="mytable1">
                  <table class="table table-condensed table-bordered table-striped" border="1" width="100%" style="margin-bottom: 0px;">
                    <tbody >
                    <tr v-for="xmfxd in xmFXData2">
                      <td v-html="xmfxd.huxing" class="ptd"></td>
                      <td v-html="xmfxd.ljzsrgts" class="ptd"></td>
                      <td v-html="xmfxd.ljzsrgje" class="ptd"></td>
                      <td v-html="xmfxd.ljcyrgts" class="ptd"></td>
                      <td v-html="xmfxd.ljcyrgje" class="ptd"></td>
                      <td v-html="xmfxd.rgwqyje" class="ptd"></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%">
                  <tfoot>
                  <tr class="hj1">
                    <td  class="ptd">合计</td>
                    <td v-html="toleiji.ljzsrgtsAmount"  class="ptd"></td>
                    <td v-html="toleiji.ljzsrgjeAmount" class="ptd"></td>
                    <td v-html="toleiji.ljcyrgtsAmount" class="ptd"></td>
                    <td v-html="toleiji.ljcyrgjeAmount" class="ptd"></td>
                    <td v-html="toleiji.ljrgwqyjeAmount" class="ptd"></td>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <div class="cc" v-for="xm in xmData">
                ②【累计签约】共<span v-html="xm.ljqyts"></span>套<span v-html="xm.ljqyje"></span>亿，单方均价<span v-html="xm.ljqyjj"></span>元/平，签约率<span v-html="xm.ljqywcl"></span>%，其中：
              </div>
              <div class="table">
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%"  style="margin-bottom: 0px;">
                  <thead>
                  <tr>
                    <td class="qtd1" rowspan="2">房型<br><span style="font-size: 12px;">(来源售楼系统)</span></td>
                    <td colspan="4"><span ng-bind="year"></span>年签约</td>
                  </tr>
                  <tr>
                    <td class="qtd2">套数</td>
                    <td class="qtd1" >金额（亿）</td>
                    <td  class="qtd3">均价（元/平）</td>
                  </tr>
                  </thead>
                </table>
                <div class="ptable" id="mytable2">
                  <table class="table table-condensed table-bordered table-striped" border="1" width="100%" style="margin-bottom: 0px;">
                    <tbody>
                    <tr></tr>
                    <tr v-for="xmfxd in xmFXData2">
                      <td  class="qtd1" v-html="xmfxd.huxing"></td>
                      <td  class="qtd2"v-html="xmfxd.ljqyts"></td>
                      <td  class="qtd1"v-html="xmfxd.ljqyje"></td>
                      <td  class="qtd3"v-html="xmfxd.ljqyjj"></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%">
                  <tfoot>
                  <tr class="hj1">
                    <td class="qtd1">合计</td>
                    <td class="qtd2"v-html="toleiji.ljqytsAmount"></td>
                    <td class="qtd1" v-for="xm in xmData" v-html="xm.ljqyje"></td>
                    <td class="qtd3" v-for="xm in xmData" v-html="xm.ljqyjj"></td>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <div class="cc" v-for="xm in xmData">
                ③【当年签约】共<span v-html="xm.bnqyts"></span>套<span v-html="xm.bnqyje"></span>亿，按首<span v-html="month"></span>月目标<span v-html="xm.bnmb"></span>亿，完成率<span v-html="xm.bnmbwcl"></span>%，其中：
              </div>
              <div class="table">
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%"  style="margin-bottom: 0px;">
                  <thead>
                  <tr>
                    <td class="qtd1" rowspan="2">房型<br><span style="font-size: 12px;">(来源售楼系统)</span></td>
                    <td colspan="4">首<span ng-bind="month"></span>月签约</td>
                  </tr>
                  <tr>
                    <td class="qtd2">套数</td>
                    <td class="qtd1">金额（亿）</td>
                    <td class="qtd3">均价（元/平）</td>
                  </tr>
                  </thead>
                </table>
                <div class="ptable" id="mytable3">
                  <table class="table table-condensed table-bordered table-striped" border="1" width="100%" style="margin-bottom: 0px;">
                    <tbody>
                    <tr v-for="xmfxd in xmFXData2">
                      <td class="qtd1" v-html="xmfxd.huxing"></td>
                      <td class="qtd2" v-html="xmfxd.bnqyts"></td>
                      <td class="qtd1" v-html="xmfxd.bnqyje"></td>
                      <td class="qtd3" v-html="xmfxd.bnqyjj"></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <table class="table table-condensed table-bordered table-striped" border="1" width="100%">
                  <tfoot>
                  <tr class="hj1">
                    <td class="qtd1">合计</td>
                    <td class="qtd2" v-html="toleiji.bnqytsAmount"></td>
                    <td class="qtd1"v-for="xm in xmData" v-html="xm.bnqyje"></td>
                    <td class="qtd3"v-for="xm in xmData" v-html="xm.bnqyjj"></td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="c1">
              <div class="table lasttable">
                <div style="text-align:left;font-size:10px;">注：已推售货值指已拿到预售证或已竣工部分货值</div>
                <div style="text-align:left;font-size:10px;">数据统计时间：{{dtts}}</div>
                <div style="height:50px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import modelselect from "../components/modelselect.vue"
    export default{
        components:{
          modelselect
        },
        data(){
            return {
              dtts:'2017-7-30',
              btdiv:true,
//                今日销情
              today:{
                jrzsrgtsAmount:3,
                jrcyrgtsAmount:0,
                jrqytsAmount:5,
              },
              tomonth:{
                byzsrgtsAmount:97,
                bycyrgtsAmount:0,
              },
              toleiji:{
                ljzsrgtsAmount:695,
                ljzsrgjeAmount:4.62,
                ljcyrgtsAmount:0,
                ljcyrgjeAmount:0.00,
                ljrgwqyjeAmount:0.34,
                ljqytsAmount:667,
                bnqytsAmount:667,
              },
              xmData:[{/*当日售情数据*/
                jrzsrgje:161.21,jrcyrgje:0.00,jrqyts:5,jrqyje:249.11,jrrgts:3,jrrgje:161.21,jrzsrgts:3,jrzsrgje:161.21,jrcyrgts:0,
                jrcyrgje:0.00,jrqyjj:4340.10,byrgts:97,/*本月售情数据*/
                byrgje:5488.29,byzsrgts:97,byzsrgje:5488.29,bycyrgts:0,bycyrgje:0.00,byzsrgje:5488.29,bycyrgje:0.00,byqyts:90,byqyje:5127.30,
                byqyjj:4771.91,month:'07',bymb:1800,bymbwcl:284.85,/*累计售情数据*/
                ljrgts:695,ljrgje:4.63, rgwqyts:28,rgwqyje:0.34,ljqyts:667,ljqyje:4.29,ljqyjj:5235.25,
                ljqywcl:92.61,bnqyje:4.29,bnqyjj:5235.25,
              }],
              xmFXData:[{huxing:'YJ118',jrzsrgts:3,jrzsrgje:161.21,jrcyrgts:0,jrcyrgje:0.00,jrqyts:5,jrqyje:249.11,jrqyjj:4340.10 }],
              xmFXData1:[
                {huxing:'YJ115',byzsrgts:9,byzsrgje:562.01,bycyrgts:0,bycyrgje:0.00,byqyts:10,byqyje:612.36,byqyjj:5409.30},
                {huxing:'YJ118',byzsrgts:73,byzsrgje:3745.71,bycyrgts:0,bycyrgje:0.00,byqyts:66,byqyje:3387.31,byqyjj:4465.86},
                {huxing:'YJ140',byzsrgts:14,byzsrgje:51044.24,bycyrgts:0,bycyrgje:0.00,byqyts:13,byqyje:971.04,byqyjj:5446.74},
                {huxing:'YJ260',byzsrgts:1,byzsrgje:136.33,bycyrgts:0,bycyrgje:0.00,byqyts:1,byqyje:156.59,byqyjj:6571.66}],
              xmFXData2:[
                {huxing:'YJ115',ljzsrgts:209,ljzsrgje:1.25,ljcyrgts:0,ljcyrgje:0.00,rgwqyje:0.01,ljqyts:207,ljqyje:1.24,ljqyjj:5194.69,bnqyts:207,bnqyje:1.24,bnqyjj:5194.69},
                {huxing:'YJ118',ljzsrgts:269,ljzsrgje:1.39,ljcyrgts:0,ljcyrgje:0.00,rgwqyje:0.04,ljqyts:262,ljqyje:1.35,ljqyjj:4501.45,bnqyts:262,bnqyje:1.35,bnqyjj:4501.45},
                {huxing:'YJ140',ljzsrgts:158,ljzsrgje:1.21,ljcyrgts:0,ljcyrgje:0.00,rgwqyje:0.01,ljqyts:156,ljqyje:1.20,ljqyjj:5654.19,bnqyts:156,bnqyje:1.20,bnqyjj:5654.19},
                {huxing:'YJ260',ljzsrgts:20,ljzsrgje:0.29,ljcyrgts:0,ljcyrgje:0.00,rgwqyje:0.01,ljqyts:19,ljqyje:0.28,ljqyjj:5720.34,bnqyts:19,bnqyje:0.28,bnqyjj:5720.34},
                {huxing:'未知房型',ljzsrgts:39,ljzsrgje:0.48,ljcyrgts:0,ljcyrgje:0.00,rgwqyje:0.34,ljqyts:23,ljqyje:0.22,ljqyjj:11343.85,bnqyts:23,bnqyje:0.22,bnqyjj:11343.85}]
            }
        },
    }
</script>

<style lang="scss">
  #app {
    background: #01304a;
  }
  .project {
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100% !important;
    color: white;
    margin-top: 45px;
    .headerXM {
      height: 45px;
      border-bottom: 1px solid #ccc;
    }
    .datas {
      width: 30%;
      float: left;
      padding-top: 13px;
      font-size: 15px;
      text-align: center;
      margin-left: 1%;
    }
    .c1 {
      padding: 0 5px;
    }
    .btdiv {
      width: 100%;
      height: 30px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .btfont {
      overflow: hidden;
      color: #FFFFFF;
      font-size: 20px;
      padding-left: 2%;
    }
    .rectangle {
      width: 50%;
      height: 30px;
      line-height: 30px;
      background-color: #009AE4;
      border-radius: 0 40px 0 0;
    }
    .cc {
      margin-bottom: 10px;
    }
    table {
      border-spacing: 0;
      border-collapse: collapse;
    }
    .table {
      font-size: 14px;
      width: 100%;
      color: #333;
      max-width: 100%;
      margin-bottom: 20px;
      text-align: center;
    }
    .table .table {
      background-color: #fff;
    }
    .table-bordered>thead>tr>td {
      background-color: #D5FFFB;
      border-bottom-width: 1px;
    }
    .hj1 td {
      background: #F9EEC1 !important;
    }
    .ptd {
      width: 17%;
      padding-left: 0;
      padding-right: 0;
    }
    .qtd1 {
      width: 25%;
      padding-left: 0;
      padding-right: 0;
    }
    .qtd3 {
      width: 35%;
      padding-left: 0;
      padding-right: 0;
    }
    .lasttable {
      color: whitesmoke;
    }
    .table tbody tr:nth-child(2n+1) {
      background-color: #f4f4f4;
    }
  }
</style>
