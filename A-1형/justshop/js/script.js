$(function(){
    $('.gnb').hover(function(){
      $('.lnb').fadeToggle();
    });
    
    $('.tabnav>li').click(function(e){
       e.preventDefault();
       $('.tabnav>li').removeClass('active');
       const href = $(this).find('a').attr('href');
       $(this).addClass('active');
       $('.tab').removeClass('active');
       $(href).addClass('active');
    });
    setInterval(slideUpDown, 3000);// 3초에 한번씩 이미지 애니메이션 함수가 실행되도록한다.

    $('.pop').click(function(e){
      e.preventDefault();
      $('.popup').fadeIn();
    });

    $('.close').click(function(){
      $('.popup').fadeOut();
    })
  });  
    
    
  
  //jquery

  function slideUpDown(){
  $('.heroin').animate({      //첫 번째 임지를 위로 -300만큼 애니매이션한다.
    top: '-300px'
  }, 500, function(){
    //애니메이션이 끝나면 두번째 이미지가 보이게 된다 . 이때 첫번째 이미지를 
    // 마지막에 복제 (clone)하여 넣고 첫번째에 있는 이미는 삭제하여
    // 그 다음 이미지가 첫번째 이미지가 되도록한다. 그리고 top을 초기화해 놓는다.
    $('.heroin img:eq(0)').clone().appendTo('.heroin');   
    $('.heroin img:eq(0)').remove();
    $('.heroin').css("top", 0);
  }); 
}