const openModalBtn = document.getElementById("btn-modal");
const owerfloy = document.getElementById("owerflow");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.onclick = function () {
  owerfloy.className = owerfloy.className.concat(" modal_activ");
  modal.className = modal.className.concat(" registration-area_open");
};

owerfloy.onclick = function () {
  closeModal();
};

closeModalBtn.onclick = function () {
  closeModal();
};

function closeModal() {
  owerfloy.className = owerfloy.className.replace("modal_activ", "");
  modal.className = modal.className.replace("registration-area_open", "");
}

const slider_container = document.getElementById("wrapper");
const dropdown = document.getElementById("dropdown");
const dropdown_control = document.getElementById("dropdown_control");
let dropdownDirection = "up";

function getBottomLine() {
  return slider_container.offsetHeight - dropdown_control.offsetHeight;
}

window.addEventListener("resize", function () {
  dropdown.style.top = getBottomLine() + "px";
});

dropdown.style.top = getBottomLine() + "px";

dropdown_control.onclick = function () {
  if (dropdownDirection === "up") {
    dropdown.className = dropdown.className.concat(" dropdown-menu-up");
    dropdownDirection = "down";
  } else {
    dropdown.className = dropdown.className.replace(" dropdown-menu-up", "");
    dropdownDirection = "up";
  }
};
