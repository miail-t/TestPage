let slider_container = document.getElementById("slider-container");
let dropdown = document.getElementById("dropdown");
let dropdown_control = document.getElementById("dropdown_control");

getBottomLine = () => {
  return slider_container.offsetHeight - dropdown_control.offsetHeight;
};

getUpperBound = () => {
  return slider_container.offsetHeight - dropdown.offsetHeight;
};

dropdown.style.left = `${ (innerWidth-dropdown.offsetWidth)/2}px`;

window.addEventListener("resize", () => {
  dropdown.style.top = `${getBottomLine()}px`;
  dropdown.style.left = `${ (innerWidth-dropdown.offsetWidth)/2}px`;

});

dropdown.style.top = `${getBottomLine()}px`;

isOpenDropDown = () => {
  if (dropdown.offsetTop === getBottomLine()) {
    let id = setInterval(() => moveDropDown(id, "up"));
  } else {
    let id = setInterval(() => moveDropDown(id, "down"));
  }

  moveDropDown = (id, type) => {
    if (type === "up") {
      dropdown.style.top = `${
        new Number(dropdown.style.top.replace("px", "")) - 1
      }px`;
    } else {
      dropdown.style.top = `${
        new Number(dropdown.style.top.replace("px", "")) + 1
      }px`;
    }
    if (
      (dropdown.style.top.replace("px", "") == getUpperBound() &&
        type === "up") ||
      (type === "down" &&
        dropdown.style.top.replace("px", "") == getBottomLine())
    ) {
      clearInterval(id);
    }
  };
};

let openModalBtn = document.getElementById("btn-modal");
let owerfloy = document.getElementById("owerflow");
let modal = document.getElementById("modal");
let closeModalBtn = document.getElementById("closeModal");

openModalBtn.onclick = () => {
  owerfloy.className = owerfloy.className.concat(" block-registration ");
  modal.className = modal.className.concat(" block-registration ");
  modal.style.left = `${(innerWidth - modal.offsetWidth) / 2}px`;
};

owerfloy.onclick = () => {
  closeModal();
};

closeModalBtn.onclick = () => {
  closeModal();
};

closeModal = () => {
  owerfloy.className = owerfloy.className.replace("block-registration ", "");
  modal.className = modal.className.replace("block-registration ", "");
};
