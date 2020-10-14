const modalSend = document.querySelector('.modal-send');
const sendUs = document.querySelector('.send-us');
const closeSend = modalSend.querySelector('.close-button');
const sendForm = modalSend.querySelector('.send-form');
const userName = sendForm.querySelector('.modal-username');
const userMail = sendForm.querySelector('.user-email');
const userMessage = sendForm.querySelector('.user-message');
const mapPopup = document.querySelector('.popup-map');
const map = document.querySelector('.navigation-map');
const closeMap = mapPopup.querySelector('.close-button');


sendUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalSend.classList.add('modal-show');
  userName.focus();
});

closeSend.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalSend.classList.remove('modal-show');
});

sendForm.addEventListener('submit', function(evt) {
  if(!userName.value || !userMail.value || !userMessage.value) {
    evt.preventDefault();
    modalSend.classList.remove('modal-error');
    modalSend.offsetWidth = modalSend.offsetWidth;
    modalSend.classList.add('modal-error');
  }
})

map.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});  

closeMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    if(modalSend.classList.contains('modal-show') || mapPopup.classList.contains('modal-show')) {
      evt.preventDefault;
      modalSend.classList.remove('modal-show');
      mapPopup.classList.remove('modal-show');
    }
  }
});