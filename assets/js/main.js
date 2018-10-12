$(document).ready(function() {
    $('.item').hide();
    $('#urgent').children('li').slideDown();

    //check off list on click
    $('.list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    //delete todo when x is clicked
    $('.list').on('click', '.delete', function(e) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        e.stopPropagation();
    });

    //li slide toggle
    $('.list').on('click', '.toggle-btn', function() {
        var $clickedItem = $(this).siblings('li');
        var $items = $('.item');

        $clickedItem.slideToggle(500);
        $items.not($clickedItem).slideUp();
    });

    // add list items
    $('.txt-input').keypress(function(e) {
        if(e.which === 13) {
            var todoItem = $(this).val();
            var ul = $('li:visible').parent();

            $(this).val('');
            ul.append('<li class="item"><span class="delete"><i class="fas fa-trash"></i></span>' + todoItem +'</li>');
        };
    });
});