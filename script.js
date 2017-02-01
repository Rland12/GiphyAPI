$(document).ready(function() {

    $("#giphy").submit(function(event) {
        // everything you want to happen *after* the form is submitted must go in here
        event.preventDefault();
        
        var query = $("#query").val();
        
        $("#query").val("");
        $("#results").empty();

        $.ajax({
            // This is the URL of the API
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
        }).done(function(response) { // the .done function happens after the API response is returned
            console.log(response);

            // this is the jQuery way to create
            // a new image element
            // when we create a new element,
            // jQuery returns an array. So we
            // need to look for the first item
            // in the image array
            
            var insertImage = function(url) {
                var image = $('<img>');
                image.attr('src', url);
                $("#results").append(image);
            };


            for (var i = 0; i < response.data.length; i++) {

                insertImage(response.data[i].images.fixed_width_downsampled.url);

                console.log(response.data[i].images.fixed_width_downsampled.url);
            }
        });

    });

});
