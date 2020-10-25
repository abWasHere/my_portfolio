import { projectsList } from "./js/projectsList.js";

/* GRID PROJECTS DISPLAY ----------------------------- */
projectsList.map((project) => {
	$("#cards-container").append(
		`<div class="col">
			<div class="card id${project.id} shadow p-3 bg-white rounded border-0" 
 >
			<a href=${project.url} target="_blank"><img src=${
			project.img_url
		} class="card-img-top" alt=${project.name} screenshot"></a>
				<div class="card-body">
					<div class="card-titles">
						<h5 class="card-title">${project.name}</h5>
						<h6 class="card-subtitle mb-2 text-secondary ">${project.usage} - ${
			project.release_date
		}</h6>
					</div>
					<p class="card-text">${project.description}</p>
					
					<div class="card-bottom">
						<p class="font-italic text-black-50">${
							(project.personal &&
								`<i class="far fa-user-circle"></i> Personal project`) ||
							`<i class="fas fa-code-branch"></i> Collaboration`
						} </p>
						<a href=${project.url} class="card-link hvr-push" target="_blank">Demo</a>
						<a href=${project.source_code} class="card-link hvr-push" target="_blank">
							<i class="fas fa-code"></i>						Source
						</a>
					</div>
				</div>
			</div>
		</div>`
	);
});

/* BTN DISCORD ----------------------------- */
// ---- username popup
function toggleDiscordName() {
	$("#discord-id").toggleClass("invisible");
}
$("#discord-link").on("click", toggleDiscordName);

// ---- copy username to clipboard
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

/* BTN BACK-TO-TOP ----------------------------- */
$(document).ready(function () {
	// button fade in and fade out
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$("#back-to-top").removeClass("invisible");
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
			500
		);
		return false;
	});
});

/* BURGER ----------------------------- */
$("#burger").click(() => {
	$(".icon").toggleClass("close");
});
