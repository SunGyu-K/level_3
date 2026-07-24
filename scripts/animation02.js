// animation 02.js

const li = document.querySelector ('.gnb > ul > li:nth-child(2)');
const sub = document.querySelector ('.gnb .sub');
console.log(li, sub);

// 1. 서브메뉴 초기 숨기기
li.style.display = `none`
// 2. 메인메뉴를 클릭(터치)하면 서브메뉴 보이기
li.addEventListener('click',subshow)
function subshow(){
    sub.style.display = 'flex';
}