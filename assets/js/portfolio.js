$(document).ready(function(){

    $(".portfolio .button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");
    
        if (filter == "all"){
            $(".portfolio .image").show(400);
        }
        else{
            $(".portfolio .image").not("."+filter).hide(200);
            $(".portfolio .image").filter("."+filter).show(400);
        }
    })
 
    //MAGNIFIC-POPUP
    $(".portfolio").magnificPopup({
        
        delegate: ".view",
        type: "image",
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery:{
            enabled: true
        },

    })


});