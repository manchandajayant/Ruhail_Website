var running = true;
window.onload = function () {
  var images = [
    "/assets/main-page.jpg",
    "/assets/ruhail-pic.JPG",
    "/assets/3rd.jpg",
  ];

  setInterval(changeImage, 7000);

  function changeImage() {
    if (running) {
      var i = Math.floor(Math.random() * 3);
      document.body.style.backgroundImage = `url(${images[i]})`;
    }
  }
};

var m = document.getElementById("meetings-work");
var h = document.getElementById("hack-lab-work");
var p = document.getElementById("pamir-work");
var c = document.getElementById("cuon-work");
var t = document.getElementById("tongue-work");
var i = document.getElementById("ltalam-work");

var homePage = document.getElementById("images");
var workPage = document.getElementById("work-section");
var aboutPage = document.getElementById("about-section");
var aboutLink = document.getElementById("about-heading");
var cvLink = document.getElementById("cv-heading");
var contactLink = document.getElementById("contact-heading");
var contactContainer = document.getElementById("contact");
var aboutContainer = document.getElementById("about-detail-container");
var cvContainer = document.getElementById("cv");

var anchorTags = document.getElementsByTagName("a");
var h3Tags = document.getElementsByTagName("h3");

var arrForh3 = Array.from(h3Tags);
arrForh3.map((element) => {
  element.style.fontWeight = "900";
});

const arr = Array.from(anchorTags);
arr.map((element) => {
  element.setAttribute("target", "_blank");
  element.style.color = "#000";
  element.style.fontWeight = "900";
});

function collapse(id) {
  const pTags = document.getElementsByClassName("nav")[0].children;
  const arr = Array.from(pTags);
  const workInfo = document.getElementsByClassName("work-info")[0];

  if (id === "work") {
    running = false;
    document.body.style.backgroundImage = "none";
    homePage.style.display = "none";
    workPage.style.display = "block";
    aboutPage.style.display = "none";
    arr.forEach((element) => {
      element.style.color = "#000";
    });
    m.style.display = "none";
    h.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    t.style.display = "none";
    i.style.display = "none";
  } else if (id === "info") {
    running = false;
    document.body.style.backgroundImage = "none";
    aboutPage.style.display = "block";
    homePage.style.display = "none";
    workPage.style.display = "none";

    arr.forEach((element) => {
      element.style.color = "#000";
    });
    m.style.display = "none";
    h.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    t.style.display = "none";
    i.style.display = "none";
  } else if (id === "home") {
    document.body.style.backgroundImage = "url(/assets/ruhail-pic.JPG)";
    running = true;
    aboutPage.style.display = "none";
    homePage.style.display = "block";
    workPage.style.display = "none";
    arr.forEach((element) => {
      element.style.color = "#fff";
    });
    m.style.display = "none";
    h.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    t.style.display = "none";
    i.style.display = "none";
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

function imagesForMeeting() {
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

  for (var i = 0; i < imagesForMeetings.length; i++) {
    let divForImages = document.createElement("div");
    let element = document.createElement("img");
    element.setAttribute("src", imagesForMeetings[i]);

    divForImages.appendChild(element);
    divForImages.style.margin = "60px";
    divForImages.style.padding = "40px";
    element.style.width = "100%";
    element.style.height = "auto";
    element.style.display = "block";
    m.appendChild(divForImages);
  }
}

function mouseOverImage(id) {
  const work = document.getElementsByClassName("links-to-work");

  const arr = Array.from(work);
  arr.forEach((element) => {
    element.style.color = "#fff";
  });
  if (id === "meetings") {
    document.body.style.backgroundImage = "url(./assets/01.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  } else if (id === "hacklab") {
    document.body.style.backgroundImage = "url(./assets/ctm.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  } else if (id === "pamir") {
    document.body.style.backgroundImage = "url(./assets/pamir2.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  } else if (id === "cuon") {
    document.body.style.backgroundImage = "url(./assets/cuon.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  } else if (id === "tongue") {
    document.body.style.backgroundImage = "url(./assets/tongue.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  } else if ("ltalam") {
    document.body.style.backgroundImage = "url(./assets/ltalam.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  }
}

function mouseOut() {
  document.body.style.backgroundImage = "none";
  const work = document.getElementsByClassName("links-to-work");

  const arr = Array.from(work);
  arr.forEach((element) => {
    element.style.color = "#000";
  });
}

const workSection = document.getElementById("work-section");

function clickWork(id) {
  if (id === "meetings") {
    imagesForMeeting();
    workSection.style.display = "none";
    m.style.display = "block";
    h.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    t.style.display = "none";
    i.style.display = "none";
  } else if (id === "hacklab") {
    workSection.style.display = "none";
    m.style.display = "none";
    h.style.display = "block";
    p.style.display = "none";
    c.style.display = "none";
    t.style.display = "none";
    i.style.display = "none";
  } else if (id === "pamir") {
    workSection.style.display = "none";
    m.style.display = "none";
    h.style.display = "none";
    p.style.display = "block";
    c.style.display = "none";
    t.style.display = "none";
    i.style.display = "none";
  } else if (id === "cuon") {
    workSection.style.display = "none";
    m.style.display = "none";
    h.style.display = "none";
    p.style.display = "none";
    c.style.display = "block";
    t.style.display = "none";
    i.style.display = "none";
  } else if (id === "tongue") {
    workSection.style.display = "none";
    m.style.display = "none";
    h.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    t.style.display = "block";
    i.style.display = "none";
  } else if (id === "italam") {
    workSection.style.display = "none";
    m.style.display = "none";
    h.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    t.style.display = "none";
    i.style.display = "block";
  }
}
