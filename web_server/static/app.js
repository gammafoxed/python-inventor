document.addEventListener('DOMContentLoaded', function () {
	init();
});

function init() {
	const elems = document.querySelectorAll('.collapsible');
	const instances = M.Collapsible.init(elems);
}