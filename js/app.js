$(document).ready(function(){

    var aqui = $("#sigueme");

    $(document).mousemove(function(){
        aqui.css("left",event.clientX-50)
            .css("top",event.clientY-50);
    });

    $(".container").mouseover(function(){
        aqui.css("background","white")
            .css("height","150")
            .css("width","150")
            .css("transition","200ms ease-out");
    });
    $(".container").mouseout(function(){
        aqui.css("background","black")
            .css("height","115")
            .css("width","115");
        
        
    });
   
    

});
