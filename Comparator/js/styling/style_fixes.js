$(document).ready(function () {
    var product_space_max_height = 0;
    $('.product-name').each(function () {
        if ($(this).height() > product_space_max_height) {
            product_space_max_height = $(this).height();
        }
    });
    $('.product-name').height(product_space_max_height);
});