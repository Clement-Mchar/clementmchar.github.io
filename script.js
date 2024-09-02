$(document).ready(function(){
    $('.nav-link').click(function(){
        var target = $(this).data('target');
        $('.carousel-section').removeClass('active');
        $('#' + target).addClass('active');
    });
});