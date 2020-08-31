import { projectsList } from "./js/projectsList.js";

/* ------ discord username popup -------------- */
$("#discord-popup").on("click", () => {
	console.log("discord clicked !");
	$("#discord-id").toggleClass('invisible');
});

/* ------ FIXME: back to top button ------- */
$(document).ready(function () {
	// button fade in and fade out
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$("#back-to-top").fadeIn();
		} else {
			$("#back-to-top").fadeOut();
		}
	});
	// scroll body to 0px on click
	$("#back-to-top").click(function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			350
		);
		return false;
	});
});
