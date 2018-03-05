$('.client-balance input[type="submit"]').click( e => {
    e.preventDefault()
        $.ajax({
        url: "https://formspree.io/roman28krasko@gmail.com", 
        method: "POST",
        data: {
            'client-data' : $("#form-name").val(),
            'client-balance' : $("#form-balance").val()
        },
        dataType: "json"
    }).done(() => {
        $('#message-cont').text('thx 4 contacting')
    })
});



