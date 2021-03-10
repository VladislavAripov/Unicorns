$('body').on('click', 'btn', function(e) {
    $(this).closest('.to-close').remove();
});