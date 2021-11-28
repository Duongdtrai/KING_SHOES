var click_off = document.querySelector('.short_close')
click_off.onclick = function(){
    var off = document.querySelector('.navbar_short_out');
    off.style.display = 'none';
}
var click_on = document.querySelector('.navbar_name_short_information')
click_on.onclick = function() {
    var on = document.querySelector('.navbar_short_out');
    on.style.display = 'block';
}
var click_off2 = document.querySelector('.navbar_name_short_view')
click_off2.onclick = function(){
    var off = document.querySelector('.navbar_short_out');
    off.style.display = 'none';
}

var click_page_number = document.querySelectorAll('.main_page_active_ok');
click_page_number.forEach(function(page){
    page.onclick = function(){
        var no_product = document.querySelector('.main_no_product');
        no_product.style.display = 'flex';
    }
})

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

var product_sale = document.querySelectorAll('.main_item_sale');

product_sale.forEach(function(sale){
    var x = Math.floor(Math.random() * 51);
    sale.innerHTML = '-'+ x + '%';
})
