 var isDevice, whatDevice;

whatDevice = function () {
    // console.log('whatDevic');
    if (Modernizr.mq('(min-width: 1200px)')) {
        return isDevice('large-desktop');
    } else if (Modernizr.mq('(min-width: 980px) and (max-width: 1199px)')) {
        return isDevice('desktop');
    } else if (Modernizr.mq('(min-width: 768px) and (max-width: 979px)')) {
        return isDevice('tablet');
    } else if (Modernizr.mq('(min-width: 481px) and (max-width: 767px)')) {
        return isDevice('phone');
    } else if (Modernizr.mq('(max-width: 480px)')) {
        return isDevice('mobile');
    }
};

isDevice = function (name) {
    if (window.mqStatus !== name) {
        window.mqStatus = name;
        $(document).trigger(name);
    }
};
whatDevice()
$(window).resize(function () {
   whatDevice()
})
