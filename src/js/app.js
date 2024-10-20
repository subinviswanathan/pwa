if ('serviceWorker' in navigator) {
	// navigator.serviceWorker.register('/sw.js', { scope: '/help/' }).then(() => {
	// 	console.log('Service Workder Registered');
	// });
	navigator.serviceWorker
		.register('/sw.js')
		.then(() => {
			console.log('Service Workder Registered');
		})
		.catch(console.log);
}

window.addEventListener('beforeinstallprompt', (ev) => {
	ev.preventDefault();
	console.log('beforeinstallpromptfired');
	window.deferredPromptEvent = ev;

	return false;
});

// const xhr = new XMLHttpRequest();

// xhr.onload = function (res) {
// 	console.log(res);
// };

// xhr.open('GET', 'https://httpbin.org/ip');
// xhr.addEventListener('load', function () {
// 	console.log(this.response);
// });

// xhr.send();

// fetch('https://httpbin.org/ip')
// 	.then((res) => res.json())
// 	.then(console.log);

// console.log('Starting');

// const loop = () => {
// 	for (let i = 0; i < 100000000; i++) {}
// };

// console.time('Timer');
// const promise = new Promise((res, rej) => {
// 	res(loop());
// });
// // .then((res) => loop());

// console.log('End');
// console.timeEnd('Timer');
