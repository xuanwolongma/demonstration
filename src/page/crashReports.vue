<!--财资中心&#45;&#45;资金日报-->
<template>
  <div class="crashReports">
    <div class="header">
      <div class="title">资金日报</div>
      <div><input v-model="date" type="text" name="date" id="date" class="btn btn-primary01 date ng-pristine ng-untouched ng-valid" readonly=""></div>
    </div>

    <el-tabs v-model="activeName"   @tab-click="handleClick">
      <el-tab-pane label="整体" name="first">
          <el-table :data="tableData" border style="width: 100% "  height="450">
            <el-table-column  prop="region"  label="项目名称" width="135"> </el-table-column>
            <el-table-column  prop="f0"  label="合计" width="90"> </el-table-column>
            <el-table-column  prop="f1"  label="境内"  width="80"> </el-table-column>
            <el-table-column  prop="f2" label="境外"  width="80">  </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="境内" name="second">
        <el-table :data="tableData2" border style="width: 100% "  height="450">
          <el-table-column  fixed  prop="region"  label="项目名称" width="150"> </el-table-column>
          <el-table-column  prop="f0"  label="合计" width="90"> </el-table-column>
          <el-table-column prop="f1"  label="人民币"  width="90"> </el-table-column>
          <el-table-column prop="f2"  label="美元"  width="90"> </el-table-column>
          <el-table-column prop="f3" label="港元"  width="90">  </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="境外" name="third">
        <el-table :data="tableData3" border style="width: 100% "  height="450">
          <el-table-column  fixed  prop="region"  label="项目名称" width="130"> </el-table-column>
          <el-table-column  prop="f0"  label="合计" width="90"> </el-table-column>
          <el-table-column prop="f1"  label="人民币"  width="90"> </el-table-column>
          <el-table-column prop="f2"  label="美元"  width="90"> </el-table-column>
          <el-table-column prop="f3" label="港元"  width="90">  </el-table-column>
          <el-table-column prop="f3" label="澳元"  width="90">  </el-table-column>
          <el-table-column prop="f4" label="马币"  width="90">  </el-table-column>
          <el-table-column prop="f5" label="加币"  width="90">  </el-table-column>
          <el-table-column prop="f6" label="新币"  width="90">  </el-table-column>
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
        tableData:[
          {  region: "属于公司总金额", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "1.地产板块", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "2.建筑装修板块" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "3.物业管理板块" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "4.酒店及主题公园板块" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "5.其他板块" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          ],
        tableData2:[
          {  region: "已确定用途/限制用途资金" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "1.银行贷款(外包项目)" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "2.银行贷款(腾越承建项目)" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "4.楼款监控资金(政府监控)", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "5.物业维修基金", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "6.质押保证金", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "7.合资公司", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "8.境外人民币", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "9.外币(按政策要求外币有限制使用)", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "10.香港地区", f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          ],
        tableData3:[
          {  region:"马来西亚区域"  , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "美国区域" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region: "加拿大区域"  , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
          {  region:  "澳大利亚区域" , f0: "149.57", f1: "0.00", f2: "15.25","f3":"3.68","f4":"0.76","f5":"25.10","f6":"0.01","f7":"0.09",},
        ],
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

  }

</style>
