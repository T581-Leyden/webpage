$(".entry").click(function () {

    $entry = $(this);
    //getting the next element
    $content = $entry.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
    });

});
