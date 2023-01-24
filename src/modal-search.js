(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-search-open]'),
      closeModalBtn: document.querySelector('[data-modal-search-close]'),
      modal: document.querySelector('[data-modal-search]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('backdrop--is-hidden');
    }
  })();