/*Hamburger menu animation*/
$(document).ready(function () {
    $('#hamburgerMenu').on('click', function () {
        $(this).toggleClass('open');/*appends class .open to #hamburgerMenu onclick*/
        $('#overlayMenu').toggleClass('show');
    })
})

/*Bootstrap fallback*/
if(typeof($.fn.modal) === 'undefined') {
    document.write('<script src="Bootstrap4/bootstrap-4.0.0-beta/dist/js/bootstrap.js"><\/script>');
    $("head").prepend('<link rel="stylesheet" href="Bootstrap4/bootstrap-4.0.0-beta/dist/css/bootstrap.css" />');
}