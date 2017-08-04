<template>
  <div class="hunmaNum">
    <div class="top_title">
      <span class="title">集团人力日报</span>
      <span class="time">2017-07-25</span>
    </div>
    <div class="numberSum">
       <div class="taglabe">人员概况</div>
       <div style="text-align: center;height: 45px;line-height: 45px;">
          <span style="font-size: 18px;">集团总人数</span>
          <span style="color: #f19115;font-weight: bold;font-size: 20px;">14342324</span>
          <span style="font-size: 18px;">人</span>
       </div>
    </div>
    <div>
      <div style="height: 80px;">
        <el-row>
          <el-col :span="12">
            <div class="itembg" style="height: 80px;">
               <div style="margin-left: 5px;line-height: 30px;font-size: 14px;">核心业务人员</div>
               <div style="text-align: center;line-height: 40px;">
                 <span style="color: #f19115;font-size: 20px;">232324人</span>
               </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="itembg" style="height: 80px;">
              <div style="margin-left: 5px;line-height: 30px;font-size: 14px;">营销人员</div>
              <div style="text-align: center;line-height: 40px;">
                <span style="color: #f19115;font-size: 20px;">14324人</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="height: 80px;">
        <el-row>
          <el-col :span="12">
            <div class="itembg" style="height: 80px;">
              <div style="margin-left: 5px;line-height: 30px;font-size: 14px;">酒店人员</div>
              <div style="text-align: center;line-height: 40px;">
                <span style="color: #f19115;font-size: 20px;">2323人</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="itembg" style="height: 80px;">
              <div style="margin-left: 5px;line-height: 30px;font-size: 14px;">物业人员</div>
              <div style="text-align: center;line-height: 40px;">
                <span style="color: #f19115;font-size: 20px;">54324人</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="margin-top: 10px;margin-bottom: 55px;">
      <div class="taglabe">人员明细</div>
      <div style="text-align: center;margin-top: 10px;">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <div class="textStyle">截止2017年07月25日,集团人数如下:</div>
          <el-tab-pane label="表格模式" name="first">
            <el-table
              :data="tableData6"
              border
              show-summary
              style="width: 100%">
              <el-table-column
                prop="id"
                label="ID"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                label="数值1">
              </el-table-column>
              <el-table-column
                prop="amount2"
                label="数值2">
              </el-table-column>
              <el-table-column
                prop="amount3"
                label="数值3">
              </el-table-column>
            </el-table>
            <div class="textStyle">注:房产基层人员428人,含总部后勤及装修监控部分234人,编制在区域的会所,酒店筹建,绿化等159人</div>
          </el-tab-pane>
          <el-tab-pane label="文本模式" name="second">文本模式</el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hunmaNum',
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
  .hunmaNum{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color:white;
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
   height: 80px;
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
