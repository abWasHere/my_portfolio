import { projectsList } from "./js/projectsList.js";

/* GRID PROJECTS DISPLAY ----------------------------- */

projectsList.map((project) => {
	$("#cards-container").append(
		`
			<div class="col id${project.id} ">

				<img src=${project.img_url} class="project-img" alt=${project.name} screenshot">

				<div class="project-content">
					
					<h5 class="project-name">${project.name}</h5>

					<div class="project-subtitle disp-flex">
						<p class="project-date">${project.release_date}</p>
					<p class="project-collaboration">${
						(project.personal &&
							`<i class="fas fa-user"></i> Personal project`) ||
						`<i class="fas fa-users"></i> Collaboration`
					}
					</p>

				</div>
					
				<p class="project-description">${project.description}</p>
				<p class="project-tags">${project.tags}</p>
						

				<div class="disp-flex disp-centered project-links"> 
					<a href=${project.url} class="hvr-push" target="_blank"> URL</a>
					<a href=${
						project.source_code
					} class="hvr-push" target="_blank"><i class="fas fa-code"></i> Source</a>
				</div>

			</div>
		`
	);
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
