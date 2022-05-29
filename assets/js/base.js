//接受的是一个对象,请求的所有数据
$.ajaxPrefilter(function (options) {
    //发起请求之前,封装路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // console.log(options);
    //
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }

    }
    options.complete = function (res) {
        // console.log(res);
        if (
            res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！'
        ) {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
    }


})