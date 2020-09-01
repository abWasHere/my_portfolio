import { projectsList } from "./js/projectsList.js";

/* ------ insert projects */
projectsList.map((project) => {
	$("#cards-container").append(`<div class="col"> <div class="card id${
		project.id
	} shadow p-3 mb-5 bg-white rounded border-0">
					<img src=${project.img_url} class="card-img-top" alt=${
		project.name
	} screenshot">
					<div class="card-body">
						<h5 class="card-title">${project.name}</h5>
						<h6 class="card-subtitle mb-2 text-secondary ">${project.usage} - ${
		project.release_date
	}</h6>
						<p class="card-text">${project.description}</p>
						
						<p class="font-italic text-black-50

">${
		(project.personal && "Personal project") ||
		`<i class="fas fa-code-branch"></i> Collaboration`
	}</p>
						<a href=${project.url} class="card-link">Demo</a>
						<a href=${
							project.source_code
						} class="card-link"><i class="fas fa-code"></i> Source</a>
					</div>
					</div>
				</div>`);
});

/* ------ discord username popup */
function toggleDiscordName() {
	$("#discord-id").toggleClass("slide-right invisible");
}

$("#discord-link").on("click", toggleDiscordName);

/* --------- discord username copy to clipboard */
var alertDisplay = false;
$("#discord-id").on("click", () => {
	if (alertDisplay) {
		$(".alert").fadeOut();
		toggleDiscordName();
		alertDisplay = false;
	} else {
		const el = document.createElement("textarea");
		el.value = "Audwey#0769";
		el.setAttribute("readonly", "");
		el.style.position = "absolute";
		el.style.left = "-9999px";
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
		alertDisplay = true;
	}
});

/* ------ FIXME: back to top button */
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
