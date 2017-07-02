var active_button = null;
var num_pages = 0;

$(document).ready(function(){
	
	$(".pagination li").each(function()
	{
		var current_page = $(this).text();
		if(current_page > num_pages)num_pages = current_page;
		if($(this).hasClass("active"))
		{
			active_page = $(this).text();
			active_button = $(this);
		}
		$(this).click(function(){gotClicked($(this));});
	});
});

function gotClicked(button)
{
	if(active_button != null)
	{
		var new_page = button.text();
		var old_page = active_button.text();
		if(new_page != old_page)
		{
			active_button.removeClass("active");
			button.addClass("active");
			active_button = button;
			
			$("#row-"+old_page).fadeOut(800,function(){
				$("#row-"+new_page).fadeIn(800);
			});
			
		}
	}
}