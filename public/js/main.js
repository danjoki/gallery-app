$(document).ready(function () {
    $('.modal').modal();

    $('form').submit(function () {
        var name = $('input').val();
        var id = $('form').attr('data-id');
        $.ajax({
            method: 'put',
            url: '/image/' + id,
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify({
                'name': name
            }),
            error: function (err) {
                console.log(err)
            }
        })
    })
});