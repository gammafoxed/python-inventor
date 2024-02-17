document.addEventListener('DOMContentLoaded', function () {
	init();
});

function init() {
	const elems = document.querySelectorAll('.collapsible');
	const instances = M.Collapsible.init(elems);
}

function loadComponent(componentName, targetClass, doAfterLoad) {
	let targetComponent = document.getElementById(targetClass)

	if (!targetComponent) {
		console.error('Ошибка при инициализации целевого компонента: null');
	}

	fetch('/' + componentName)
		.then(response => response.text())
		.then(html => {
			targetComponent.innerHTML = html;
			if (doAfterLoad) {
				doAfterLoad();
			}
			const scripts = document.querySelector('script');
			for (const script in scripts) {
				const newScript = document.createElement('script');
				newScript.textContent = script.textContent;
				document.body.appendChild(newScript);
			}
		})
		.catch(error => console.error('Ошибка загрузки станицы: ', error));
}

function loadProjects() {
	loadComponent('projects', 'page-content', init)
}