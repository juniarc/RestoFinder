const CloseBtnInitiator = {
  init({ closeBtnForModal, modalMenu }) {
    closeBtnForModal.addEventListener('click', () => {
      modalMenu.remove();
    });
  },
};

export default CloseBtnInitiator;
