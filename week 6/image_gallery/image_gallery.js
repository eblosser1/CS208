$(document).ready(function(){
	$("#image_list a").each(function(){
		var swappedImage = new Image ();
		swappedImage.src = $(this).attr("href");
	});
	
	    $("#image_list a").click(function (evt) {
        var image_URL = $(this).attr("href"); //retrieve href
        $("#image").attr("src", image_URL) //change source
        
        var title_description = $(this).attr("title"); // retrieve title
        $('#caption').html(title_description); //change title
        
        evt.preventDefault(); //ignore default
    });
    
    $("li:first-child a").focus(); //move focus to first thumbnail
    
});