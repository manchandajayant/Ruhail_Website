window.onload = function () {
  var images = [
    "/assets/main-page.jpg",
    "/assets/ruhail-pic.JPG",
    "/assets/3rd.jpg",
  ];
  var selectImage = document.getElementById("images");

  setInterval(changeImage, 10000);

  function changeImage() {
    var i = Math.floor(Math.random() * 3);
    selectImage.style.backgroundImage = "url('" + images[i] + "')";
  }
};

const homePage = document.getElementById("images");
const workPage = document.getElementById("work-section");
const aboutPage = document.getElementById("about-section");
console.log(workPage);
function collapse(id) {
  console.log(id);
  if (id === "work") {
    homePage.style.display = "none";
    workPage.style.display = "block";
    aboutPage.style.display = "none";
  } else if (id === "info") {
    aboutPage.style.display = "block";
    homePage.style.display = "none";
    workPage.style.display = "none";
  } else if (id === "home") {
    aboutPage.style.display = "none";
    homePage.style.display = "block";
    workPage.style.display = "none";
  }
}
