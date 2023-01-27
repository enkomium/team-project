(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-thanks-open]'),
      closeModalBtn: document.querySelector('[data-modal-thanks-close]'),
      modal: document.querySelector('[data-modal-thanks]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-thanks-open");
      refs.modal.classList.toggle('backdrop--is-hidden');
    }
  })();