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
          <div class="cos_title_right">
            <span>数据截止日期：7月</span>
          </div>
          <div class="cos_echarts" id="cos_echarts1"></div>
        </div>
      </div>
    </div>
    <div class="cos_list">
      <div class="cos_list_content" v-for="qy in arys" @click="gochild(qy.key4)">
        <div class="cos_lc_one sheng"  >{{qy.key9}}</div>
        <div class="cos_lc_two" >
          <div class="bg" :style="{width:qy.key1+'%'}"></div>
          <div class="warning" @click="toyj(qy)" v-if="qy.yjdiv">
            <div class="num1" v-if="imgflag">
              <span >{{qy.key2}}</span>
            </div>
            <div v-if="!imgflag">
              <div style="position: absolute;right: 15PX;top: 13px;font-size: 12px;width:20px;text-align:center;color: #333">
                <span  >{{qy.key2}}</span>
              </div>
              <div style="background-color:#333;width:25px;height:1px;position: absolute;right: 12PX;top: 30px;"></div>
              <div style="position: absolute;right: 5PX;top: 28px;font-size: 12px;width:40px;text-align:center;color: #333">
                <span  >{{qy.key3}}</span>
              </div>
            </div>
            <img src="../assets/warning.png"/>
          </div>
          <div class="cos_list_title">
            <span class="cos_lc_two_span1" >{{qy.key4}}</span>
            <span class="cos_lc_two_span2" >{{qy.key5}}</span>
          </div>
          <div class="cos_list_data">
            <span>目标成本</span>
            <span style="padding-left:2px;" >{{qy.key6}}</span>
            <span style="padding-left:2px;">动态成本</span>
            <span style="padding-left:2px;" >{{qy.key7}}</span>
          </div>
          <div class="cos_list_data">
            <span>成本追加率</span>
            <span style="padding-left:2px;" >{{qy.key8}}</span>
            <span style="padding-left:2px;" v-if="myf">
						<span style="padding-left:2px;">追加项目数</span>
						<span style="padding-left:2px;" >{{qy.key10}}</span>
					</span>
          </div>
        </div>
        <div v-show="" class="cos_lc_three">
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
        imgflag:false,
        arys:[{key1:"100",key2:"2",key3:"2",key4:"深圳",key5:"-0.27%",key6:"45.78亿",key7:"45.66亿" ,key8:"0.82%",key9:"1",key10:"1",yjdiv:true},
          {key1:"100",key2:"2",key3:"2",key4:"上海",key5:"-0.32%",key6:"9.79亿",key7:"7.76亿" ,key8:"--",key9:"2",key10:"0",yjdiv:true},
          {key1:"90",key2:"3",key3:"3",key4:"鲁东",key5:"-0.33%",key6:"36.04亿",key7:"35.92亿" ,key8:"3.70%",key9:"3",key10:"1",yjdiv:true},
          {key1:"99",key2:"11",key3:"11",key4:"河北",key5:"-0.41%",key6:"138.52亿",key7:"137.95亿" ,key8:"1.16%",key9:"4",key10:"2",yjdiv:true},
          {key1:"97",key2:"4",key3:"4",key4:"武汉",key5:"-0.66%",key6:"60.14亿",key7:"59.74亿" ,key8:"--",key9:"5",key10:"0",yjdiv:true},
          {key1:"86",key2:"28",key3:"28",key4:"河南",key5:"-0.72%",key6:"402.11亿",key7:"399.20亿" ,key8:"--",key9:"6",key10:"0",yjdiv:true},],
        op1: [6940, 6465, 17581, 6545, 5491, 5204, 5861, 7369, 8471, 8493],
        op2: [6940, 6465, 17581, 6545, 5491, 5204, 5861, 7369, 8471, 8493],
        namejzdfArr: ["高层--毛坯", "高层--精装",  "高层--豪装",  "中高层-毛坯", "中高层-精装",  "小高层-毛坯",  "小高层-精装", "多层--毛坯",  "多层--精装", "多层--豪装"],
      }
    },
    mounted(){
        this.setoption(this.op1,this.op2)
      },
    methods:{
          setoption(a,b){
            var myChart = echarts.init(document.getElementById('cos_echarts1'));
            var option = {
                tooltip : {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'none',
                    lineStyle: {
                      color: 'white'
                    }
                  },
                  formatter: function (param) {
                    // console.log(b[i]);
                      console.log(param);
                      return param[0].name + '<br/>' + '目标单方：' + param[1].value + '<br/>' + '动态单方：' + param[0].value;
                  },
                },
                grid: {
                  x: 60,
                  y: 40,
                  x2: 20,
                  y2: 50,
                },
                xAxis: [
                  {
                    type: 'category',
                    axisLine: {show: false,},
                    splitLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {show: true,interval:0,  rotate: 300,textStyle: {color: '#fff'}},
                    nameRotate:"90 ",
                    data: this.namejzdfArr
                  }
                ],
                yAxis: [
                  {
                    type: 'value',
                    axisLabel: {textStyle: {color: '#fff'}},
                    axisLine: {show: false,},
                    splitLine: {show: true, lineStyle: {color: '#6699ff'}},
                    axisTick: {show: false},
                    splitNumber:3,
                    min: 0
                  },
                ],
                series: [
                  {
                    name: '动态建造单方',
                    type: 'bar',
                    clickable: true,
                    itemStyle: {normal: {color: '#FF9A11',}, emphasis: {color: '#55C6FE',}},
                    barWidth: 12,
                    data: a
                  },
                  {
                    name: '目标建造单方',
                    type: 'scatter',
                    clickable: true,
                    symbol: 'circle',
                    symbolSize: 10,
                    itemStyle: {normal: {color: '#008ADC', lineStyle: {color: '#fff'}}},
                    data: b
                  }
                ]
            };
            myChart.setOption(option);
            myChart.setOption( this.newline(option,2,"xAxis"));

          },newline(option, number, axis){
              /**
               * 控制图表的横纵的文本一行显示的文字数
               */
              option[axis][0]['axisLabel']={
                interval: 0,
                textStyle : {
                  fontSize : '10',
                },
                rotate:0,
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
                  return newParamsName
                }
              }
              return option;
            }
    }
  }
</script>

<style  lang="scss">
  .costunits{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color: white;
    margin-top: 45px;
    font-size: 14px;
    .title {
      font-size: 20px;
      margin-left: 30px;
    }
    .top_title {
      height: 50px;
      line-height: 50px;
      text-align: left;
      color: #fff;
      padding-left: 20px;
      background-color: #28465E;
      border-bottom: 1px solid #ddd;
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
      font-size: 14px;
      padding-left: 10px;
      margin-top: 10px;
    }
    .cos_title_left_span2 {
      font-size: 18px;
    }
    .cos_title_right {
      float: right;
      padding-right: 10px;
      padding-top: 10px;
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
      background-color: #558EB9;
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
      background: #a4b4bc;
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
      font-size: 18px;
    }

  }

</style>
