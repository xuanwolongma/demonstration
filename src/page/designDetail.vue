<template>
  <div class="design">
    <div class="numberSum">
       <div class="taglabe">人力情况</div>
       <div class="labelStyle">
         <div>截止至2017年7月：</div>
         <div>（1）总人数<span style="color: #198bfe;font-weight: bolder;">3108</span>名。</div>
         <div>（2）人员变动趋势（季度）</div>
       </div>
       <div id="hunmanDetail"></div>
    </div>
    <div class="numberSum">
      <div class="taglabe">人员分布</div>
      <div class="labelStyle">
        <div>设计系统共有员工<span style="color: #198bfe;font-weight: bolder;">3108</span>名,其中:</div>
      </div>
      <div id="hrfb"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: 'hunmaNum',
  data(){
    return{
      activeName:"first",

    }
  },
  methods:{
    handleClick(){
      console.log("click");
    }
  },
  activated (){
    let hunmanDetail = echarts.init(document.getElementById('hunmanDetail'));
    let hroption = {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function (params) {
          // console.log(b[i]);
          for (var i = 0, l = hroption.xAxis[0].data.length; i < l; i++) {
            // console.log(b[i]);
            if (hroption.xAxis[0].data[i] == params[0].name){
              return params[0].name + '<br/>'+
                "人数：" + params[0].value;
            }
          }
        }
      },
      grid: {
        x: 60,
        y: 25,
        x2: 20,
        y2: 50,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        borderColor: 'white'
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ["14年年终","15年一季度","15年二季度","15年三季度","15年年终","16年一季度","16年二季度","16年三季度","16年年终","17年一季度","17年二季度","现有"],
          axisLine:{
            show:false,
          },
          axisTick :{
            show:false,
          },
          splitLine : {
            show:false,
          },
          axisLabel:{
            interval: 0,//标签设置为全部显示
            formatter:function(params){
              var newParamsName = "";// 最终拼接成的字符串
              if(params)
              {
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  /** 循环每一行,p表示行 */
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";// 表示每一次截取的字符串
                    var start = p * provideNumber;// 开始截取的位置
                    var end = start + provideNumber;// 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;// 最终拼成的字符串
                  }

                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
                //将最终的字符串返回
              }

              return newParamsName;
            },
            textStyle:{color:"#fff"}
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel : {
            formatter: '{value}',
            margin : 16,
            textStyle:{color:"#fff"}
          },
          axisLine:{
            show:false,
          },
          axisTick :{
            show:false,
          },
          scale : true,
          splitNumber:4,
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#ddd']
            }
          }
        }
      ],
      label:{
        normal:{
          show: true,
          position: 'top',
          textStyle :{
            color :'#008BDE',
          }
        },
        emphasis:{
          show: true,
          position: 'top',
          textStyle :{
            color :'#008BDE',
          }
        },
      },
      series : [
        {
          name:'人员变动',
          type:'line',
          data:[1444,1492,1485,1531,1612,1753,1853,1956,2145,2784,3022,3200],
//          symbol:'image://assets/circleblue.png',
          symbolSize: function (value,pra){
            return Math.round((pra.name.indexOf('年终')!=-1 || pra.name.indexOf('现有')!=-1?13:4)*2);
          },
          smooth :false,
          itemStyle : {
            normal : {
              color : "#2794D7",
            }
          }
        }
      ]
    };
    hunmanDetail.setOption(hroption);
    let hrfbEchart = echarts.init(document.getElementById('hrfb'));
    let fboption = {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        }
      },
      grid: {
        x: 20,
        y: 15,
        x2: 20,
        y2: 50,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        borderColor: 'white'
      },
      label:{
        normal:{
          show: true,
          position: 'top',
          textStyle :{
            color :'#008BDE',
          }
        },
        emphasis:{
          show: true,
          position: 'top',
          textStyle :{
            color :'#F94B64',
          }
        },
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          data : ["博意设计院","设计研究院","研发设计中心","海外设计院","装修设计院","人力资源部"],
          show:true,
          axisLine:{
            show:false,
          },
          axisTick:{
            show:false,
          },
          splitLine:{
            show:false,
          },
          axisLabel:{
            interval: 0,//标签设置为全部显示
            formatter:function(params){
              var newParamsName = "";// 最终拼接成的字符串
              if(params)
              {
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 3;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  /** 循环每一行,p表示行 */
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";// 表示每一次截取的字符串
                    var start = p * provideNumber;// 开始截取的位置
                    var end = start + provideNumber;// 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;// 最终拼成的字符串
                  }

                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
              }
              //将最终的字符串返回
              return newParamsName;
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          show:false,
          splitLine:{
            show:false,
          },
        }
      ],
      series : [
        {
          name:'',
          type:'bar',
          data:[2210,400,300,400,645,290],
          barWidth : 15,//柱图宽度
          itemStyle:{
            normal:{
              color:'#008BDE',
              barBorderRadius:[8, 8, 8, 8],
            },
            emphasis:{
              color:'#F94B64',
              barBorderRadius:[8, 8, 8, 8],
            },
          },
        },

      ]
    };
    hrfbEchart.setOption(fboption);
  }
}
</script>

<style  lang="scss">
  .design{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    margin-top: 45px;
    color:white;
    margin-top:45px;
    .top_title{
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
    }
  }
 .title{
   font-size: 20px;
   margin-left: 90px;
 }
 .itembg{
   background-color:#023c64;
   border:#184e7d 2px solid;
 }
 .numberSum{
   width: 100%;
   margin-top:10px;
 }

 .taglabe{
   padding-left: 10px;
   font-size: 16px;
   height: 30px;
   line-height: 30px;
   width: 40%;
   border-radius: 0 30px 0 0;
   background-color: #198bfe;
 }
 #hrfb,#hunmanDetail{
   width: 100%;
   height: 300px;
 }
 .labelStyle{
   font-size: 12px;
   margin-left: 10px;
   margin-top: 5px;
   margin-bottom: 10px;
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
