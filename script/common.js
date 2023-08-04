//header, footer JS 
//header 전체메뉴 스크립트 flow
// 1. open-nav 초기 숨기기
// 2. 햄버거메뉴(nav) 클릭시 open-nav 출력
// 3. open-nav 안 x버튼(nav-close) 클릭 시 open-nav 숨기기
//변수생성
const nav = document.querySelector('#nav')
const open_nav = document.querySelector('#open_nav')
const nav_close = document.querySelector('#open_nav #nav_close')
console.log(nav,open_nav, nav_close)
//1. open-nav 초기숨기기  #open-nav{transform:translateX}
open_nav.style.transform = 'translatex(100%)';
//2. 햄버거메뉴 (nav) 클릭시 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)'
    open_nav.style.transition = 'transform 1.5s'
    // display:none으로 숨긴대상을 다시 보이게 할 경우
    // 기존 디자인 css에서 flex로 정렬한 대상이라면 display='flex'
    // 기존 디자인 css에서 flex로 설정이 없었다면 display='block'
})
//3. open-nav 안 x버튼(nav_close) 클릭 시 open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)'
})

//swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:2000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#open_nav #nav_adver .swiper-button-prev',
    },
});
