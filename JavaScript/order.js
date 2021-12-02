
var click_no_product = document.querySelector('.main_no_product');
click_no_product.onclick = function(e){
    click_no_product.style.display = 'none';
}
var click_close_number = document.querySelector('.main_close_number');
click_close_number.onclick = function(e){
    e.stopPropagation();
    var click_no_product = document.querySelector('.main_no_product');
    click_no_product.style.display = 'none';
}
var click_X_close = document.querySelector('.X_close');
click_X_close.onclick = function(e){
    e.stopPropagation();
    var click_no_product = document.querySelector('.main_no_product');
    click_no_product.display = 'flex';
}