const lineImage = document.getElementById("wrapper");
const masItem = document.getElementsByClassName("slider__item");
let dots = document.getElementsByClassName("slider-row-dots__dot");
let slideIndex = 1;
let step = -100;
let animateRun = false;

const afteritem = masItem[masItem.length - 1].cloneNode(true);
lineImage.insertBefore(afteritem, masItem[0]);

const beforeitem = masItem[1].cloneNode(true);
lineImage.appendChild(beforeitem);

function slideRun(type) {
  if (type === "left" && animateRun === false) {
    console.log("SL " + slideIndex);
    animateRun = true;
    step += 100;

    if (slideIndex <= 1) {
      new Promise(function (resolve, reject) {
        slideIndex--;
        lineImage.style.transform = "translateX(" + step + "%)";
        setTimeout(function () {
          lineImage.className = lineImage.className.concat(
            " slider__wrapper_an"
          );
          lineImage.style.transform =
            "translateX(-" + 100 * (masItem.length - 2) + "%)";

          resolve();
        }, 1000);
      }).then(function () {
        slideIndex = masItem.length - 2;
        step = -300;
        dots[0].className = "slider-row-dots__dot";
        dots[slideIndex - 1].className = dots[slideIndex - 1].className.concat(
          " active"
        );

        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            lineImage.className = lineImage.className.replace(
              " slider__wrapper_an",
              ""
            );
          }, 100);
        }).finally((animateRun = false));
      });
    } else {
      slideIndex--;
      lineImage.style.transform = "translateX(" + step + "%)";
      changeActivDot(type);
      animateRun = false;
    }
  } else if (type === "right" && animateRun === false) {
    console.log("SL " + slideIndex);
    animateRun = true;
    step -= 100;

    if (slideIndex + 2 === masItem.length) {
      new Promise(function (resolve, reject) {
        slideIndex++;
        lineImage.style.transform = "translateX(" + step + "%)";
        setTimeout(function () {
          lineImage.className = lineImage.className.concat(
            " slider__wrapper_an"
          );
          lineImage.style.transform = "translateX(-" + 100 + "%)";
          resolve();
        }, 1000);
      }).then(function () {
        dots[slideIndex - 2].className = "slider-row-dots__dot";
        dots[0].className = dots[0].className.concat(" active");
        slideIndex = 1;
        step = -100;
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            lineImage.className = lineImage.className.replace(
              " slider__wrapper_an",
              ""
            );
          }, 100);
        }).finally((animateRun = false));
      });
    } else {
      slideIndex++;
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
  step = -slideIndex * 100;
}

function changeActivDot(type) {
  type === "left"
    ? (dots[slideIndex].className = "slider-row-dots__dot")
    : (dots[slideIndex - 2].className = "slider-row-dots__dot");

  dots[slideIndex - 1].className = dots[slideIndex - 1].className.concat(
    " active"
  );
}
