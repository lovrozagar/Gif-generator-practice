const img = document.querySelector('img');
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

initAppHeight();
renderCatGif();
form.addEventListener('submit', (e) => renderSearchedGif(e));

function renderCatGif() {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=DVPewIBBxf577EE4gBt9GP6dtunEMElL&s=cats',
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => (img.src = response.data.images.original.url));
}

function renderSearchedGif(e) {
  e.preventDefault();
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=DVPewIBBxf577EE4gBt9GP6dtunEMElL&s=' +
      input.value,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => (img.src = response.data.images.original.url))
    .catch((error) => renderCatGif());
}

function initAppHeight() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', appHeight);
  appHeight();
}
