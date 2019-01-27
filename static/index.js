
    $('.showSingle').on('click', function() {   
        $('.title').fadeOut();
        $('.targetDiv').hide();
        console.log($(this).attr('target'));
        $('#menuItem' + $(this).attr('target')).fadeIn();
    })