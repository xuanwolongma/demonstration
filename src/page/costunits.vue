<!--成本中心&#45;&#45;建筑单位-->
<template>
  <div class="costunits ">
    <div class="top_title">
      <span class="font5">建筑单位</span>
      <div class="ymsm" @click="dialogmains=true"><img  alt="rightimg" src="../assets/ymsm.png">页面说明</div>
    </div>
    <div class="dialogmain" v-show="dialogmains">
      <div class="dialogtop">
        <div class="dialogtitle">口径说明</div>
        <img class="dialogdelect" width="15" src="../assets/delete-grow@3x.png" @click="dialogmains=false"/>
      </div>
      <div class="line03"></div>
      <div class="font10">
        <div>1、可售单方：可售维度（含税）</div>
          <div style="padding-left:23px;">科目:01.01~01.13</div>
          <div>2、建造单方：建筑维度</div>
          <div style="padding-left:23px;"> 科目:01.03~01.07</div>
          <div>3、主体建安单方：建筑维度</div>
          <div style="padding-left:23px;">科目:01.03.01~01.03.03</div>
          <div>4、主体结构+粗装单方：建筑维度</div>
          <div style="padding-left:23px;">科目:01.03.01+01.03.03-01.03.01.01</div>
      </div>
    </div>
    <div class="carousel-inner">
      <div id='item1' class="item active">
        <div class="cos_echarts_scroll">
          <div class="cos_title_left">
            <div class="qp">
              <span>动态单方:</span>
              <img width="30px" src="../assets/cb001.png"/>
              <!-- <span>动态单方</span> -->
            </div>
            <div class="qp">
              <span>目标单方:</span>
              <img width="30px" src="../assets/cb002.png"/>
              <!-- <span>毛利率</span> -->
            </div>

          </div>
          <div class="cos_title_right">
            <span>数据截止日期：7月</span>
          </div>
          <div class="cos_echarts" id="cos_echarts1"></div>
        </div>
        <div class="xaxis"></div>
      </div>
    </div>
    <div class="cos_list ">
      <div class="cos_list_content" v-for="qy in datas" >
        <div class="cos_lc_one sheng" v-bind="$index+1">
        </div>
        <div class="cos_lc_two">
          <div class="bg" :style="{width:qy.bgbfb+'%'}"></div>
          <div class="cos_list_title">
            <span class="cos_lc_two_span1" v-bind="qy.projectname!=undefined?qy.projectname:qy.areaname!=undefined?qy.areaname:qy.cplx"></span>
            <span class="cos_lc_two_span2"><span v-if="select=='type1'" v-bind="qy.dtksdf"></span><span v-if="select!='type1'" v-bind="qy.dtjzdf"></span>元</span>
          </div>
          <div class="cos_list_data" v-if="!xsj">
            <!--<div class="div1" v-if="select=='type1'"><span>目标可售单方</span></div>-->
            <!--<div class="div2" v-if="select=='type1'"><span><span v-bind="qy.mbksdf"></span></span></div>-->
            <!--<div class="div1" v-if="select=='type1'"><span>目标净利率</span></div>-->
            <!--<div class="div2" v-if="select=='type1'"><span><span v-bind="qy.mbjll"></span>%</span></div>-->
            <!--<div class="div1" v-if="select=='type2'"><span>目标建造单方</span></div>-->
            <!--<div class="div2" v-if="select=='type2'"><span><span v-bind="qy.mbjzdf"></span></span></div>-->
            <!--<div class="div1" v-if="select=='type3'" style="width:130px;"><span>目标主体结构+粗装</span></div>-->
            <!--<div class="div2" v-if="select=='type3'"><span><span v-bind="qy.mbjzdf"></span></span></div>-->
            <!--<div class="div1" v-if="select=='type4'"><span>目标主体建安</span></div>-->
            <!--<div class="div2" v-if="select=='type4'"><span><span v-bind="qy.mbjzdf"></span></span></div>-->
          </div>
          <div class="cos_list_data" v-if="!xsj">
            <div class="div1" v-if="select=='type1'"><span>利润率偏差</span></div>
            <div class="div2" v-if="select=='type1'"><span><span v-bind="qy.jllpc"></span>%</span></div>
            <div v-class="{true: 'mbjlr', false: 'div1'}[select=='type3']"><span v-if="select!='type1'">目标净利率</span></div>
            <div class="div2" v-if="select!='type1'"><span><span v-bind="qy.mbjll"></span>%</span></div>
            <div  v-class="{true: 'dtjlr', false: 'div1'}[select=='type3']"><span>动态净利率</span></div>
            <div class="div2"><span><span v-bind="qy.dtjll"></span>%</span></div>
          </div>
        </div>
        <div v-show="numjzdf!=2" class="cos_lc_three">
          <img src="../assets/right.png"/>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import echarts from "echarts"
  import $ from 'jquery'
  export default {
    name: 'costunits',
    data(){
      return {
        activeName: "first",
        myf: true,
        dialogmains: false,
        datas:[{"cplx":"双拼-豪装","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1308697","dtjzdf":"6677.1821","dtksdf":"11011.4366","jllpc":".0528","jzdflx":"JZhDF","mbjll":".0780667","mbjzdf":"6747.1157","mbksdf":"10797.3466","pm":"1","pzyf":"2017-07"},
          {"cplx":"公寓-精装","ds_ts":"2017-07-29 05:25:59.0","dtjll":".0448344","dtjzdf":"4671.1011","dtksdf":"12892.8209","jllpc":"-.03904","jzdflx":"JZhDF","mbjll":".0838768","mbjzdf":"5429.0742","mbksdf":"14416.0737","pm":"2","pzyf":"2017-07"},
          {"cplx":"双拼-精装","ds_ts":"2017-07-29 05:25:59.0","dtjll":".2872605","dtjzdf":"4438.9802","dtksdf":"13232.0646","jllpc":".06882","jzdflx":"JZhDF","mbjll":".2184453","mbjzdf":"4951.5671","mbksdf":"13286.4353","pm":"3","pzyf":"2017-07"},
          {"cplx":"独栋-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1449281","dtjzdf":"4404.4204","dtksdf":"10272.3702","jllpc":".13974","jzdflx":"JZhDF","mbjll":".0051867","mbjzdf":"4602.6161","mbksdf":"10675.5796","pm":"4","pzyf":"2017-07"},
          {"cplx":"联排-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1483937","dtjzdf":"3786.2913","dtksdf":"8849.9672","jllpc":".09245","jzdflx":"JZhDF","mbjll":".055948","mbjzdf":"3991.8179","mbksdf":"8239.4707","pm":"5","pzyf":"2017-07"},
          {"cplx":"双拼-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjll":".2570527","dtjzdf":"3410.3937","dtksdf":"10831.1744","jllpc":".09488","jzdflx":"JZhDF","mbjll":".1621769","mbjzdf":"3641.0201","mbksdf":"10665.8732","pm":"6","pzyf":"2017-07"},
          {"cplx":"多层-精装","ds_ts":"2017-07-29 05:25:59.0","dtjll":".2587318","dtjzdf":"3287.6093","dtksdf":"10487.5683","jllpc":".15718","jzdflx":"JZhDF","mbjll":".1015566","mbjzdf":"3528.6884","mbksdf":"9083.5007","pm":"7","pzyf":"2017-07"},
          {"cplx":"商业中心-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1746003","dtjzdf":"3261.3716","dtksdf":"9295.0636","jllpc":".00318","jzdflx":"JZhDF","mbjll":".1714171","mbjzdf":"3318.1634","mbksdf":"9330.8557","pm":"8","pzyf":"2017-07"},
          {"cplx":"人防地下室（不含车位）-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjzdf":"3170.7478","dtksdf":"0","jzdflx":"JZhDF","mbjzdf":"2831.3686","mbksdf":"0","pm":"9","pzyf":"2017-07"},
          {"cplx":"附属商业（含底层商业）-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjll":".225374","dtjzdf":"3083.7854","dtksdf":"9092.6319","jllpc":".02074","jzdflx":"JZhDF","mbjll":".2046365","mbjzdf":"3246.8885","mbksdf":"9026.8889","pm":"10","pzyf":"2017-07"},
          {"cplx":"中高层-精装","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1439205","dtjzdf":"2984.3775","dtksdf":"6335.2278","jllpc":".01018","jzdflx":"JZhDF","mbjll":".1337394","mbjzdf":"3011.047","mbksdf":"6339.3708","pm":"11","pzyf":"2017-07"},
          {"cplx":"小高层-精装","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1259117","dtjzdf":"2955.9756","dtksdf":"5014.7879","jllpc":".04008","jzdflx":"JZhDF","mbjll":".0858277","mbjzdf":"3013.8914","mbksdf":"5025.3948","pm":"12","pzyf":"2017-07"},
          {"cplx":"高层-精装","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1787643","dtjzdf":"2954.2052","dtksdf":"6600.95","jllpc":".05946","jzdflx":"JZhDF","mbjll":".1193088","mbjzdf":"3075.3314","mbksdf":"6425.486","pm":"13","pzyf":"2017-07"},
          {"cplx":"人防地下车位-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjzdf":"2900.1044","dtksdf":"0","jzdflx":"JZhDF","mbjzdf":"3004.8556","mbksdf":"0","pm":"14","pzyf":"2017-07"},
          {"cplx":"商业街-毛坯","ds_ts":"2017-07-29 05:25:59.0","dtjll":".1423384","dtjzdf":"2883.7059","dtksdf":"8556.8029","jllpc":"-.0211","jzdflx":"JZhDF","mbjll":".1634347","mbjzdf":"3008.1056","mbksdf":"8784.7195","pm":"15","pzyf":"2017-07"}],
        op1: [6940, 6465, 17581, 6545, 5491, 5204, 5861, 7369, 8471, 8493],
        op2: [6940, 6465, 17581, 6545, 5491, 5204, 5861, 7369, 8471, 8493],
        namejzdfArr: ["高层-毛坯", "高层-精装",  "高层-豪装",  "中高层-毛坯", "中高层-精装",  "小高层-毛坯",  "小高层-精装", "多层-毛坯",  "多层-精装", "多层-豪装"],
      }
    },
    mounted(){
        this.setoption(this.op1,this.op2)
      },
    methods:{
          //根据大小不同柱状图的颜色不同
          getData(a,b){
        var echartdata = [];
        for(var i = 0;i< a.length;i++){
          if(a[i] < b[i]){
            var obj = {
              value:a[i],
              itemStyle:{
                normal:{
                  color:'green',
                },
                emphasis :{
                  color:'#FF9A11',
                }
              }
            }
            echartdata.push(obj)
          }else {
            obj = {
              value:a[i],
              itemStyle:{
                normal:{
                  color:'red',
                },
                emphasis :{
                  color:'#FF9A11',
                }
              }
            }
            echartdata.push(obj)
          }
        }
        return echartdata
      },
          setoption(a,b){
            var myChart1 = echarts.init(document.getElementById('cos_echarts1'));
            var option1 = {
              tooltip : {
        //    				showContent : false,
                trigger: 'axis',
                axisPointer : {
                  type:'none',
                  lineStyle : {
                    color : 'white'
                  }
                },
                formatter: function (param) {
                  // console.log(b[i]);
                  for (var i = 0, l = option1.xAxis[0].data.length; i < l; i++) {
                    // console.log(b[i]);
                    if (option1.xAxis[0].data[i] == param[0].name){
//                      this.setXaxisName1(param[0]);
                      console.log(param);
                      var ary = $('.cos_lc_one');
                      for(var a = 0;a<this.namejzdfArr.length;a++){
                        if(ary[a].innerHTML == param.dataIndex+1){
                          ary[a].scrollIntoView();
                        }
                      }
                      $(".xaxis").css('display','block');
                      $(".xaxis").html(param.name);
                      $(".xaxis").css('margin-top','-20px');
                      $(".xaxis").css('height','20px');
                      var width = $(window).width();
                      var w = (param.name.length)*16;
                      var i = (width*0.80)/this.namejzdfArr.length;
                      var n = this.namejzdfArr.length-param.dataIndex;
                      var left = width*0.15 + i/2 + (param.dataIndex)*i - w/2 - (param.dataIndex*0.9)*(w/45)^(param.dataIndex);
                      $(".xaxis").css('width',w);
                      $(".xaxis").css('margin-left',left);
                      return param[0].name + '<br/>' + '目标单方：' + param[1].value + '<br/>' + '动态单方：' + param[0].value;
                    }
                  }

                }
              },
              grid: {
                x: 50,
                y: 40,
                x2: 30,
                y2: 40,
              },
              xAxis : [
                {
                  type : 'category',
                  data : this.namejzdfArr,
                  axisLine:{show:false,},
                  splitLine:{show:false},
                  axisTick:{show:false},
                  axisLabel:{show:false,textStyle:{color:'#fff'} }
                }
              ],
              yAxis : [{
                  type : 'value',
                  axisLabel : {textStyle:{color:'#fff'}},
                  axisLine:{ show:false,},
                  splitLine:{show:true,lineStyle:{color:'#6699ff'}},
                  axisTick:{show:false},
                  min:0
                  },
                {
                  type : 'value',
                  axisLabel : {show:false,textStyle:{color:'#fff'}},
                  axisLine:{show:false},
                  splitLine:{show:false, lineStyle:{color:'#6699ff'}},
                  axisTick:{show:false},
                  min:2
                }
              ],
              series : [
                {
                  name:'动态建造单方',
                  type:'bar',
                  clickable:true,
                  itemStyle:{ normal:{ color:'#fff',},emphasis :{color:'#FF9A11',}},
                  barWidth:12,
                  data:this.getData(a,b)
                },
                {
                  name:'目标建造单方',
                  type:'scatter',
                  clickable:true,
                  symbol:'circle',
                  symbolSize:10,
                  itemStyle:{ normal:{color:'#008ADC',lineStyle:{ color:'#fff' } }},
                  data:b
                }
              ]
            };
            myChart1.setOption(option1);
          },
    }
  }
</script>

<style  lang="scss">
  .costunits{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    margin-top: 45px;
    color:white;
    .top_title {
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
    }
    .ymsm{
         float: right;
         margin-right: 10px;
         z-index: 99;
       }
    .ymsm img{
      height: 14px;
      padding-right: 4px;
    }
    .cos_title_left {
      float: left;
      font-size: 16px;
      padding-left: 10px;
      margin-top: 10px;
    }
    .cos_title_left_span2 {
      font-size: 20px;
    }
    .cos_title_right {
      float: right;
      padding-right: 10px;
      margin-top: 31px;
    }

    .charts{
      height: 200px;
      clear: both;
    }


    .cos_echarts>div:nth-child(1){
      top:-15px !important;
      margin-left: 2%;
    }
    .cos_list{
      height: 500px;
      overflow-y: auto;
      background: #023C64;
      padding-bottom: 75px;
    }
    .cos_list_content{
      padding: 5px;
      border-bottom: 1px #c9c9c9 solid;
      height: 86px;

    }
    .cos_lc_one{
      float: left;
      height: 75px;
      width: 25px;
      text-align: center;
      padding-top: 26px;
      font-size: 16px;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
    .sheng{
      background: #FFDACB;
    }
    .qian{
      background: #FFEBCD;
    }

    .cos_lc_two{
      float: left;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      height: 75px;
      width: 80%;
      position: relative;
      z-index: 1;
    }
    .bg{
      position: absolute;
      z-index: -1;
      height: 75px;
      width: 100%;
      background: #76b2d1;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
    .cos_lc_two_span1{
      padding: 10px;
      font-weight: 600;
    }
    .cos_lc_two_span2{
      font-size: 18px;
      color: #008ADC;
    }

    .cos_lc_three{
      float: right;
      padding-top: 20px;
    }
    .cos_list_title{
      margin-top: 2px;
      font-size: 16px;
    }
    .cos_list_data{
      font-size: 14px;
    }
    .cos_list_data>span{
      padding: 10px 0px 10px 10px;
      color: #666;
    }
    .warning{
      position: absolute;
      right: -20PX;
      top: 15px;
    }

    .warning>img{
      height: 50px;
      width: 50px;
    }
    .num{
      position: absolute;
      right: 21PX;
      top: 20px;
      font-size: 12px;
    }
    .num1{
      position: absolute;
      right: 17PX;
      top: 20px;
      font-size: 12px;
    }
    .leftimg{
      height:10px;
      margin-bottom:8px;
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    }

    .rightimg{
      height:10px;
      margin-bottom:8px;
    }


    .dialogmain {
      width: 80%;
      height: 240px;
      margin-left: 10%;
      top: 50px;
      background-color: white;
      position: absolute;
      z-index: 10;
      box-shadow: 1px 2px 3px 2px grey;
      border-radius: 5px;
    }
    .dialogtop {
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .dialogtitle {
      text-align: center;
      float: left;
      width: 75%;
      font-size: 20px;
      margin-left: 13%;
      color: #2fbdff;
    }
    .dialogdelect {
      float: right;
      margin-top: 10px;
      margin-right: 15px;
    }
    .line03 {
      background-image: url(../assets/line.png);
      background-repeat: repeat-x;
      width: 100%;
      height: 1px;
    }
    .font10 {
      text-indent: 1em;
      color: #666;
      font-size: 15px;
      margin-left: 10px;
      margin-right: 5px;
    }

    .carousel-inner {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .carousel-inner>.active {
      left: 0;
    }
    .cos_title_left {
      float: left;
      font-size: 14px;
      padding-left: 10px;
    }
    .cos_title_right {
      float: right;
      padding-right: 10px;
      padding-top: 24px;
    }
    .cos_echarts {
      height: 200px;
      clear: both;
    }
    .xaxis {
      color: #008adc;
      background: #fff;
      border-radius: 6px;
      padding: 0px 0px;
      text-align: center;
    }

    .color1{
      color: #f19115;
    }
    .color2{

    }
    .font1{
      font-size: 12px;
    }
    .font2{
      font-size: 14px;
    }
    .font3{
      font-size: 16px;
    }
    .font4 {
      font-size: 18px;
    }
    .font5 {
      font-size: 20px;
    }

  }
  .title {
    font-size: 20px;
    margin-left: 30px;
  }
</style>
