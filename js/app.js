$(document).ready(function(){

	//Overlay fade in and out
	$("#closeButton").click(function(){
		$(".overlayInstructions").fadeOut(800);
	});
	$("#instructionsButton").click(function(){
		$(".overlayInstructions").fadeIn(800);
	});
});