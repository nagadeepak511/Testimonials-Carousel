var carousel_items = document.querySelectorAll('.carousel-item');
var offset = 0, length = carousel_items.length;
var navs = document.querySelectorAll('.carousel-nav');

for(let i=0;i<length;i++){
    navs[i].addEventListener('click',()=>{
        offset = i;
        display();
    })
    console.log(navs[i]);
}

var display = ()=>{
    var width = carousel_items[0].clientWidth;
    for(let i=0;i<length;i++){
        var item = carousel_items[i];
        item.style.transform = `translateX(${(i-offset)*(width+35)}px)`;
    }
}



display()