// search 클래스를 가진 애들을 누르면 search 클래스 안에 있는 input요소를 focus 시킨다
// search 클래스 안에 input 요소가 focus 되면 search 클래스 옆에 focused 라는 클래스를 추가한다
// 그리고 input요소에 placeholder라는 속성을 추가한다

// 이후 search 클래스 안에 input요소가 포커스가 해제되면(블러)
// search 클래스 옆에 있던 focused 클래스를 지워주고
// input요소에 있던 placeholder 값을 공백으로 바꾸어준다

// 검색창 요소 (.search) 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색 요소를 클릭하면 실행 focus 되게 한다
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //인덱스는 0부터 시작한다 fadeEl이 4개면 숫자가 3까지 index가 나온다
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7초 1.4초 2.1초 - 이렇게 반복적으로 실행되는 경우가 많다
    opacity: 1,
  });
});

// fadeEls.forEach(function (fadeEl, index) {
//   // 각 요소들을 순서대로(delay) 보여지게 함!
//   gsap.to(fadeEl, 1, {
//     delay: (index + 1) * .7,
//     opacity: 1
//   })
// })

// SWIPER

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' - 기본값이 가로로 들어가 있어서 제외
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay : 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

//awards slide

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

// 토글 누르면 공간 없어지기

// const promotionEl = document.querySelector('.promotion');
// const promotiontoggleEl = document.querySelector('.toggle-promotion');

// let ishide = false;

// promotiontoggleEl.addEventListener('click', funtion () {
//   ishide = !ishide
//   if (ishide) {
//     // 숨김처리
//     promotionEl.add.classList('hide');
//   } else {
//     // 보임처리
//     promotionEl.remove.classList('hide');
//   }
// });

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true, // 한번 실행시켰던 것을 뒤로 다시 반복 내려온 것 위로 올려주는 애니메이션 넣기 위해서 이렇게 함
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소
    triggerHook: 0.8, //뷰포인트의 80%에 왔을 때 감지한다
  })
    .setClassToggle(spyEl, 'show') //show라는 클래스를 추가해준다
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //현재 연도를 넣어준다

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// 상단으로 스크롤 버튼을 클릭하면,
// toTopEl.addEventListener('click', function () {
//   // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
//   gsap.to(window, 0.7, {
//     scrollTo: 0,
//   });
// });
