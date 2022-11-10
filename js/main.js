
// bx 슬라이드
$(function(){
    $('.slide').bxSlider({
      mode: 'fade', /* 페이드 */
    //   captions: true, /* 이미지에 타이틀 넣어야 주석 */
      // slideWidth: 1670, /* 이미지크기 */
      responsive: true, /* 슬라이더의 자동 크기 조정을 활성화하거나 비활성화 */
      auto: true, /* 이미지 회전이 자동 */
      speed: 500, /* 이미지가 다음 이미지로 바뀌는데 걸리는 시간단위는 ms(mili seconds) */
      pause: 4000,  /* 하나의 이미지가 멈춰서 보여지는 시간 */
      adaptiveHeight: true
    });
  });

  // 1563

