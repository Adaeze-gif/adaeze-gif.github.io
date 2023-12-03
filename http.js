$(document).ready(function () {
    $("#form").on("submit", function () {
       $.post("http://35.188.215.266:8000/http.html", $("#form").serialize(), function(data, status) {
            $("#name").html(data["Name"]);
            $("#program").html(data["Program"]);

            console.log("post status");
            console.log(status);
            console.log("post data");
            console.log(data);

        })

        /*$.post("https://postman-echo.com/post", function(data, status) {
            console.log("post status");
            console.log(status);
            console.log("post data");
            console.log(data);
        }) */
            
        
    })
})
