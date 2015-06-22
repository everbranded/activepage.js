$(document).ready(function() {
    
    // get the location of this page
    var location = window.location;

    
     // check for each instance of active page
    $(".activepage").each(function() {
    
        // get the href attribute of this element.
        var href = $(this).attr("href");
        
        // get the active class to set this to.
        var data_class = $(this).attr("data-class");
        
        // if no data-class attribute is set
        // add the default active page class
        // .activepage-active
        if(!data_class) data_class = "activepage-active";
        
        // check if this is the active page.
        console.log(location);
          
    });
});
