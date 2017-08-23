<!--财资中心&#45;&#45;现金流状况-->
<template>
  <div class="situation" ref="situation">
    <div class="lk_income">
      <span class="income"><span @bind="title"></span>近12月趋势</span>
      <!-- <span class="lk_Company">单位：亿元</span> -->
    </div>
    <div id="lksr_pic" style="height: 200px;"></div>       <!--楼款收入折线图-->

    <div class="jycash">
      <span>经营性现金流</span>
      <span class="cl1">单位：亿元</span>
    </div>

    <table class="Atabcash Acash">
      <tr>
        <td colspan="3">项目</td>
        <td>合计</td>
        <td>月趋势图</td>
      </tr>
    </table>
    <div class="tabcashdiv">
      <table class="tabcash Acash">
        <tr>
          <td rowspan="11" class="td01">经营性收支</td>
          <td rowspan="3">经营收入</td>
          <td @click="trclick(1)"  :class="{tdcols: activeName == 1}"  class="mycc1">楼款收入</td>
          <td @click="trclick(1)"  :class="{tdcols: activeName == 1}"  class="mycc1 "><span >3983</span></td>
          <td @click="trclick(1)"  :class="{tdcols: activeName == 1}"  class="mycc1 " id="lk_pic1">	   <!--楼款收入折线图缩小版-->
          </td>
        </tr>
        <tr @click="trclick(2)" :class="{tdcols: activeName == 2}"  class=" mycc2">
          <td>其他板块主营收入</td>
          <td><span >41</span></td>
          <td id="lk_pic2"></td>
        </tr>
        <tr @click="trclick(3)" :class="{tdcols: activeName == 3}" class="mycc3">
          <td>其他收入</td>
          <td><span >102</span></td>
          <td id="lk_pic3"></td>
        </tr>
        <tr @click="trclick(4)" :class="{tdcols: activeName == 4}" class="tdcol mycc4">
          <td colspan="2">经营收入</td>
          <td><span >4126</span></td>
          <td id="lk_pic4"></td>
        </tr>
        <tr>
          <td rowspan="5">经营流出</td>
          <td @click="trclick(5)" :class="{tdcols: activeName == 5}" class="mycc5">工程材料款</td>
          <td @click="trclick(5)" :class="{tdcols: activeName == 5}" class="mycc5"><span >940</span></td>
          <td @click="trclick(5)" :class="{tdcols: activeName == 5}" class="mycc5" id="lk_pic5"></td>
        </tr>
        <tr @click="trclick(6)"   :class="{tdcols: activeName == 6}" class="tdcol mycc6">
          <td>税费支出</td>
          <td><span>291</span></td>
          <td id="lk_pic6"></td>
        </tr>
        <tr @click="trclick(7)"   :class="{tdcols: activeName == 7}" class="mycc7">
          <td>销管费</td>
          <td><span >73</span></td>
          <td id="lk_pic7"></td>
        </tr>
        <tr @click="trclick(8)"   :class="{tdcols: activeName == 8}" class="tdcol mycc8">
          <td>薪酬福利费</td>
          <td><span >191</span></td>
          <td id="lk_pic8"></td>
        </tr>
        <tr @click="trclick(9)"   :class="{tdcols: activeName == 9}" class="mycc9">
          <td>其他支出</td>
          <td><span >174</span></td>
          <td id="lk_pic9"></td>
        </tr>
        <tr @click="trclick(10)"  :class="{tdcols: activeName == 10}" class="tdcol mycc10">
          <td colspan="2">经营流出</td>
          <td><span >1638</span></td>
          <td id="lk_pic10"></td>
        </tr>
        <tr @click="trclick(11)"  :class="{tdcols: activeName == 11}" class="mycc11">
          <td colspan="2">土地款</td>
          <td><span >2566</span></td>
          <td id="lk_pic11"></td>
        </tr>
        <tr @click="trclick(12)"  :class="{tdcols: activeName == 12}" class="tdcol mycc12">
          <td colspan="3">经营性净现金流<br />(不含地款不含利息)</td>
          <td><span >5746</span></td>
          <td id="lk_pic12"></td>
        </tr>
        <tr>
          <td rowspan="5" class="td01">投融资支出和流入</td>
          <td @click="trclick(13)" :class="{tdcols: activeName == 13}" colspan="2" class="mycc13">贷款收入流出</td>
          <td @click="trclick(13)" :class="{tdcols: activeName == 13}" class="mycc13"><span >2214</span></td>
          <td @click="trclick(13)" :class="{tdcols: activeName == 13}" class="mycc13" id="lk_pic13"></td>
        </tr>
        <tr @click="trclick(14)"   :class="{tdcols: activeName == 14}" class="tdcol mycc14">
          <td colspan="2">还贷流出</td>
          <td><span >1188</span></td>
          <td id="lk_pic14"></td>
        </tr>
        <tr @click="trclick(15)"   :class="{tdcols: activeName == 15}" class="mycc15">
          <td colspan="2">利息支出</td>
          <td><span >103</span></td>
          <td id="lk_pic15"></td>
        </tr>
        <tr @click="trclick(16)"   :class="{tdcols: activeName == 16}" class="tdcol mycc16" >
          <td colspan="2">其他融资性净现金流</td>
          <td><span >-244</span></td>
          <td id="lk_pic16"></td>
        </tr>
        <tr @click="trclick(17)"   :class="{tdcols: activeName == 17}" class="mycc17">
          <td colspan="2">投资性净现金流</td>
          <td><span></span>-163</td>
          <td id="lk_pic17"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: 'situation',
    data(){
      return{
        activeName:"first",
        title: '楼款收入',
        lksrt:["2016-09", "2016-10", "2016-11", "2016-12", "2017-01", "2017-02", "2017-03", "2017-04", "2017-05", "2017-06", "2017-07", "2017-08"],
        lksrd:["341", "368", "292", "381", "278", "311", "395", "363", "411", "438", "367", "37"],
        qtbkzysrd: ["4", "5", "2", "2", "5", "3", "3", "3", "4", "5", "5", "0"],
        qtsrd:["7", "3", "3", "29", "4", "4", "20", "15", "-1", "11", "8", "-2"],
        jysrd:["350.00", "379.00", "299.00", "387.00", "293.00", "321.00", "406.00", "372.00", "422.00", "447.00", "383.00", "37.00"],
        gcclqkd:["80", "110", "59", "21", "212", "34", "59", "86", "93", "58", "127", "2"],
        sfzcd:["13", "26", "18", "15", "44", "18", "22", "31", "41", "25", "40", "0"],
        xgfd:["5", "6", "5", "4", "10", "7", "8", "6", "7", "4", "11", "0"],
        xcflfd:["11", "12", "15", "12", "46", "12", "12", "15", "19", "19", "18", "0"],
        qtzcd:["8", "8", "11", "47", "18", "8", "19", "11", "17", "12", "15", "0"],
        jylcd:["116.00", "161.00", "105.00", "97.00", "325.00", "75.00", "115.00", "146.00", "174.00", "119.00", "205.00", "2.00"],
        tdkd:["196", "194", "176", "135", "173", "264", "281", "225", "151", "380", "403", "-12"],
        jyxjxjld:["466.00", "540.00", "404.00", "484.00", "618.00", "396.00", "521.00", "518.00", "596.00", "566.00", "588.00", "39.00"],
        dksrlcd:["316", "114", "191", "303", "137", "98", "252", "240", "199", "211", "153", "1"],
        hdlcd:["156", "120", "110", "208", "64", "65", "73", "78", "98", "158", "59"],
        lxzcd: ["15", "3", "6", "19", "6", "4", "17", "3", "4", "19", "6", "1"],
        qtrzxjxjld:["4", "-16", "-38", "10", "-125", "18", "3", "-64", "-8", "84", "-117", "6"],
        tzxjxjld:["-51", "-19", "-34", "-7", "-19", "3", "-36", "6", "-17", "14", "-1", "-4"],
        activeName: '1',
      }
    },
    mounted(){
      this.setOptonS(this.lksrt,this.lksrd,"楼款收入");

      this.morechar('lk_pic1',this.lksrt,this.lksrd);
      this.morechar('lk_pic2',this.lksrt,this.qtbkzysrd);
      this.morechar('lk_pic3',this.lksrt,this.qtsrd);
      this.morechar('lk_pic4',this.lksrt,this.jysrd);
      this.morechar('lk_pic5',this.lksrt,this.gcclqkd);
      this.morechar('lk_pic6',this.lksrt,this.sfzcd);
      this.morechar('lk_pic7',this.lksrt,this.xgfd);
      this.morechar('lk_pic8',this.lksrt,this.xcflfd);
      this.morechar('lk_pic9',this.lksrt,this.qtzcd);
      this.morechar('lk_pic10',this.lksrt,this.jylcd);
      this.morechar('lk_pic11',this.lksrt,this.tdkd);
      this.morechar('lk_pic12',this.lksrt,this.jyxjxjld);
      this.morechar('lk_pic13',this.lksrt,this.dksrlcd);
      this.morechar('lk_pic14',this.lksrt,this.hdlcd);
      this.morechar('lk_pic15',this.lksrt,this.lxzcd);
      this.morechar('lk_pic16',this.lksrt,this.qtrzxjxjld);
      this.morechar('lk_pic17',this.lksrt,this.tzxjxjld);
    },
    methods:{
      trclick(a){
          let title='';
        this.activeName = a;
//        $(".tdcols").removeClass('tdcols');
        switch (a){
          case 1:
            title = '楼款收入';
            this.setOptonS(this.lksrt,this.lksrd,title);
            console.log(this.lksrt,this.lksrd,title);
            break;
          case 2:
            title = '其他板块主营收入';
            this.setOptonS(this.lksrt,this.qtbkzysrd,title);
//            break;
          case 3:
            title = '其他收入';
            this.setOptonS(this.lksrt,this.qtsrd,title);
            break;
          case 4:
            title = '经营收入';
            this.setOptonS(this.lksrt,this.jysrd,title);
            break;
          case 5:
            title = '工程材料款';
            this.setOptonS(this.lksrt,this.gcclqkd,title);
            break;
          case 6:
            title = '税费支出';
            this.setOptonS(this.lksrt,this.sfzcd,title);
            break;
          case 7:
            title = '销管费';
            this.setOptonS(this.lksrt,this.xgfd,title);
            break;
          case 8:
            title = '薪酬福利费';
            this.setOptonS(this.lksrt,this.xcflfd,title);
            break;
          case 9:
            title = '其他支出';
            this.setOptonS(this.lksrt,this.qtzcd,title);
            break;
          case 10:
            title = '经营流出';
            this.setOptonS(this.lksrt,this.jylcd,title);
            break;
          case 11:
            title = '土地款';
            this.setOptonS(this.lksrt,this.tdkd,title);
            break;
          case 12:
            title = '经营性净现金流';
            this.setOptonS(this.lksrt,this.jyxjxjld,title);
            break;
          case 13:
            title = '贷款收入流出';
            this.setOptonS(this.lksrt,this.dksrlcd,title);
            break;
          case 14:
            title = '还贷流出';
            this.setOptonS(this.lksrt,this.hdlcd,title);
            break;
          case 15:
            title = '利息支出';

            this.setOptonS(this.lksrt,this.lxzcd,title);
            break;
          case 16:
            title = '其他融资性净现金流';
            this.setOptonS(this.lksrt,this.qtrzxjxjld,title);
            break;
          case 17:
            title = '投资性净现金流';
            this.setOptonS(this.lksrt,this.tzxjxjld,title);
            break;
          default:
            break;
        }
      },
      setOptonS(a,b,c){
        var lkcharts = echarts.init(document.getElementById('lksr_pic'));
        var option = {
          title : {
            text : '单位：亿元',
            textStyle : {
              color : "gray",
              fontWeight : "normal",
              fontSize : '14',
              color:"#fff"
            },
            top : '-2%',
            right : '1%',

          },
          tooltip : {
            trigger: 'axis',
            formatter: function (params) {
//              console.log(params);
              for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                return params[0].name + "</br>" + c + ":" + params[0].value;
              }
            }
          },
          grid: {
            x: '20',
            x2: '20',
            y: '30',
            y2: '40',
          },

          xAxis : [
            {
              type : 'category',
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false
              },
              splitLine:{
                show: false,
              },
              axisLabel: {
                interval : 0,
                formatter:function(params){
                  return params.substr(5,2)/1 + '月';
                },
                textStyle:{
                  color:"#fff"
                }
              },
              data : a
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitLine:{
                show: true,
              },
            }
          ],
          series : [
            {
              type:'line',
              itemStyle: {
                normal: {
                  color: '#029AE6',
                },
              },
              label:{
                normal:{
                  show: true,
                },
              },
              symbolSize: 5,
              data:b
            }
          ]
        };
        lkcharts.clear();
        return  lkcharts.setOption(option);
      },
      morechar(a,b,c){
        var ulkcharts = echarts.init(document.getElementById(a));
        var option = {
      grid: {
        top: '10%',
        bottom: '10%',
      },
      xAxis : [
        {
          type : 'category',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false
          },
          splitLine:{
            show: false,
          },
          axisLabel: {
            interval : 0,
          },
          data : b
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine:{
            show: false,
          },
        }
      ],
      series : [
        {
          type:'line',
          itemStyle: {
            normal: {
              color: '#029AE6',
            },
          },
          label:{
            normal:{
              show: true,
            },
          },
          symbol:'none',
          data:c
        }
      ]
    };
        ulkcharts.setOption(option);
      }
    }
  }
</script>

<style  scoped  lang="scss">
  .situation{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color:white;
    margin-top: 1px;
    position: fixed;
    overflow: hidden;
    .top_title{
      height: 50px;
      line-height: 50px;
      text-align: left;
      color: #fff;
    }

     .lk_income{
      position: relative;
      width: 100%;
      text-align: center;
      margin-top: 10px;
    }
     .income{
      font-size: 22px;
    }
     .lk_Company{
      position: absolute;
      right: 0;
      color: gray;
    }
     .jycash{
       position: relative;
       width: 100%;
       height: 40px;
       background: #497FAB;
       border-radius: 5px 5px 0 0;
       line-height: 40px;
       padding: 0 9% 0 3%;

    }
     .jycash span:nth-child(1){
      float: left;
      color: #fff;
      margin-left: 10px;
    }
     .jycash span:nth-child(2){
      float: right;
    }
     .tabcash{
      width: 100%;
      height: 330px;
      text-align: center;
      border: 1px solid #ccc;
      border-collapse: collapse;
       font-size: 13px;
    }
     .tabcash .tab_had{
      background-color: #D5FFFB;
    }
     .tabcash .td01{
      letter-spacing: 3px;
    }
     .tabcash .tdcol{
      /*background-color: #F4F4F4;*/
    }
     .tabcash .tdcols{
      background-color: #7b6550 !important;
    }
     .Atabcash{
      width: 100%;
      text-align: center;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-collapse: collapse;
      font-size: 14px;
    }
     .Acash td{
      height: 30px;
      border: 1px solid #ccc;
      padding:1px;
    }
     .Acash tr td:nth-child(2){
      width: 24% !important;
    }
     .Acash tr td:nth-child(3){
      width: 25% !important;
    }
     .Atabcash{
      /*background-color: #D5FFFB;*/
       color: #f19115;
    }
     .tabcashdiv{
      width: 100%;
      height: 235px;
      overflow-y: auto;
      margin-bottom: 60px;
    }

      .cl1{
        color: #FD9526;
      }
      .cl2{
        color: #0199E5;
      }

      .cl3{
        color: #fff;
      }
  }
</style>
