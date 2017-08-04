<!--财资中心&#45;&#45;关键指标-->
<template>
  <div class="Cdcapital">
    <div class="main bttn">
      <div class="zjye" ng-click="reportClick('CW002','资金日报','crash')">
        <span class="zj_text"><span class=" ">07月26日</span>资金余额</span>
        <span class="num_text cl1"><b><span   class=" ">945</span></b>亿元</span>
        <span class="next"><img src="../assets/in_01.png"></span>
      </div>
      <div class="content">
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">40</span></span>
            <span class="cl3">境内可动用</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">99</span></span>
            <span class="cl3">境外可动用</span>
          </div>
        </div>
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">751</span></span>
            <span class="cl3">境内受限制</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">56</span></span>
            <span class="cl3">境外受限制</span>
          </div>
        </div>

        <div class="updatetime cl3 font2">数据更新时间:<span   class="">2017-07-26</span></div>
      </div>
    </div>
    <div class="main bttn">     <!--本月楼款回笼-->
      <div class="zjye" >
        <span class="zj_text"><span class="">07月</span>经营性净现金流</span>
        <span class="num_text cl1"><b><span  class="">122</span></b>亿元</span>
        <span class="next"><img src="../assets/in_01.png"></span>
      </div>
      <div class="content">
        <table class="table" style="width:100%;">
          <tbody><tr>
            <td></td>
            <td class="">29日</td>
            <td class="">7月</td>
            <td class="">2017年</td>
          </tr>
          <tr>
            <td>楼款回笼</td>
            <td><span class="cl2"><span  class="">0.9</span></span></td>
            <td><span class="cl2"><span  class="">314</span></span></td>
            <td><span class="cl2"><span   class="">2510</span></span></td>
          </tr>
          <tr>
            <td>工程材料</td>
            <td><span class="cl2"><span   class="">-0.0</span></span></td>
            <td><span class="cl2"><span   class="">119</span></span></td>
            <td><span class="cl2"><span   class="">661</span></span></td>
          </tr>
          <tr>
            <td>土地款</td>
            <td><span class="cl2"><span   class="">0.0</span></span></td>
            <td><span class="cl2"><span   class="">417</span></span></td>
            <td><span class="cl2"><span   class="">1892</span></span></td>
          </tr>
          <tr>
            <td style="line-height: 20px;">经营性净<br>现金流</td>
            <td><span class="cl2"><span   class="">0.9</span></span></td>
            <td><span class="cl2"><span   class="">122</span></span></td>
            <td><span class="cl2"><span   class="">1423</span></span></td>
          </tr>
          </tbody></table>
        <div class="updatetime cl3 font2">数据更新时间:<span   class="">2017-07-29</span></div>
      </div>
    </div>
    <div class="main bttn">     <!--贷款余额-->
      <div class="zjye">
        <span class="zj_text"><span class="">02月28日</span>贷款余额</span>
        <span class="num_text cl1"><b><span  class=" ">2236</span></b>亿元</span>
      </div>
      <div class="content">
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">958</span></span>
            <span class="cl3">表内融资余额（境内）</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">442</span></span>
            <span class="cl3">表内融资余额（境外）</span>
          </div>
        </div>
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">836</span></span>
            <span class="cl3">表外融资余额（境内）</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">3</span></span>
            <span class="cl3 ">02月供应链融资贷入金额</span>
          </div>
        </div>
        <div class="updatetime cl3 font2">数据更新时间:<span   class="">2017-02-28</span></div>
      </div>
    </div>
    <div class="main bttn">     <!--沉淀资金-->
      <div class="zjye"  >
        <span class="zj_text"><span class=""></span>沉淀资金</span>
        <span class="num_text cl1"><b><span   class="">1767</span></b>亿元</span>
        <span class="next"><img src="../assets/in_01.png"></span>
      </div>
      <div class="content">
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">427.96</span></span>
            <span class="cl3">超期欠款</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">74.01</span></span>
            <span class="cl3">土地储备款</span>
          </div>
        </div>
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">686.95</span></span>
            <span class="cl3">未超期欠款</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">7.79</span></span>
            <span class="cl3">工程借款代垫款</span>
          </div>
        </div>
        <div class="items">
          <div class="jnleft" style="height:80px;">
            <span class="cl2"><span   class="">570.42</span></span>
            <span class="cl3" style="line-height:20px;">预售监控款及<br>质押保证金</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">84.02</span></span>
            <span class="cl3">合资项目沉淀资金</span>
          </div>
        </div>
        <div class="updatetime cl3 mt1 font2" style="height:80px;">注:超期欠款、未超期欠款、预售监控资金数据更新时间为:<span ng-bind="dateo" class="">2017-07-29</span>
          ,工程借款代垫款、土地储备款数据更新时间为:<span   class="">2017-03-31</span>
          ,合资项目沉淀资金数据更新时间为:<span   class="">2017-07-27</span></div>
      </div>
    </div>
    <div class="main bttn">     <!--沉淀资金-->
      <div class="zjye"  >
        <span class="zj_text"><span class=""></span>沉淀资金</span>
        <span class="num_text cl1"><b><span  class="">1767</span></b>亿元</span>
        <span class="next"><img src="../assets/in_01.png"></span>
      </div>
      <div class="content">
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">427.96</span></span>
            <span class="cl3">超期欠款</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">74.01</span></span>
            <span class="cl3">土地储备款</span>
          </div>
        </div>
        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">686.95</span></span>
            <span class="cl3">未超期欠款</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">7.79</span></span>
            <span class="cl3">工程借款代垫款</span>
          </div>
        </div>
        <div class="items">
          <div class="jnleft" style="height:80px;">
            <span class="cl2"><span   class="">570.42</span></span>
            <span class="cl3" style="line-height:20px;">预售监控款及<br>质押保证金</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">84.02</span></span>
            <span class="cl3">合资项目沉淀资金</span>
          </div>
        </div>
        <div class="updatetime cl3 mt1 font2" style="height:80px;">注:超期欠款、未超期欠款、预售监控资金数据更新时间为:<span ng-bind="dateo" class="">2017-07-29</span>
          ,工程借款代垫款、土地储备款数据更新时间为:<span  class="">2017-03-31</span>
          ,合资项目沉淀资金数据更新时间为:<span  class="">2017-07-27</span></div>
      </div>
    </div>
    <div class="main bttn">     <!--回款奖罚-->
      <div class="zjye"  >
			<span class="zj_text hkjf">
				<span style="display: inline-block;font-size: 20px;"   class="">07月</span>回款奖罚
				<span class="zzhj">(最终奖罚合计)</span>
			</span>
        <span class="num_text cl1"><b><span   class="">-632</span></b>万元</span>
        <span class="next"><img src="../assets/in_01.png"></span>
      </div>
      <div class="content">

        <div class="items">
          <div class="jnleft">
            <span class="cl2"><span   class="">798</span></span>
            <span class="cl3">回款奖罚</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">-770</span></span>
            <span class="cl3">欠款处罚</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">-238</span></span>
            <span class="cl3">监控资金奖罚</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">-318</span></span>
            <span class="cl3">累计滚动回款率奖罚</span>
          </div>
          <div class="jnleft">
            <span class="cl2"><span   class="">-105</span></span>
            <span class="cl3">合资项目沉淀资金奖罚</span>
          </div>
        </div>

        <div class="updatetime cl3 font2">数据更新时间:<span   class="">2017-07-29</span></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Cdcapital',
    data(){
      return{
        activeName:"first",
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
  .Cdcapital{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color:white;
    padding-bottom: 75px;
  .top_title{
    height: 50px;
    line-height: 50px;
    text-align: left;
    color: #fff;
  }

     .main{
      width: 100%;
       background: #023C64;
    }
     .main .zjye{
      position: relative;
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding: 0 9% 0 3%;
      border-bottom: 1px solid #ccc;
    }
     .main .zjye .next{
      position: absolute;
      display: inline-block;
      width: 18px;
      height: 18px;
      line-height: 45px;
      top: 10px;
      right: 28px;
    }
     .zjye .next img{
      height: 100%;
    }
     .zj_text{
      float: left;
      font-size: 20px;
    }
     .num_text{
      display: inline-block;
      float: right;
      height: 60px;
      overflow: hidden;
      text-align: right;
      padding-right: 20px;
    }
     .num_text b{
      padding-right: 5%;
      font-size: 26px;
      font-weight: normal;
    }
     .content{
      width: 100%;
      height: auto;
      overflow: hidden;
    }
     .content .items{
      width: 100%;
      text-align: center;
      overflow: hidden;
    }
     .jnleft{
      display: inline-block;
      width: 50%;
      float: left;
      height: 60px;
    }
     .jnleft span{
      display: block;
      height: 30px;
      line-height: 30px;
    }
     .jnleft span:nth-child(1){
      font-size: 18px;
    }
     .jnleft span:nth-child(2){
      font-size: 16px;
    }
     .updatetime{
      width: 100%;
      height: 25px;
      padding: 0 5% 0 3%;
      margin-top: 3%;
      line-height: 25px;
    }

    .mt1{
      height: 42px;
      line-height: 20px;
    }
    .mt2{
      height: 42px;
      line-height: 20px;
      margin-top: 0px;
    }
    .bttn{
      border-bottom: 6px solid #E5E5E5;
    }
    .hkjf{
      display: inline-block;
      width: 46%;
      line-height: 27px;
      padding-top: 1%;
      text-align: center;
    }
    .hkjf span{
      display: block;
      font-size: 14px;
    }
    .table td{
      padding: 0px;
      border:0px;
      height: 40px;
      line-height: 40px;
      width: 25%;
      text-align: center;
      font-size:16px;
    }
    @media screen and (max-width: 370px ){
      .jnleft span:nth-child(2){
        font-size: 14px;
      }
    }

    .cl1{
      color: #ff9600;
    }
    .cl2{
      color: #0199E5;
    }

    .cl3{
      color: #fff;
    }
  .font1{
    font-size: 12px;
  }
  .font2{
    font-size: 13px;
  }
  .font3{
    font-size: 14px;
  }
  .font4{
    font-size: 16px;
  }
  .font5 {
    font-size: 18px;
  }
  .font6{
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
  .el-table tr,.el-table th>.cell,.el-table__footer-wrapper tbody td{
    background: #023c64;
    color: #fff;
  }
  .el-table th>.cell,.el-table th{
    background-color:#198bfe;
  }
</style>
