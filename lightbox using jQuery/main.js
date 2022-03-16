$(document).ready(function(){
    $(".lightbox").click(function(){
       
        //image link find and collect it in variabel
        var link = $(this).data("src");
            //put current image link
            $("#content").html('<img src="'+link+'"/>');
            //show 
            $("#lightbox").show();
         
    });
    $("body").on('click','#lightbox',function(){
        $("#lightbox").hide();
    });
});