<!--成本中心&#45;&#45;成本偏差-->
<template>
  <div class="deviation">
    <div class="top_title">
      <span class="font5">成本偏差率</span>
      <div class="ymsm" @click="goInstruction"><img  alt="rightimg" src="../assets/ymsm.png">页面说明</div>
    </div>
    <div class="cos_title_left">
      <span>集团</span>平均：
      <span class="cos_title_left_span2"><span >-3.02</span>%</span>
    </div>
    <div class="cos_title_right">
      <span>数据截止日期：</span>
      <span >7</span>月拍照数据
    </div>
    <div class="charts" id="cos_echarts"></div>
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

    <div class="dialogmain" v-show="dialogmain">
      <div class="dialogtop">
        <div class="dialogtitle">口径说明</div>
        <img class="dialogdelect" width="15" src="../assets/delete-grow@3x.png" @click="hiddenDialog"/>
      </div>
      <div class="line03"></div>
      <div class="font10">
        <div v-if="myf">
          <div>1、	三角形：分母标识该区域纳入统计的二级项目总数，分子表示该区域预警的二级项目数量；</div>
          <div>2、	成本偏差率：按照纳入统计的二级项目汇总计算；</div>
          <div>3、	追加率：仅统计发生追加的项目。</div>
        </div>
        <div v-if="!myf" >1、三角形：表示该期区发生预警的一级科目数量。</div>
      </div>
    </div>


  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: 'deviation',
  data(){
    return{
      activeName:"firsts",
      cmomnth:['02','03','04','05','06','07'],
      cbl:['-2.28','-2.73','-2.49','-4.43','-2.72','-3.04'],
      myf:true,
      dialogmain:false,
      arys:[{key1:"100",key2:"2",key3:"2",key4:"深圳",key5:"-0.27%",key6:"45.78亿",key7:"45.66亿" ,key8:"0.82%",key9:"1",key10:"1",yjdiv:true},
            {key1:"100",key2:"2",key3:"2",key4:"上海",key5:"-0.32%",key6:"9.79亿",key7:"7.76亿" ,key8:"--",key9:"2",key10:"0",yjdiv:true},
            {key1:"90",key2:"3",key3:"3",key4:"鲁东",key5:"-0.33%",key6:"36.04亿",key7:"35.92亿" ,key8:"3.70%",key9:"3",key10:"1",yjdiv:true},
            {key1:"99",key2:"11",key3:"11",key4:"河北",key5:"-0.41%",key6:"138.52亿",key7:"137.95亿" ,key8:"1.16%",key9:"4",key10:"2",yjdiv:true},
            {key1:"97",key2:"4",key3:"4",key4:"武汉",key5:"-0.66%",key6:"60.14亿",key7:"59.74亿" ,key8:"--",key9:"5",key10:"0",yjdiv:true},
            {key1:"86",key2:"28",key3:"28",key4:"河南",key5:"-0.72%",key6:"402.11亿",key7:"399.20亿" ,key8:"--",key9:"6",key10:"0",yjdiv:true},],
      list:[],
      imgflag:false,
    }
  },
  actived:{

  },
  mounted(){
    this.setoption(this.cmomnth,this.cbl);
  },
  methods:{
      goInstruction() {
        console.log(111);
        this.dialogmain=true;
        },
      hiddenDialog() {
        this.dialogmain=false;
      },
      //设置成本偏差率的折线图--全国、区域
      /**
       * @param {Object} a x轴-时间包括当前月的6个月
       * @param {Object} b y轴-偏差率
       */
      setoption(a,b){
           console.log(a,b)
        var myChart = echarts.init(document.getElementById('cos_echarts'));
        var option = {
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              lineStyle : {
                color : 'white'
              }
            },
            formatter: function (params) {
              for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                // console.log(b[i]);
                if (option.xAxis[0].data[i] == params[0].name){
                  return params[0].name + '月：' + params[0].value + "%";
                }
              }
            }
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : a,
              axisLine:{
                show:false,
              },
              splitLine:{
                show:false
              },
              axisTick:{
                show:false
              },
              axisLabel:{
                show:true,
                textStyle:{
                  color:'#fff'
                }
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              scale : true,
              axisLabel : {
                formatter: '{value}%',
                textStyle:{
                  color:'#fff'
                },
              },
              splitNumber :1,
              axisLine:{
                show:false
              },
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#ccc'
                }

              },
              axisTick:{
                show:false
              },
            }
          ],
          grid: {
    //			        x: 20,
            y: 20,
    //			        x2: 20,
            y2: 30,
            // width: {to	talWidth} - x - x2,
            // height: {totalHeight} - y - y2,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            borderColor: 'white'
          },
          series : [
            {
              name:'',
              type:'line',
              clickable:true,
//              symbol:'image:../assets/circleblue.png',
              symbol:'circle',
              symbolSize:10,
              data:b,
              itemStyle:{
                normal:{
                  color:'#008ADC',
                  lineStyle:{
                    color:'#fff'
                  }

                }

              }
            }
          ]
        };
        myChart.setOption(option);
      },
      gochild(){

      },
      toyj(a) {
        if(this.imgflag){
          console.log(a.key4);
         // $state.go("cvkm",{'area':$scope.title,'project':a.key4});
        }
      },

    }

}
</script>

<style  lang="scss">
  .deviation {
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 14px;
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
      height: 200px;
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


    .color1 {
      color: #f19115;
    }
    .color2 {
      background: #023C64;
    }
    .color3 {
      color: #A8BACB;
    }
    .font1 {
      font-size: 12px;
    }
    .font2 {
      font-size: 14px;
    }
    .font3 {
      font-size: 16px;
    }
    .font4 {
      font-size: 18px;
    }
    .font5 {
      font-size: 20px;
    }
    .bfont {
      font-weight: bold;
    }


  }

  .el-menu--dark{
    background: #023c64;
  }
  .el-menu--horizontal.el-menu--dark .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu__title:hover{
    background: #023c64;
  }
  .el-menu{
    -webkit-border-radius:0;
    -moz-border-radius:0;
    border-radius:0;
  }
  /*.el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{*/
    /*color: white;*/
  /*}*/
  .el-table tr,.el-table th>.cell,.el-table__footer-wrapper tbody td{
    background: #023c64;
    color: #fff;
  }
  .el-table th>.cell,.el-table th{
    background-color:#198bfe;
  }
</style>
