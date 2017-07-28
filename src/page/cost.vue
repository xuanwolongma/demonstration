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
        <el-col :span="10"class="cards_title">成本偏差率</el-col>
        <el-col :span="6"class="">-3.02%</el-col>
        <el-col :span="6"class="">-3.02%</el-col>

      </el-row>
    </div>
    <div class="fenge">数据所属周期，7月拍照数据</div>
    <div class="cards">
      <el-row  class="cards_item">
        <el-col :span="16" class="cards_title">审批超付金额</el-col>
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
    }
    .cards_title{
      font-size: 20px;
      font-weight: bold;
    }
  }
 .title{
   font-size: 20px;
   margin-left: 30px;
 }
 .itembg{
   background-color:#023c64;
   border:#184e7d 2px solid;
 }

 .textStyle{
   font-size: 13px;
   margin-left: 10px;
   padding-left: 0;
   text-align: left;
   margin-bottom: 10px;
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
 .time{
   margin-left: 10px;
   font-size: 14px;
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
