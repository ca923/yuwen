$(document).ready(function(){
    // $('.burgermenu').on('click',function(){
    //     $('.mob-nav').toggle();

    // })
    
    $(".burgermenu").click(function(){
          $('.mob-nav').slideToggle("slow");
        });
})