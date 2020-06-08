"use strict"

$(".checkbox-dropdown").click(function () {
    $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function(e) {
    e.stopPropagation();
});



/* Drop down menu fra https://codepen.io/thecel/pen/EVeGpB/ */





fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")

.then (function(data) {
	return data.json();
})


.then(function(post) {
      const dag = document.getElementById("dag");
      dag.insertAdjecentHTML = (post.day_of_week);

			const tid = document.getElementById("tid");
	 		const datoOGtid = new Date(post.datetime);

		tid.insertAdjacentHTML("beforeend", datoOGtid.getHours() + ":" + datoOGtid.getMinutes());

		if(post.day_of_week == 1) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Mandag</p>");

		} else if (post.day_of_week == 2) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Tirsdag</p>");

		} else if (post.day_of_week == 3) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Onsdag</p>");

		} else if (post.day_of_week == 4) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Torsdag</p>");

		}	else if (post.day_of_week == 5) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Fredag</p>");

		}	else if (post.day_of_week == 6) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Lørdag</p>");

		}	else if (post.day_of_week == 7) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Søndag</p>");
				}
    });