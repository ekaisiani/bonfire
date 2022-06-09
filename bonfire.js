// var spanCart = document.querySelector('.cart');
// var overlay = document.querySelector('.ovelrayAll');
// spanCart.addEventListener('click', showCart);

// function showCart(){
//     overlay.style.display = 'flex';
// }


// var cart = document.querySelector('.cart');
// var overlay = document.querySelector('.ovelrayAll')
// var closeBtn = document.querySelector('.close');
// cart.addEventListener('click', showShop);
// closeBtn.addEventListener('click', closeShop);
// closeBtn.style.cursor = 'pointer';
// function showShop(){
//     overlay.style.display='flex';
// }

// function closeShop(){
//     overlay.style.display = 'none';
// }


/////////////////////////////// 03.05.2022

// document.addEventListener('scroll', scroll);
// var h = document.querySelector('#h');
// var header_bot = document.querySelector('.header_bot');

// function scroll(){
//     let scrollFromTop = document.documentElement.scrollTop;
//     if(scrollFromTop > h.offsetHeight){
//         h.classList.add('fixed');
//         header_bot.style.marginTop = h.offsetHeight+5 + 'px';
//     }
// }


// var featuredItems = document.querySelectorAll('.block .featured_item');

// console.log(featuredItems);

// featuredItems.forEach(function(item){
//     // console.log(item);
//     item.onclick = function(){
//         item.classList.toggle('rotate');
//     }
// })

var menuItem = document.querySelectorAll('.botMenu > li');


menuItem.forEach(function(item){
   
       item.onclick ==
        item.addClass('active').siblings().removeClass('active');

          
       
    


})
