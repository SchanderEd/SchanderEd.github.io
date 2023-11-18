const modal = document.querySelector('.modal');
const body = document.querySelector('body');
let backdrop = document.createElement('div');
let isModalOpen = false;

document.onclick = function (e) {
  if(e.target === modal && isModalOpen) {
    closeModal();
  }
};

const closeModal = () => {
  modal.style.display = "none";
  body.removeChild(backdrop);
  body.classList.remove('modal-open')
  return isModalOpen = false;
}

const openModal = () => {
  modal.classList.add('show');
  modal.style.display = 'block';
  body.classList.add('modal-open');

  backdrop.classList.add('modal-backdrop', 'fade', 'show');
  body.appendChild(backdrop);

  return isModalOpen = true;
}

function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  }
  else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}
addEvent(window, "load", function (e) {
  addEvent(document, "mouseout", function (e) {
    e = e ? e : window.event;
    let from = e.relatedTarget || e.toElement;
    if (!from) {
      if (!isModalOpen) {
        openModal()
      }
    }
  });
});