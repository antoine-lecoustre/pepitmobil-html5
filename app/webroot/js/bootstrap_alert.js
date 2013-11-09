function alertTimeout(wait) {
    setTimeout(function () {
        $('#alert_placeholder').children('.alert:first-child').remove();
    }, wait);
}

bootstrap_alert = function () {
};

bootstrap_alert.info = function (message) {
    $('#alert_placeholder').append('<div class="alert alert-success fade in" ' +
        'style="position:absolute; top:50%; left:50%;"><h1>' + message + '</h1></div>');
    alertTimeout(5000);
};
