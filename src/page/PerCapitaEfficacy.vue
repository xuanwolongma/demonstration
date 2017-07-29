<template>
  <div class="hunmaNum">
    <div class="top_title">
      <span class="title">人均效能</span>
    </div>
    <div class="numberSum">

       <div class="taglabe">人均销售额</div>
       <div class="tabright"><span class="time">2017-07-25</span></div>
    </div>
    <div style="font-size: 14px;">
      <el-row class="textHeight">
        <el-col :span="12">
          <div class="textleft">人均销售额</div>
        </el-col>
        <el-col :span="12">
          <div class="textright"><span style="color: rgb(241, 145, 21);font-weight: bolder;">1665.23</span><span class="unitStyle">万人</span></div>
        </el-col>
      </el-row>
      <el-row class="textHeight">
        <el-col :span="12">
          <div class="textleft">当年累计销售额</div>
        </el-col>
        <el-col :span="12">
          <div class="textright"><span style="color: #198bfe;font-weight: bolder;">33323.45</span><span class="unitStyle">亿元</span></div>
        </el-col>
      </el-row>
      <el-row class="textHeight">
        <el-col :span="12">
          <div class="textleft">区域总人数</div>
        </el-col>
        <el-col :span="12">
          <div class="textright"><span style="color: #198bfe;font-weight: bolder;">193434</span><span class="unitStyle">人</span></div>
        </el-col>
      </el-row>
    </div>
    <div style="font-size: 12px;margin-left: 10px;">(不含入职未满一年的毕业生，未来领袖)</div>
    <div style="margin-top: 10px;margin-bottom: 10px;">
      <div style="text-align: center;margin-top: 10px;">
            <el-table
              :data="tableData6"
              border
              style="width: 100%">
              <el-table-column
                prop="id"
                label="排名"
                width="80"
                >
              </el-table-column>
              <el-table-column
                prop="name"
                label="区域名称">
              </el-table-column>
              <el-table-column
                prop="amount1"
                label="人数"
                 width="80"
              >
              </el-table-column>
              <el-table-column
                prop="amount2"
                label="人均销售额">
              </el-table-column>
            </el-table>
            <div class="textStyle">数据更新时间：2017-07-29 06:40:46</div>
      </div>
    </div>
    <div class="numberSum">

      <div class="taglabe">人均折算开发面积</div>
      <div class="tabright"><span class="time">2017-07-25</span></div>
    </div>
    <div style="font-size: 14px;">
      <el-row class="textHeight">
        <el-col :span="12">
          <div class="textleft">人均折算开发面积</div>
        </el-col>
        <el-col :span="12">
          <div class="textright"><span style="color: rgb(241, 145, 21);font-weight: bolder;">0.73</span><span class="unitStyle">万m2</span></div>
        </el-col>
      </el-row>
      <el-row class="textHeight">
        <el-col :span="12">
          <div class="textleft">折算开发面积</div>
        </el-col>
        <el-col :span="12">
          <div class="textright"><span style="color: #198bfe;font-weight: bolder;">33323.45</span><span class="unitStyle">万m2</span></div>
        </el-col>
      </el-row>
      <el-row class="textHeight">
        <el-col :span="12">
          <div class="textleft">区域总人数</div>
        </el-col>
        <el-col :span="12">
          <div class="textright"><span style="color: #198bfe;font-weight: bolder;">33434</span><span class="unitStyle">人</span></div>
        </el-col>
      </el-row>
    </div>
    <div style="font-size: 12px;margin-left: 10px;">(人数不含海外区域、不含未满一年的碧业生/未来领袖，为上月最后一天数据)</div>
    <div style="margin-top: 10px;margin-bottom: 55px;">
      <div style="text-align: center;margin-top: 10px;">
        <el-table
          :data="tableData6"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="排名"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="折算开发面积">
          </el-table-column>
          <el-table-column
            prop="amount1"
            label="人数"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="amount2"
            label="人均折算开发面积">
          </el-table-column>
        </el-table>
        <div class="textStyle">数据更新时间：2017-07-29 06:40:46</div>
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
        name: '上海',
        amount1: '234',
        amount2: '3.2',
      }, {
        id: '2',
        name: '广州',
        amount1: '165',
        amount2: '4.43',
      }, {
        id: '3',
        name: '浙江',
        amount1: '324',
        amount2: '1.9',
      }, {
        id: '4',
        name: '苏州',
        amount1: '621',
        amount2: '2.2',
      }, {
        id: '5',
        name: '海南',
        amount1: '539',
        amount2: '4.1',
      },
        {
          id: '6',
          name: '安徽',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '7',
          name: '粤东',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '8',
          name: '江中',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '9',
          name: '广清',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '10',
          name: '贵州',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '11',
          name: '上海',
          amount1: '234',
          amount2: '3.2',
        }, {
          id: '12',
          name: '广州',
          amount1: '165',
          amount2: '4.43',
        }, {
          id: '13',
          name: '浙江',
          amount1: '324',
          amount2: '1.9',
        }, {
          id: '14',
          name: '苏州',
          amount1: '621',
          amount2: '2.2',
        }, {
          id: '15',
          name: '海南',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '16',
          name: '安徽',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '17',
          name: '粤东',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '18',
          name: '江中',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '19',
          name: '广清',
          amount1: '539',
          amount2: '4.1',
        },
        {
          id: '20',
          name: '贵州',
          amount1: '539',
          amount2: '4.1',
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
   /*margin-left: 90px;*/
 }
 .textleft{
   margin-left:10px;
 }
 .textright{
   margin-right:20px;
   text-align: right;
 }
 .textHeight{
   height: 25px;
   line-height: 25px;
 }
 .itembg{
   background-color:#023c64;
   border:#184e7d 2px solid;
 }
 .numberSum{
   width: 100%;
   height: 40px;
 }
 .textStyle{
   font-size: 13px;
   margin-left: 10px;
   padding-left: 0;
   text-align: left;
   margin-bottom: 10px;
 }
 .unitStyle{
   margin-left: 5px;
 }
 .taglabe{
   padding-left: 10px;
   font-size: 16px;
   height: 30px;
   line-height: 30px;
   width: 40%;
   border-radius: 0 30px 0 0;
   background-color: #198bfe;
   float: left;
 }
 .tabright{
   float: right;
   height: 30px;
   margin-right: 5%;
 }
 .time{
   margin-left: 10px;
   font-size: 14px;
   vertical-align: -webkit-baseline-middle;
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
    line-height: 20px;
  }
  .el-table td, .el-table th{
    height: 30px;
  }
</style>
