$(document).ready(function(){

    $(document).mousemove(function(){
        $("#sigueme").css("left",event.clientX-50)
                     .css("top",event.clientY-50);
    });
    $(document).on("touchmove",function(){
        $("#sigueme").css("left",event.clientX-50)
                     .css("top",event.clientY-50);
    });

});