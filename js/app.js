var $items = $('.items');
$items.on('submit', function(event) {
	var text = $("#newTextBox").val();
	event.preventDefault();
	$items.click();
	var $li = $("<li/>").text(text);
	$("ul").append($li);
	var $removeLi = $("<button/>").text("X");
	$li.append($removeLi);
});