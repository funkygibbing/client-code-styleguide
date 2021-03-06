//Proivdes 'Placeholder' behvaior on browsers that do no support HTML 5 <input placeholder/>
//Credits: http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html

$('[placeholder]').focus(function () {    
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
    }
}).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
    }
}).blur().parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
        }
    })  
});