const popupContainer = document.querySelector('.popup');

const popupGuest = document.querySelector('#popupGuest');
const popupCallback = document.querySelector('#popupCallback');
const popupSale = document.querySelector('#popupSale');

let popups = [
  popupGuest,
  popupCallback,
  popupSale
];

const killPopup = (popup) => {
  popup.remove()
}

const closePopup = (evt) => {
  const popup = document.getElementById(evt.target.id);
  popup.remove()
  clearInterval(renderInterval);
  renderInterval = setInterval(renderPopup, 10000);
}

const renderPopup = () => {
  let popup;
  let id = "id" + Math.random().toString(16).slice(2);

  const getPopup = (popupsArray) => {
    let random = Math.floor(Math.random() * popupsArray.length);
    return popup = popupsArray[random];
  };

  getPopup(popups);

  const popupItem = popup.content.cloneNode(true);

  const closeBtn = popupItem.querySelector('.popup__close-btn');
  closeBtn.id = id;

  closeBtn.addEventListener('click', closePopup)

  const popupWrapper = popupItem.querySelector('.popup__wrapper');
  popupWrapper.id = id;

  popupContainer.append(popupItem);

  function killPopup(popup) {
    popup.remove()
  }
  
  setTimeout(killPopup, 10000, popupWrapper);
};

let renderInterval = setInterval(renderPopup, 10000);

if (window.screen.width <= 992) {
  clearInterval(renderInterval);
}