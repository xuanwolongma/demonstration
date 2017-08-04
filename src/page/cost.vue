<!--成本中心&#45;&#45;关键指标-->
<template>
  <div class="cost">
    <div class="top_title">
      <span class="title">关键指标</span>
    </div>
    <div class="numberSum">
      <div class="numberSum_ch">
        <span>总共统计一级项目</span>
        <span class="outfont">517</span>
        <span >个，</span>
        <span>二级项目</span>
        <span class="outfont">633</span>
        <span >个</span>
      </div>
    </div>
    <div class="cards">
      <el-row class="cards_item">
        <el-col :span="14"class="cards_title">成本偏差率</el-col>
        <el-col :span="10"class="cards_title_1">-3.02  <span style="font-size: 16px">%</span></el-col>
      </el-row>
      <el-row class="cards_item_1">
        <el-col :span="12">
          <span style="padding-right: 10px">目标成本</span><span class="color1 font2 ">6885.79 <span class="font1">亿</span></span>
        </el-col>
        <el-col :span="10">
          <span style="padding-right: 10px">追加率</span><span class="color1 font2 cards_item_1_right">1.55 <span class="font1">%</span></span>
        </el-col>
      </el-row>
      <el-row class="cards_item_1">
        <el-col :span="12">
          <span style="padding-right: 10px">动态成本</span><span class="color1 font2 ">6677.79 <span class="font1">亿</span></span>
        </el-col>
        <el-col :span="10">
          <span style="padding-right: 10px">追加项目数</span><span class="color1 font2 cards_item_1_right">55 <span class="font1">个</span></span>
        </el-col>
      </el-row>
    </div>
    <div class="fenge">数据所属周期，7月拍照数据</div>
    <div class="cards">
      <el-row  class="cards_item">
        <el-col :span="14" class="cards_title">审批超付金额</el-col>
        <el-col :span="10"class="cards_title_1">15.00 <span style="font-size: 16px">亿元</span></el-col>
      </el-row>
      <el-row class="cards_item_1">
        <el-col :span="10" style="text-align: center">
          <div class="color1 font2">8.6</div>
          <div>实付超付金额</div>
        </el-col>
      </el-row>
    </div>
    <div class="fenge">数据截止日期，2017-07-25</div>
  </div>
</template>

<script>
  export default {
    name: 'cost',
    data(){
      return{
        activeName:"first",
        tableData6: [{
          id: '1',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '2',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '3',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '4',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '5',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      }
    },
    methods:{
      handleClick(){
        console.log("click");
      }
    }
  }
</script>

<style  lang="scss">
  .cost{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color:white;
    .top_title{
      height: 50px;
      line-height: 50px;
      text-align: left;
      color: #fff;
    }
    .numberSum{
      width: 100%;
      height: 80px;
    }
    .numberSum_ch{
      text-align: center;
      padding: 0 30px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      background:#023C64;

    }
    .outfont{
      color: #f19115;
      font-weight: bold;
    }
    .cards{
      background: #023C64;
      height: 150px;
      padding: 0 20px;
    }
    .fenge{
      text-align: right;
      padding: 10px 10px;
      font-size: 12px;
      color: #A8BACB;
    }
    .cards_item{
      padding: 15px 0px 0px 15px;
      height: 65px;
      border-bottom: 1px solid;
    }
    .cards_item_1{
      padding-top: 10px;
    }
    .cards_item_1_right{
      float: right;
    }
    .cards_title{
      font-size: 20px;
      font-weight: bold;
    }
    .cards_title_1{
      color: #f19115;
      font-size: 18px;
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
