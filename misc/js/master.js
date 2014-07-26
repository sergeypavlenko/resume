$(function() {
    $('.row > div').hover(
        function() {
            $(this).find('.front').hide();
            $(this).find('.info').show();
        },
        function() {
            $(this).find('.info').hide();
            $(this).find('.front').show();
        }
    );
});