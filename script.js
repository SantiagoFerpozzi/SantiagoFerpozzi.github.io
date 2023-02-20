
const PopUp = document.getElementById('PopUp');
const abrirPopUp = document.getElementById('abrirPopUp');
const cerrarPopUp = document.getElementById('cerrarPopUp');

  abrirPopUp.addEventListener('click', () => {
    PopUp.showModal();
  });

  cerrarPopUp.addEventListener('click', () => {
    PopUp.close();
  });