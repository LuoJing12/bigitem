//接受的是一个对象,请求的所有数据
$.ajaxPrefilter(function(options){
    //发起请求之前,封装路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // console.log(options);
})