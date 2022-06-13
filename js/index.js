$(document).ready(function(){
    $('#night').change(function() { 
        const class_name = $(this).is(':checked') ? 'dark' : 'light';
        if (class_name == 'dark') {
            $('body').removeClass('light');
            $('body').addClass('dark');
            $('#mood-icon').removeClass('fas fa-moon');
            $('#mood-icon').addClass('fas fa-sun');
        } else {
            $('body').removeClass('dark');
            $('body').addClass('light');
            $('#mood-icon').removeClass('fas fa-sun');
            $('#mood-icon').addClass('fas fa-moon');
        }
    });
});