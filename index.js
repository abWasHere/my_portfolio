import { projectsList } from "./js/projectsList.js";

const cross = `<span class="cross" aria-hidden="true">&times;</span>`;
const burger = `<span class="navbar-toggler-icon burger"></span>`;
let openedMenu = false;

/* ------ menu button -------------- */
$("#btn-menu").click(() => {
	openedMenu = !openedMenu;
	if (openedMenu) $("#btn-menu .burger").replaceWith(cross);
	else $("#btn-menu .cross").replaceWith(burger);
});

// FIXME: LE MENU NE COLLAPSE PLUS

/* ------ back to top button ------- */
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
