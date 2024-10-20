const shareImageButton = document.querySelector('#share-image-button');
const createPostArea = document.querySelector('#create-post');
const closeCreatePostModalButton = document.querySelector(
	'#close-create-post-modal-btn'
);

const sharedMomentsArea = document.querySelector('#shared-moments');

function openCreatePostModal() {
	createPostArea.style.display = 'block';

	if (window.deferredPromptEvent) {
		window.deferredPromptEvent.prompt();

		window.deferredPromptEvent.userChoice.then((choice) => {
			console.log(choice.outcome);

			if (choice.outcome === 'dismissed') {
				console.log('User cancelled installtion');
			} else {
				console.log('User added to homescreen');
			}
		});

		window.deferredPromptEvent = null;
	}
}

function closeCreatePostModal() {
	createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

const createCard = () => {
	var cardWrapper = document.createElement('div');
	cardWrapper.className = 'shared-moment-card mdl-card mdl-shadow--2dp';
	var cardTitle = document.createElement('div');
	cardTitle.className = 'mdl-card__title';
	cardTitle.style.backgroundImage = 'url("/src/images/sf-boat.jpg")';
	cardTitle.style.backgroundSize = 'cover';
	cardTitle.style.height = '180px';
	cardWrapper.appendChild(cardTitle);
	var cardTitleTextElement = document.createElement('h2');
	cardTitleTextElement.className = 'mdl-card__title-text';
	cardTitleTextElement.textContent = 'San Francisco Trip';
	cardTitle.appendChild(cardTitleTextElement);
	var cardSupportingText = document.createElement('div');
	cardSupportingText.className = 'mdl-card__supporting-text';
	cardSupportingText.textContent = 'In San Francisco';
	cardSupportingText.style.textAlign = 'center';
	cardWrapper.appendChild(cardSupportingText);
	componentHandler.upgradeElement(cardWrapper);
	sharedMomentsArea.appendChild(cardWrapper);
};

fetch('https://httpbin.org/get')
	.then(function (res) {
		return res.json();
	})
	.then(function (data) {
		createCard();
	});
