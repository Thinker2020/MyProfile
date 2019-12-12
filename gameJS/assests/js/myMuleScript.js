var left=8;
var bottom = 125;
$(window).on("keydown",function (e) {
    switch (e.keyCode) {
        case 39 :
            left+=10;
            $("#muleImg").css('left',left);
            changeRight();
            break;
        case 37 :
            left-=10;
            $("#muleImg").css('left',left);
            changeLeft();
            break;
        case 32:
            bottom+=200;
            left+=10;
            $("#muleImg").css('left',left);
            $("#muleImg").css('bottom',bottom);
            setTimeout(function () {
                bottom-=200;
                left+=10;
                $("#muleImg").css('bottom',bottom);
                $("#muleImg").css('left',left);
            },200);
            break;
    }
});

function changeLeft() {
    $('#muleImg').css({
        "-webkit-transform" : "scaleX(-1)",
        "transform" : "scaleX(-1)"
    });
}

function changeRight() {
    $('#muleImg').css({
        "-webkit-transform" : "scaleX(+1)",
        "transform" : "scaleX(+1)"
    });
}