const covid = document.querySelector(".covid");
const xButton = document.querySelector(".close-alert");

const deleteElement = () => {
  covid.remove();
};

xButton.addEventListener("click", deleteElement);
