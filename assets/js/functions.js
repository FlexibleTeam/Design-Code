$(function(){
  mentoringBubbleClick();
  setInterval(function(){articleTada()}, 4000);
  designBGStuff();
});

function mentoringBubbleClick() {

  $('.face').on('click', function() {
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath = - 1 * (faceTop - 230),
        faceLeft = $this.position().left,
        horizMath = 0 - faceLeft;

    if($(window).width() > 640) {
      $this.parent().css('top', + vertMath +'px');
    } else {
      if($this.hasClass('back-btn')) {
        mentoringNarrowStart();
      } else {
        $this.parent().css('left', + horizMath +'px');
      }
    }
    if(!$this.hasClass('back-btn')) {
      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
    }
  });

}

function articleTada(){
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1
  $('.article-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

function designBGStuff() {
  $('.design-img-link').hover(function() {
    $(this).parent().parent().css('background-color',$(this).data('color'));
  }, function() {
    $(this).parent().parent().css('background-color',$(this).parent().parent().data('orig-color'));
  });
}

$(window).scroll(function() {
  youtubeVidScroll();
  startMentoring();
  startArticles();
});

function youtubeVidScroll() {

  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position','center -'+ wScroll +'px')

}

function startMentoring() {

  var wScroll = $(window).scrollTop();

  if($('section.mentoring').offset().top - $(window).height() / 2 < wScroll) {
    if($(window).width() > 640) {
      $('.faces').addClass('launched');
      setTimeout(function() {
        $('.face:nth-child(3)').addClass('has-bubble-open');
      }, 400);
    } else {
      mentoringNarrowStart();
    }
  }

}

function startArticles() {

  var wScroll = $(window).scrollTop();

  if($('section.articles').offset().top - $(window).height() / 2 < wScroll) {
    $('.article-thumb').each(function(i){
      setTimeout(function(){
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 100 * i);
    });
  }

}

function mentoringNarrowStart() {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  })
  $('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  })
  $('.face:nth-child(3)').addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

$(window).resize(function() {
  if($(window).width() > 640) {
    mentoringWideStart();
  } else {
    mentoringNarrowStart();
  }
});
