let slider_container = document.getElementById("slider-container");
let dropdown = document.getElementById("dropdown");
let dropdown_control = document.getElementById("dropdown_control");


 function getBottomLine() {
  return slider_container.offsetHeight - dropdown_control.offsetHeight;
}

function getUpperBound() {
  return slider_container.offsetHeight - dropdown.offsetHeight;
}

dropdown.style.left = (innerWidth - dropdown.offsetWidth - 15) / 2 + "px";

window.addEventListener("resize", function () {
  dropdown.style.top = getBottomLine() + "px";
  dropdown.style.left = (innerWidth - dropdown.offsetWidth) / 2 + "px";
});

dropdown.style.top = getBottomLine() + "px";

function isOpenDropDown() {
  if (dropdown.offsetTop === getBottomLine()) {
    let id = setInterval(function () {
      moveDropDown(id, "up");
    });
  } else {
    let id = setInterval(function () {
      moveDropDown(id, "down");
    });
  }

  function moveDropDown(id, type) {
    if (type === "up") {
      dropdown.style.top =
        new Number(dropdown.style.top.replace("px", "")) - 1 + "px";
    } else {
      dropdown.style.top =
        new Number(dropdown.style.top.replace("px", "")) + 1 + "px";
    }
    if (
      (dropdown.style.top.replace("px", "") == getUpperBound() &&
        type === "up") ||
      (type === "down" &&
        dropdown.style.top.replace("px", "") == getBottomLine())
    ) {
      clearInterval(id);
    }
  }
} 

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
