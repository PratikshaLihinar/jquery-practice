$(document).ready(function () {
  

  $("ul li").click(function () {

    $("ul li").removeClass("active");
    $(this).addClass("active");

    var current_tab = $(this).attr("data-list");

    $(".tab_contents").hide();
    $(".content .tab_content").hide();
    $("." + current_tab).show();
  }).eq(0).click();

  // $("ul li").click(function () {

  //   $("ul li").removeClass("active");
  //   $(this).addClass("active");

  //   var current_tab = $(this).attr("data-list");

  //   // if (current_tab == 'tab_2') {
  //   //   $(".accordion_wrapper").hide();
  //   //   // $(".subtabs .subTab").show();
  //   // }

  //   $(".tab_contents").hide();
  //   $(".content .tab_content").hide();
  //   $("." + current_tab).show();
  // }).eq(0).click();




  $('ul li').first().click(function () {
    $(".subtabs").hide();
    $(".accordion_wrapper").css('display', 'block');
  });


  $("ul li:nth-child(2)").click(function () {

    $(".accordion_wrapper").css('display','none');
    // $(".subtabs .subTab").show();
    $(".subtabs").css('display','block');
  })



  $(".subTab").click(function () {

    $(".subTab").removeClass("active");
    $(this).addClass("active");

    $(".subtabs").css('margin-top', '-220px');
    
    var current_tabs = $(this).attr("data-tab");
    $(".contents .tab_contents").hide();
    $(".tab_content").hide();
    // $(".accordion_wrapper").hide();
    $("." + current_tabs).show();
  });


  $(".accordion_tab").click(function () {
    $(".accordion_tab").removeClass("active");
    $(this).addClass("active");

    var current_click = $(this).data("acco");
    $(".subtabs").hide();
    $(".contents .tab_contents").hide();
    $(".accordion_content").hide();
    $("." + current_click).show();

  })
});