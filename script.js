const img = document.querySelector('img');
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

initAppHeight();
renderGif(null);
form.addEventListener('submit', (e) => renderGif(e));

async function renderGif(e) {
  if (e) e.preventDefault();
  try {
    const response = await getGif(input.value);
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch {
    console.log(Error);
  }
}

function getGif(keyword) {
  if (keyword) {
    return fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=DVPewIBBxf577EE4gBt9GP6dtunEMElL&s=' +
        keyword,
      { mode: 'cors' }
    );
  } else {
    return fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=DVPewIBBxf577EE4gBt9GP6dtunEMElL&s=cats',
      { mode: 'cors' }
    );
  }
}

function initAppHeight() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', appHeight);
  appHeight();
}
