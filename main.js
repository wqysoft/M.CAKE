$(document).ready(function(){
    var num=$(".num");
    var cart=$("nav ul li span:last-child");
    // + 操作
    $(".plus").click(function() {
        num.val(parseInt(num.val())+1);
        })
    // -  操作
    $(".reduce").click(function () {
        num.val(parseInt(num.val())-1);
        if (parseInt(num.val()) < 0) num.val(0);
    // 加入购物车
    $(".detail_right_rec .btn button").click(function(){
        cart.text(parseInt(cart.text())+1);
            })
        })


    })
