<!--成本中心&#45;&#45;关键指标-->
<template>
  <div class="cost">
    <div class="titlezb">
      <div class="toptitlestyle">关键指标</div>
    </div>
    <div class="numberSum">
      <div class="titles">统计</div>
      <div class="tj_left">
         <div>一级项目</div>
         <div class="color1">517<span>个</span></div>
      </div>
      <div class="border_shu"></div>
      <div class="tj_right">
        <div >一级项目</div>
        <div class="color1">517<span>个</span></div>
      </div>
    </div>
    <div class="cards height1">
      <el-row class="cards_item">
        <el-col :span="14"class="cards_title">成本偏差率</el-col>
        <el-col :span="10"class="cards_title_1">-3.02  <span class="color2" style="font-size: 13px">%</span></el-col>
      </el-row>
      <div class="kpztdiv04">
        <ul>
          <li class="clearfix">
            <div class="kpztdiv07"><span class="font05">本年目标</span></div>
            <div class="kpztdiv08"><el-progress :percentage="100" :text-inside="true" :show-text="false" ></el-progress></div>
            <div class="kpztdiv09"><span class="font04"  >6885.79</span><span class="color3">亿</span></div>
          </li>
          <li class="clearfix">
            <div class="kpztdiv07"><span class="font05">动态成本</span></div>
            <div class="kpztdiv08"><el-progress :percentage="90" :text-inside="true" :show-text="false"></el-progress></div>
            <div class="kpztdiv09"><span class="font04"  >6647.79</span><span class="color3">亿</span></div>
          </li>
          <li class="clearfix">
            <div class="kpztdiv07"><span class="font05">追加项目数</span></div>
            <div class="kpztdiv08"><el-progress :percentage="23" :text-inside="true" :show-text="false"></el-progress></div>
            <div class="kpztdiv09"><span class="font04"  >55</span><span class="color3">个</span></div>
          </li>
          <li class="clearfix">
            <div class="kpztdiv07"><span class="font05">追加率</span></div>
            <div class="kpztdiv08"><el-progress :percentage="15" :text-inside="true" :show-text="false"></el-progress></div>
            <div class="kpztdiv09"><span class="font04"  >1.5</span><span class="color3">%</span> </div>
          </li>
        </ul>
      </div>
      <span class="fenge">数据所属周期，7月拍照数据</span>
    </div>

    <div class="cards height2" style="margin-top: 20px">
      <el-row  class="cards_item">
        <el-col :span="14" class="cards_title">审批超付金额</el-col>
        <el-col :span="10"class="cards_title_1">15.00 <span class="color2" style="font-size: 13px">亿</span></el-col>
      </el-row>
      <div class="kpztdiv04">
        <ul>
          <li class="clearfix" style=" margin-top: 20px;">
            <div class="kpztdiv07"><span class="font05">实付超付金额</span></div>
            <div class="kpztdiv08"><el-progress :percentage="70" :text-inside="true" :show-text="false" ></el-progress></div>
            <div class="kpztdiv09"><span class="font04"  >8.79</span><span class="color3">亿</span></div>
          </li>
        </ul>
      </div>

      <span class="fenge"  >数据所属周期，7月拍照数据</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cost',
    data(){
      return{
        activeName:"first",
      }
    },
    methods:{

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
    position: fixed;
    .titlezb {
      height: 45px;
      border-bottom: 1px solid #ccc;
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

    .title {
      font-size: 20px;
      margin-left: 10px;
    }
    .top_title{
      height: 50px;
      line-height: 50px;
      text-align: left;
      color: #fff;
    }
    .numberSum{
      width: 90%;
      height: 90px;
      text-align: center;
      margin: 15px 5% 0;
      .titles{
          font-size: 16px;
      }
      .tj_left{
        float: left;
        width: 50%;
      }
      .tj_right{
        float: right;
        width: 50%;
      }
      span{
        font-size: 13px;
        padding-left: 10px;
        color: #fff;
      }

    }

    .border_shu{
      display: inline-block;
      width: 46%;
      height: 40px;
      position: absolute;
      left: 15px;
      border-right: 1px solid #315678;
      margin-top: 10px;
    }

    .kpztdiv04 {
      ul {
        background-color: #1C3A56;
        border-radius: 0 0 5px 5px;
      }
      li {
        width: 100%;
        padding: 8px 0;
      }
      .kpztdiv07 {
        width: 30%;
        float: left;
        color: #EEF0F0;
        padding-left: 4%;
        font-size: 13px;
      }
      .kpztdiv08 {
        width: 47%;
        float: left;
      }
      .kpztdiv09 {
        float: left;
        color: #C0E8F6;
        padding-left: 2%;
        font-size: 14px;
      }
    }
    .outfont{
      color: #f19115;
      font-weight: bold;
    }
    .cards{
      background: #1C3A56;
      margin: 0 15px;
    }
    .height1{
      height: 215px;
    }
    .height2{
      height: 134px;
    }

    .fenge{
      margin: 0px 10px 0;
      font-size: 12px;
      color: #A8BACB;
      float: right;
      position: relative;
      top: 8px;
    }
    .cards_item{
      position: relative;
      width: 100%;
      height: 40px;
      background: #497FAB;
      border-radius: 5px 5px 0 0;
      line-height: 40px;
      padding: 0 9% 0 3%;
    }
    .cards_item_1{
      padding-top: 10px;
    }
    .cards_item_1_right{
      float: right;
    }
    .cards_title{
      font-size: 14px;
    }
    .cards_title_1{
      color: #f19115;
      font-size: 18px;
      text-align: right;
    }
    .color1{
      color: #f19115;
    }
    .color2{
      color: #fff;
    }
    .color3{
      color: #F2F0F0;
      padding-left: 5px;
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
      font-size: 16px;
    }
    .el-progress-bar__outer {
      background-color: #002244 !important;
    }
    .el-progress-bar__inner {
      background-color: #FFA820 !important;
    }

  }

</style>
