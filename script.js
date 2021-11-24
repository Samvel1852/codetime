let slideIndex = 0;

function makeAllVisible() {
  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[0].style.display = "block";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[1].style.display = "block";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[2].style.display = "block";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[3].style.display = "block";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[4].style.display = "block";
}

function makeAllHidden() {
  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[0].style.display = "none";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[1].style.display = "none";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[2].style.display = "none";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[3].style.display = "none";

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[4].style.display = "none";
}

if (window.innerWidth < 501) {
  makeAllHidden();
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth < 501) {
    makeAllHidden();
  } else {
    makeAllVisible();
  }

  document.getElementsByClassName(
    "main-section_service-types_service-block"
  )[0].style.display = "block";
});

document.getElementsByClassName(
  "main-section_service-types_service-block"
)[0].style.display = "block";

document
  .getElementById("main-section_service-types_slide-btn-next")
  .addEventListener("click", function () {
    makeAllHidden();
    document.getElementsByClassName("main-section_service-types_service-block")[
      ++slideIndex
    ].style.display = "block";

    if (slideIndex === 4) {
      document
        .getElementById("main-section_service-types_slide-btn-next")
        .setAttribute("disabled", true);
      document
        .getElementById("main-section_service-types_slide-btn-prev")
        .removeAttribute("disabled");
    }
  });

document
  .getElementById("main-section_service-types_slide-btn-prev")
  .addEventListener("click", function () {
    makeAllHidden();
    document.getElementsByClassName("main-section_service-types_service-block")[
      --slideIndex
    ].style.display = "block";

    if (slideIndex === 0) {
      document
        .getElementById("main-section_service-types_slide-btn-prev")
        .setAttribute("disabled", true);
      document
        .getElementById("main-section_service-types_slide-btn-next")
        .removeAttribute("disabled");
    }
  });
