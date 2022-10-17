const { fillWidget } = require('./fillwidget');
const { getCurrentCity } = require('./api');

const arrayTemp = [];

function createCard(nameCity, lon, lat, country) {
  const objForSave = {
    name: nameCity,
    lon,
    lat,
    country,
  };
  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('card');
  imagesContainer.classList.add('cities__card');
  const imageButtonBox = document.createElement('div');
  imageButtonBox.classList.add('card__images');
  const currentTime = new Date();
  const currentHours = currentTime.getHours();

  if (currentHours > 21 || currentHours < 6) {
    imageButtonBox.style.backgroundColor = '#2a344b';
  } else {
    imageButtonBox.style.backgroundColor = '#90caf9';
  }

  const cardButton = document.createElement('button');
  cardButton.classList.add('card__button');
  imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${objForSave.country})`;
  if (nameCity) {
    cardButton.textContent = nameCity;
  }
  imageButtonBox.appendChild(cardButton);
  imagesContainer.appendChild(imageButtonBox);
  cardButton.addEventListener('click', () => {
    getCurrentCity(lon, lat)
      .then((result) => {
        fillWidget(result);
        imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${result.sys.country})`;
        objForSave.country = `${result.sys.country}`;
      });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  const boxImages = document.getElementById('box-images');
  const arrayOfCards = document.getElementsByClassName('cities__card');
  if (arrayOfCards.length === 5) {
    boxImages.firstElementChild.remove();
  }

  if (arrayTemp.length === 5) {
    arrayTemp.shift();
  }

  arrayTemp.push(objForSave);
  localStorage.setItem('obj', JSON.stringify(arrayTemp));

  boxImages.appendChild(imagesContainer);
}
module.exports = { createCard };
