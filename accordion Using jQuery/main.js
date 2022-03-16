$(document).ready(function(){
    $(".accordion_tab").click(function(){
        $(".accordion_tab").removeClass("active");
        $(this).addClass("active");

    });

    $('button').click(function(){
        var $current_btn = $(this).attr("data-types");
        $(".accordion_tab").removeClass("active");
        $("." +$current_btn).addClass("active").show();
        
    });

    $(".expandAll").click(function(){
        $(".accordion_tab").addClass("active");
        $(".accordion_content").show();
    });
   
    $(".collapseAll").click(function(){
        $(".accordion_tab").removeClass("active");
        $(".accordion_content").hide();
    });

    // $(".music").click(function(){
    //     $(".accordion_tab").removeClass("active");
    //     $("#tab1").addClass("active");
    //     $("#content1").show();
    // });

    // $(".sport").click(function(){
    //     $(".accordion_tab").removeClass("active");
    //     $("#tab2").addClass("active");
    //     $("#content2").show();
    // })

    // $(".books").click(function(){
    //     $(".accordion_tab").removeClass("active");
    //     $("#tab3").addClass("active");
    //     $("#content3").show();
    // })

    // $(".movies").click(function(){
    //     $(".accordion_tab").removeClass("active");
    //     $("#tab4").addClass("active");
    //     $("#content4").show();
    // })

    // $(".nature").click(function(){
    //     $(".accordion_tab").removeClass("active");
    //     $("#tab5").addClass("active");
    //     $("#content5").show();
    // })

});