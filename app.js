const alert = document.querySelector(".alert");
const xButton = document.querySelector(".close-alert");

const deleteElement = () => {
  alert.remove();
};

xButton.addEventListener("click", deleteElement);
