window.addEventListener("load", function() {
	setTimeout(function() {
		let sections = document.getElementsByClassName("section");
		for (let i = 0; i < sections.length; i++) {
			imageLoaded(sections[i])
		}
	}, 10000);
});

function imageLoaded(element) {
	element.className = element.className + " removeAfter";
}