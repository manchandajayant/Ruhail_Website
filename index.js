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
const aboutLink = document.getElementById("about-heading");
const cvLink = document.getElementById("cv-heading");
const contactLink = document.getElementById("contact-heading");
const contactContainer = document.getElementById("contact");
const aboutContainer = document.getElementById("about-detail-container");
const cvContainer = document.getElementById("cv");

const anchorTags = document.getElementsByTagName("a");
const h3Tags = document.getElementsByTagName("h3");

const arrForh3 = Array.from(h3Tags);
arrForh3.map((element) => {
  element.style.fontWeight = "900";
});

const arr = Array.from(anchorTags);
arr.map((element) => {
  element.setAttribute("target", "_blank");
  element.style.color = "#663600";
});

function collapse(id) {
  console.log(id);
  if (id === "work") {
    homePage.style.display = "none";
    workPage.style.display = "block";
    aboutPage.style.display = "none";
    workActive();
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

function clickActive(id) {
  if (id === "about-heading") {
    cvContainer.style.display = "none";
    aboutContainer.style.display = "block";
    contactContainer.style.display = "none";
    cvLink.style.color = "#DCDCDC";
    contactLink.style.color = "#DCDCDC";
    aboutLink.style.color = "#000";
  } else if (id === "cv-heading") {
    aboutContainer.style.display = "none";
    cvContainer.style.display = "block";
    contactContainer.style.display = "none";
    aboutLink.style.color = "#DCDCDC";
    contactLink.style.color = "#DCDCDC";
    cvLink.style.color = "#000";
  } else if (id === "contact-heading") {
    aboutContainer.style.display = "none";
    contactContainer.style.display = "block";
    cvContainer.style.display = "none";
    cvLink.style.color = "#DCDCDC";
    aboutLink.style.color = "#DCDCDC";
    contactLink.style.color = "#000";
  }
}

function workActive() {
  var imagesForMeetings = [
    "./assets/01.png",
    "./assets/02.png",
    "./assets/03.png",
    "./assets/04.png",
    "./assets/05.png",
    "./assets/06.png",
    "./assets/07.png",
    "./assets/08.png",
    "./assets/09.png",
    "./assets/10.png",
    "./assets/11.png",
    "./assets/12.png",
    "./assets/13.png",
    "./assets/14.png",
  ];

  const imageSrc = document.getElementsByTagName("img")[0];

  setInterval(changeImageForMeetings, 9000);
  var i = 1;
  function changeImageForMeetings() {
    imageSrc.setAttribute("src", imagesForMeetings[i]);
    i >= 13 ? (i = 1) : (i = i + 1);
  }
}
