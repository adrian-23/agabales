(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

}

)(jQuery);

const content = ["Lightbulb", "main", "Based26", "Converter", "Microshell"];
document.getElementById('description-lightbulb').addEventListener("click", () => display(document.getElementById('Lightbulb') )); 
document.getElementById('About-btn').addEventListener("click", () => display(document.getElementById('main') )); 
document.getElementById('description-based26').addEventListener("click" , () => display(document.getElementById('Based26')));
document.getElementById('description-converter').addEventListener("click" , () => display(document.getElementById('Converter')));
document.getElementById('description-microshell').addEventListener("click" , () => display(document.getElementById('Microshell')));
function display(elem){
	elem.classList.add('show');
	hide(elem.id, content);
	window.scrollTo(0,0);
}

function hide(elem,content){

	for (var i = 0 ; i < content.length; i++){
		
		if(content[i] !== elem){
			document.getElementById(content[i]).classList.add('noshow');
			document.getElementById(content[i]).classList.remove('show');
		}
		
	}
}

