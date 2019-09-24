window.addEventListener("load", function() {
	let sections = document.getElementsByClassName("section");
	for (let i = 0; i < sections.length; i++) {
		imageLoaded(sections[i])
	}
});

function imageLoaded(element) {
	element.className = element.className + " removeAfter";
}