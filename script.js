let slider_container = document.getElementById("slider-container");
let dropdown = document.getElementById("dropdown");
let dropdown_control = document.getElementById("dropdown_control");

getBottomLine = () => {
  return slider_container.offsetHeight - dropdown_control.offsetHeight;
};

getUpperBound = () => {
  return slider_container.offsetHeight - dropdown.offsetHeight;
};

window.addEventListener("resize", () => {
  dropdown.style.top = `${getBottomLine()}px`;
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

let btn = document.getElementById("btn-modal");
let owerFloy = document.getElementById("owerflow");
let modal = document.getElementById("modal");
let closeModalBtn = document.getElementById("closeModal");

btn.onclick = () => {
  owerFloy.className = owerFloy.className.concat(" block");
  modal.className = modal.className.concat(" block");
  modal.style.left = `${(innerWidth - modal.offsetWidth) / 2}px`;
};

owerFloy.onclick = () => {
  closeModal();
};

closeModalBtn.onclick = () => {
  closeModal();
};

closeModal = () => {
  owerFloy.className = owerFloy.className.replace("block", "");
  modal.className = modal.className.replace("block", "");
};
