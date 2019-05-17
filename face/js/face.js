var top1 = $('.desc').offset().top
var top2 = $('.face_check').offset().top
var top3 = $('.face_search').offset().top
var top4 = $('.face_contrast').offset().top
var top5 = $('.flow').offset().top


if($(document).scrollTop()!=0){
  $('.top').css('background','#081360')
}else{
  $('.top').css('background','transparent')
}


$(document).scroll(function(){
  if($(document).scrollTop()!=0){
    $('.top').css('background','#081360')
  }else{desc
    $('.top').css('background','transparent')
  }


  // if($(document).scrollTop()<top1){
  //   $('.top ul li').removeClass('curr')
  //   $('.top ul li:eq(0)').addClass('curr')
  // }
  // if($(document).scrollTop()>=top1&&$(document).scrollTop()<top2){
  //   $('.top ul li').removeClass('curr')
  //   $('.top ul li:eq(0)').addClass('curr')
  // }
  // if($(document).scrollTop()>=top2&&$(document).scrollTop()<top3){
  //   $('.top ul li').removeClass('curr')
  //   $('.top ul li:eq(1)').addClass('curr')
  // }
  // if($(document).scrollTop()>=top3&&$(document).scrollTop()<top4){
  //   $('.top ul li').removeClass('curr')
  //   $('.top ul li:eq(2)').addClass('curr')
  // }
  // if($(document).scrollTop()>=top4&&$(document).scrollTop()<top5){
  //   $('.top ul li').removeClass('curr')
  //   $('.top ul li:eq(3)').addClass('curr')
  // }
  // if($(document).scrollTop()>=top5){
  //   $('.top ul li').removeClass('curr')
  //   $('.top ul li:eq(4)').addClass('curr')
  // }
})

$('.top ul li').click(function(){
  var index = $(this).index()
  switch (index){
    case 0:
    $("html, body").animate({scrollTop: 0});
    break;
    case 1:
    $("html, body").animate({scrollTop: top2});
    break;
    case 2:
    $("html, body").animate({scrollTop: top3});
    break;
    case 3:
    $("html, body").animate({scrollTop: top4});
    break;
    case 4:
    $("html, body").animate({scrollTop: top5});
    break;
  }
})