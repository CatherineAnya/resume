$(document).ready(function () {
    // 导航滑动
    var index;
    // 各div距离页面文档顶部的偏移
    var top1 = $('#about').offset().top - 100;
    var top2 = $('#portfolio').offset().top - 100;
    var top3 = $('#link').offset().top - 100;
    // 监听按钮是否被点击
    $('.header .nav .nav-link span').click(function () {
        // 获取被点击按钮的ID
        index = $(this).attr('id');
        // 当点击完一个，要点击下一个的时候，先清空上一个的高亮样式，再为现在所点击的添加高亮样式
        $('.header .nav .nav-link span').removeClass('click').eq(index).addClass('click');
    });
    // 点击锚点按钮后，页面平滑滚动到相应div的位置
    $('#div1Link').click(function () {
        $('html,bady').animate({
            scrollTop:top1
        },1000);
        return false;
    });
    $('#div2Link').click(function () {
        $('html,bady').animate({
            scrollTop:top2
        },1000);
        return false;
    });
    $('#div3Link').click(function () {
        $('html,bady').animate({
            scrollTop:top3
        },1000);
        return false;
    });

    // 导航定位
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        var nav = $('#nav');
        var items = $('.a-item');
        // 当前所在的位置（a-item）#id
        var clickId = "";
        // each()方法遍历items
        items.each(function () {
            var $this = $(this);
            var itemTop = $this.offset().top;
            if(top > itemTop - 100){
                clickId = "#" + $this.attr('id');
            }
            else{
                return false;
            }
        });
        // 给相应的链接设置click样式，取消其他链接的click样式
        var clickLink = nav.find('a');
        var l = clickLink.length;
        // 判断clickId是否为空值
        if(clickId){
            for(var i = 0; i < l; i++){
                // 再判断$('#nav a')的href属性值是否与clickId相等
                if($('#nav a').eq(i).attr('href') == clickId){
                    $('#nav a span').removeClass('click').eq(i).addClass('click');
                    break;
                }
            }
        }
        // 如果滚动条距离窗口顶部偏移小于300，去除click样式
        if(top < 300){
            $('#nav a span').removeClass('click');
        }
    });

    // 作品链接
    // 鼠标悬停在按钮上，就修改图片
    $('.c-link .github').mouseover(function () {
        $('.c-link .github a img').attr('src', 'img/github_click.png');
    });
    $('.c-link .codepen').mouseover(function () {
        $('.c-link .codepen a img').attr('src', 'img/codepen_click.png');
    });
    $('.c-link .fcc').mouseover(function () {
        $('.c-link .fcc a img').attr('src', 'img/freecodecamp_click.png');
    });
    $('.c-link .github').mouseout(function () {
        $('.c-link .github a img').attr('src', 'img/github.png');
    });
    $('.c-link .codepen').mouseout(function () {
        $('.c-link .codepen a img').attr('src', 'img/codepen.png');
    });
    $('.c-link .fcc').mouseout(function () {
        $('.c-link .fcc a img').attr('src', 'img/freecodecamp.png');
    });

    // 返回顶部
    // 点击返回按钮后，页面平滑滚动到顶部
    $('.goup').click(function () {
        $('html,body').animate({
            scrollTop:0
        },1000);
    });

    goUp();
});

// 返回顶部
function goUp() {
    // 判断滚动条
    $(window).scroll(function () {
        // 如果滚动条距离文档顶部大于100
        if($(window).scrollTop() > 100) {
            // 就显示出来
            $('.goup').show();
            // 或者 让它以1秒的间隔渐显
            // $('.goup').fadeIn(1000);
        }
        // 否则就隐藏
        else {
            $('.goup').hide();
            // 或者 让它以1秒的间隔渐隐
            // $('.goup').fadeOut(1000);
        }
    });
};
