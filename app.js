// sticky navigation

let navbar = $(".navbar");

$(window).scroll(function(){
    let top = $(".section-2").offset().top - Window.innerHeight
    // console.log(top);
    // console.log(window.innerHeight);
    // console.log($(".section-2").offset().top);
    if($(window).scrollTop()>top){
        navbar.addClass("sticky");
    }else{
        navbar.removeClass("sticky");
    }
});

let nCount = function(selector){
    $(selector).each(function(){

        $(this).animate({
            counter:$(this).text()
        },{
            duration:4000,
            easing:"swing",
            step:function(value){
            $(this).text(Math.ceil(value));  
            }
        })
    })
}

$(window).scroll(function(){

})