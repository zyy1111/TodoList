// Check Off Specific todos by cliking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which === 13){ //type enter
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); 
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});