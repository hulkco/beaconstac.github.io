$(document).ready(function(){

	$(".header-links li a").on("click", function(){
		if($(".header-links").find(".selected-link").length == 0){
			$(this).parent().addClass("selected-link");
		}else{
		   $(".header-links").find(".selected-link").removeClass("selected-link");
		   $(this).parent().addClass("selected-link");
		}
	   console.log("inside selected-link");
	   console.log($(this));
	   console.log("after selected-link");
	});
	

});