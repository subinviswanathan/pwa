if ('serviceWorker' in navigator) {
	// navigator.serviceWorker.register('/sw.js', { scope: '/help/' }).then(() => {
	// 	console.log('Service Workder Registered');
	// });
	navigator.serviceWorker.register('/sw.js').then(() => {
		console.log('Service Workder Registered');
	});
}

var deferredPromptEvent;

window.addEventListener('beforeinstallprompt', (ev) => {
	ev.preventDefault();
	console.log('beforeinstallpromptfired');
	deferredPromptEvent = ev;

	return false;
})
