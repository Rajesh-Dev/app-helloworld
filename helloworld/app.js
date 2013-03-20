function sayhello() {

    $.ajax({
        dataType: 'json',
        url: location.protocol + '//' + location.host + '/rest/User/Profile',
        data: 'app_name=helloworld',
        cache: false,
        success: function (response) {
            $('#demo').html('Hello, ' + response.display_name + '!!!');
        },
        error: function (response) {
            alert("There was an error retrieving the user profile.");
        }
    });
}