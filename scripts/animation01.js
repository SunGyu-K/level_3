// animation01.js
// item에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');
// 변수이벤트
console.log(item1,item1Img);
//이벤트
item1.addEventListener('mouseover', item1ImgSrc);
item1.addEventListener('mouseout' , item1ImgSrcOut);

//함수
function item1ImgSrc(){
    item1Img.src = `https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/485567/item/krgoods_26_485567_3x4.jpg?width=300`;
}

function item1ImgSrcOut(){
    item1Img.src = `https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/485567/item/krgoods_69_485567_3x4.jpg?width=300`;
}

