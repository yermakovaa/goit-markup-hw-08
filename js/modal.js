const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);
  refs.modal.classList.remove('is-hidden');
}

function onCloseModal() {
  refs.closeModalBtn.removeEventListener('click', onCloseModal);
  refs.modal.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscKeyPress);
  refs.modal.classList.add('is-hidden');
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';

  if (e.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
