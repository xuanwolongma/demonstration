<template>
  <div class="login">
      <span class="welcome">Welcome</span>
      <div class="line"></div>
      <div class="froms">
        <el-input  placeholder="请输入您的用户名" icon="myselfe " v-model="input1"></el-input>
        <el-input  placeholder="请输入您的密码" icon="mykey "  type="password"  auto-complete="off" v-model="input2"></el-input>
        <el-button type="primary" class="btnColor" size="large" @click="login">登录</el-button>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        input1:"",
        input2:"",
      }
    },
    methods:{
      login(){
        console.log(111);
        this.$router.push('/annualindicator');
      }
    }
  }
</script>

<style lang="scss"  >
  .login{
    /*height: 35px;*/
    width: 100%;
    height: 100%;
    background-image: url('../assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-family: "Microsoft Yahei", sans-serif;
    .welcome{
      display: inline-block;
      font-size: 30px;
      margin-top: 37%;
      margin-left: 30%;
      font-weight: 100;
    }
    .line{
      height: 1px;
      width: 90px;
      background-color: rgba(225, 225, 225, 0.5);
      margin-left: 35%;
      margin-top: 5px;
    }
    .froms{
      width: 84%;
      height: 300px;
      margin-left: 7%;
      margin-top: 20px;

      .el-input{
        margin-top: 30px;
      }
      .el-input__icon{
        left: 30px;
        top: 5px;
      }
      .el-input__icon+.el-input__inner{
        padding-left: 90px;
        height: 45px;
        border-radius: 25px;
        color: #fff;
        background-color:rgba(225, 225, 225, 0.5);
      }

      .el-button--large {
        padding: 15px 19px;
        font-size: 16px;
        border-radius: 24px;
        width: 100%;
        margin-top: 40px;
      }
      .btnColor{
        background-image:-webkit-linear-gradient(to right, #3DD4FF, #46AAFF);
        background-image:linear-gradient(to right,#3DD4FF,#46AAFF);
      }

    }
    [class^="el-icon-myselfe"], [class*="el-icon-myselfe"] {
        background-image: url("../assets/myself.png");
        background-repeat: no-repeat;
        background-size: 90% 70%;
    }
    [class^="el-icon-mykey"], [class*="el-icon-mykey"] {
        background-image: url("../assets/key.png");
        background-repeat: no-repeat;
        background-size: 90% 70%;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #fff;  ;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #fff;
    }

    input:-ms-input-placeholder{
      color: #fff;
    }

    input::-webkit-input-placeholder{
      color: #fff;
    }

  }

</style>
