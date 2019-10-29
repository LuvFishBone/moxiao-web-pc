export default {
  succ:function(msg="", data={}){
    return {
        code:0,
        data:data,
        msg:msg
    }
  },
  err:function(msg="请求参数有错"){
    return {
        code:110,
        data:{},
        msg:msg
    }
  },
  out:function(msg="请重新登录"){
    return {
        code:120,
        data:{},
        msg:msg
    }
  }
}