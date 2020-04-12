const lineImage = document.getElementById("wrapper");
const masItem = document.getElementsByClassName("slider__item");
let dots = document.getElementsByClassName("slider-row-dots__dot");
let slideIndex = 1;
let step = -100;
let animateRun = false;

item = masItem[masItem.length - 1].cloneNode(true);
lineImage.insertBefore(item, masItem[0]);

item = masItem[1].cloneNode(true);
lineImage.appendChild(item);

function slideRun(type) {
  if (type === "left" && animateRun === false) {
    animateRun = true;
    slideIndex--;
    step += 100;

    if (slideIndex <= 0) {
      new Promise((resolve, reject) => {
        lineImage.style.transform = "translateX(" + step + "%)";
        setTimeout(() => {
          lineImage.className = lineImage.className.concat(
            " slider__wrapper_an"
          );
          lineImage.style.transform =
            "translateX(-" + 100 * (masItem.length - 2) + "%)";

          resolve();
        }, 1000);
      }).then(() => {
        slideIndex = masItem.length - 2;
        step = -300;
        dots[0].className = "slider-row-dots__dot";
        dots[slideIndex - 1].className = dots[slideIndex - 1].className.concat(
          " active"
        );

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            lineImage.className = lineImage.className.replace(
              " slider__wrapper_an",
              ""
            );
          }, 100);
        }).finally((animateRun = false));
      });
    } else {
      lineImage.style.transform = "translateX(" + step + "%)";
      changeActivDot(type);
      animateRun = false;
    }
  } else if (type === "right" && animateRun === false) {
    animateRun = true;
    slideIndex++;
    step -= 100;

    if (slideIndex + 1 === masItem.length) {
      new Promise((resolve, reject) => {
        lineImage.style.transform = "translateX(" + step + "%)";
        setTimeout(() => {
          lineImage.className = lineImage.className.concat(
            " slider__wrapper_an"
          );
          lineImage.style.transform = "translateX(-" + 100 + "%)";
          resolve();
        }, 1000);
      }).then(() => {
        dots[slideIndex - 2].className = "slider-row-dots__dot";
        dots[0].className = dots[0].className.concat(" active");
        slideIndex = 1;
        step = -100;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            lineImage.className = lineImage.className.replace(
              " slider__wrapper_an",
              ""
            );
          }, 100);
        }).finally((animateRun = false));
      });
    } else {
      lineImage.style.transform = "translateX(" + step + "%)";
      changeActivDot(type);
      animateRun = false;
    }
  }
}

function getSlide(index) {
  lineImage.style.transform = "translateX(-" + 100 * index + "%)";
  dots[slideIndex - 1].className = "slider-row-dots__dot";
  dots[index - 1].className = dots[index - 1].className.concat(" active");
  slideIndex = index;
}

function changeActivDot(type) {
  type === "left"
    ? (dots[slideIndex].className = "slider-row-dots__dot")
    : (dots[slideIndex - 2].className = "slider-row-dots__dot");

  dots[slideIndex - 1].className = dots[slideIndex - 1].className.concat(
    " active"
  );
}
