<!--财资中心&#45;&#45;资金日报-->
<template>
  <div class="crashReports">
    <div class="header">
      <div class="title">资金日报</div>
      <div><input v-model="date" type="text" name="date" id="date" class="btn btn-primary01 date ng-pristine ng-untouched ng-valid" readonly=""></div>
    </div>

    <el-tabs v-model="activeName"   @tab-click="handleClick">
      <el-tab-pane label="整体" name="first">
        <el-table :data="tableData3" border style="width: 100%"  height="250">
          <el-table-column  fixed  prop="date"  label="项目名称" width="100"> </el-table-column>
          <el-table-column  prop="name"  label="合计" width="80"> </el-table-column>
          <el-table-column prop="province"  label="境内(折算人民币)"  width="100"> </el-table-column>
          <el-table-column prop="city" label="境外(折算人民币)"  width="100">  </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="境内" name="second">
        <el-table :data="tableData4" border style="width: 100%"  height="250">
          <el-table-column  fixed  prop="date"  label="项目名称" width="150"> </el-table-column>
          <el-table-column  prop="name"  label="合计" width="80"> </el-table-column>
          <el-table-column prop="province"  label="人民币"  width="80"> </el-table-column>
          <el-table-column prop="city" label="美元"  width="80">  </el-table-column>
          <el-table-column prop="address"  label="港币"  width="80"> </el-table-column>
          <el-table-column  prop="zip" label="澳币"  width="80"> </el-table-column>
          <el-table-column  prop="mb" label="马币"  width="80"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="境外" name="third">
        <el-table :data="tableData5" border style="width: 100%"  height="250">
          <el-table-column  fixed  prop="date"  label="项目名称" width="150"> </el-table-column>
          <el-table-column  prop="name"  label="合计" width="80"> </el-table-column>
          <el-table-column prop="province"  label="人民币"  width="80"> </el-table-column>
          <el-table-column prop="city" label="美元"  width="80">  </el-table-column>
          <el-table-column prop="address"  label="港币"  width="80"> </el-table-column>
          <el-table-column  prop="zip" label="澳币"  width="80"> </el-table-column>
          <el-table-column  prop="mb" label="马币"  width="80"> </el-table-column>
          <el-table-column  prop="jb" label="加币"  width="80"> </el-table-column>
          <el-table-column  prop="xb" label="新币"  width="80"> </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        date:'2017-08-03',
        tableData3: [{date: '属于公司总金额',name: '1004.84',province: '850.20',city: '154.64'},
          {date: '1.房产板块',name: '786.78',province: '741.79',city: '44.99'},
          {date: '2.建筑装修板块',name: '25.22',province: '25.22',city: '0.00'},
          {date: '3.物业管理板块',name: '18.87',province: '18.87',city: '0.00'},
          {date: '4.酒店及主题公园板块',name: '21.07',province: '21.07',city: '0.00'},
          {date: '5.其他板块',name: '152.90',province: '43.25',city: '109.65'},
          {date: '已确定用途/限制用途资金',name: '824.25',province: '767.00',city: '57.25'},
          {date: '1.银行贷款(外包项目)',name: '0.00',province: '0.00',city: '0.00'},
          {date: '2.银行贷款(腾越承建项目)',name: '34.74',province: '34.74',city: '0.00'},
          {date: '3.楼款监控资金(银行监控)',name: '50.98',province: '50.98',city: '0.00'},
          {date: '4.楼款监控资金(政府监控)',name: '428.01',province: '428.01',city: '0.00'},
          {date: '5.物业维修基金',name: '0.19',province: '0.19',city: '0.00'},
          {date: '6.质押保证金',name: '148.72',province: '148.72',city: '0.00'},
          {date: '7.合资公司',name: '91.07',province: '91.07',city: '0.00'},
          {date: '8.境外人民币',name: '9.35',province: '9.35',city: '0.00'},
          {date: '剩余可动用资金',name: '180.60',province: '83.20',city: '97.40'}],
        tableData4: [{date: '属于公司总金额',name: '850.20',province: '846.26',city: '0.58',address:'0.04',zip:'0.00',mb:'0.00'},
          {date: '1.房产板块',name: '741.79',province: '738.20',city: '0.53',address:'0.04',zip:'0.00',mb:'0.00'},
          {date: '2.建筑装修板块',name: '25.22',province: '24.91',city: '0.05',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '3.物业管理板块',name: '18.87',province: '18.87',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '4.酒店及主题公园板块',name: '21.07',province: '21.04',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '5.其他板块',name: '43.25',province: '43.25',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '已确定用途/限制用途资金',name: '767.00',province: '763.06',city: '0.58',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '1.银行贷款(外包项目)',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '2.银行贷款(腾越承建项目)',name: '34.74',province: '34.74',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '3.楼款监控资金(银行监控)',name: '50.98',province: '50.98',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '4.楼款监控资金(政府监控)',name: '428.01',province: '428.01',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '5.物业维修基金',name: '0.19',province: '0.19',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '6.质押保证金',name: '148.72',province: '148.72',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '7.合资公司',name: '91.07',province: '91.07',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '8.境外人民币',name: '9.35',province: '9.35',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '9.外币(按政策要求外币)',name: '3.94',province: '0.00',city: '0.58',address:'0.00',zip:'0.00',mb:'0.00'},
          {date: '剩余可动用资金',name: '180.60',province: '83.20',city: '97.40',address:'0.00',zip:'0.00',mb:'0.00'}],
        tableData5: [{date: '属于公司总金额',name: '154.64',province: '0.00',city: '15.81',address:'3.68',zip:'0.76',mb:'25.53',jb:'0.01',xb:'0.08'},
          {date: '1.房产板块',name: '44.99',province: '0.00',city: '0.02',address:'0.04',zip:'0.76',mb:'25.53',jb:'0.00',xb:'0.08'},
          {date: '2.建筑装修板块',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '3.物业管理板块',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '4.酒店及主题公园板块',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '5.其他板块',name: '109.65',province: '0.00',city: '3.68',address:'3.68',zip:'0.00',mb:'0.00',jb:'0.01',xb:'0.00'},
          {date: '已确定用途/限制用途资金',name: '52.25',province: '0.00',city: '0.58',address:'0.00',zip:'2.71',mb:'27.03',jb:'0.00',xb:'0.00'},
          {date: '1.银行贷款(外包项目)',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '2.银行贷款(腾越承建项目)',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '3.楼款监控资金(银行监控)',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '4.楼款监控资金(政府监控)',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '5.物业维修基金',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '6.质押保证金',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '7.合资公司',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '8.境外人民币',name: '0.00',province: '0.00',city: '0.00',address:'0.00',zip:'0.00',mb:'0.00',jb:'0.00',xb:'0.00'},
          {date: '9.外币(按政策要求外币)',name: '154.64',province: '0.00',city: '15.81',address:'3.68',zip:'0.76',mb:'25.53',jb:'0.01',xb:'0.08'},
          {date: '剩余可动用资金',name: '97.40',province: '0.00',city: '15.81',address:'3.68',zip:'-1.94',mb:'-1.50',jb:'0.01',xb:'0.08'}]
      }
    },
    methods:{
      handleClick(){
        console.log(111);
      }
    }
  }
</script>

<style  lang="scss">
  .crashReports{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color:white;
    margin-top: 45px;
    .top_title{
      height: 50px;
      line-height: 50px;
      text-align: left;
      color: #fff;
    }
    .title {
      font-size: 20px;
      margin-left: 30px;
    }

    .el-tabs__item {
      padding: 0px 60%;
    }

    .header {
      line-height: 50px;
      height: 50px;
      font-size: 14px;
      color: #FFF;
      padding-left: 5px;
      padding-right: 5px;
      width: 100%;
      z-index: 0;
      border-bottom: 1px #ddd solid;
    }
    .title {
      color: #fff;
      float: left;
      font-size: 16px;
      margin-left: 5%;
    }
     .date {
      float: right;
      height: 30px;
      text-align: center;
      width: 28%;
      margin-top: 12px;
    }
    .btn-primary01 {
      color: #fff;
      background-color: #47c3ff;
      border-color: #47c3ff;
    }
    .btn {
      display: inline-block;
      padding: 6px 0px;
      width: 120px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
    }

    .el-tabs__nav-scroll {
      background: #023C64;
    }
    .el-table {
      height: 500px !important;
      font-size: 12px  !important;
    }
    .el-table .cell,
    .el-table th>div {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .el-table--enable-row-transition .el-table__body td {
      text-align: center;
    }
    .el-table--enable-row-transition .el-table__body .el-table_1_column_5,
    .el-table--enable-row-transition .el-table__body .el-table_1_column_12,
    .el-table--enable-row-transition .el-table__body .el-table_1_column_1 {
      text-align: left;
      background-color: #ccc;
    }
    .el-table--enable-row-transition .el-table__body .el-table_1_column_6,
    .el-table--enable-row-transition .el-table__body .el-table_1_column_13,
    .el-table--enable-row-transition .el-table__body .el-table_1_column_2 {
      font-weight: 700;
    }
    .el-table tr th {
      text-align: center;
      background-color: #47c3ff;
    }
    .el-table__footer-wrapper thead div,
    .el-table__header-wrapper thead div {
      background-color: #47c3ff;
      color: white;
    }
    .el-table__fixed-header-wrapper thead div {
      background-color: #47c3ff;
      color: white;
    }

  }
</style
