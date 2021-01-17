var running = true;
var meetingsWork = document.getElementById("meetings-work");
var hackLabWork = document.getElementById("hack-lab-work");
var pamirWork = document.getElementById("pamir-work");
var cuonWork = document.getElementById("cuon-work");
var tongueWork = document.getElementById("tongue-work");
var ltalamWork = document.getElementById("ltalam-work");

var workArray = [];
workArray.push(meetingsWork);
workArray.push(hackLabWork);
workArray.push(pamirWork);
workArray.push(cuonWork);
workArray.push(tongueWork);
workArray.push(ltalamWork);

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
var arr = Array.from(anchorTags);

var arrayForID = [
  {
    url:
      "https://res.cloudinary.com/manjay/image/upload/v1610779245/16_ifynb7.webp",
    id: "meetings",
  },
  {
    url:
      "https://res.cloudinary.com/manjay/image/upload/v1610779236/ctm_h6hh4l.webp",
    id: "hack-lab",
  },
  {
    url:
      "https://res.cloudinary.com/manjay/image/upload/v1610779261/pamir2.webp",
    id: "pamir",
  },
  {
    url:
      "https://res.cloudinary.com/manjay/image/upload/v1610779235/cuon_g2xau5.webp",
    id: "cuon",
  },
  {
    url:
      "https://res.cloudinary.com/manjay/image/upload/v1610779235/tongue_squaw8.webp",
    id: "tongue",
  },
  {
    url:
      "https://res.cloudinary.com/manjay/image/upload/v1610779242/ltalam_wv62mw.webp",
    id: "ltalam",
  },
];

var images = [
  "https://res.cloudinary.com/manjay/image/upload/v1610779244/main-page_wo0kzn.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779252/ruhail-pic_spbhli.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779244/3rd_vq90es.webp",
];

var imagesForMeetings = [
  "https://res.cloudinary.com/manjay/image/upload/v1610779241/01_l4lzsw.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779234/02_tc5gpm.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779233/03_rigefs.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779239/04_hxfkst.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779237/05_izsn6e.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779240/06_tuxrqu.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779240/07_suboui.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779238/08_fiukrq.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779237/09_uyf2of.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779241/10_lxnw7s.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779239/11_spzvnv.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779237/12_lhghiv.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779249/13_zeabkh.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779236/14_ig8ruy.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779233/15_qmsuez.webp",
  "https://res.cloudinary.com/manjay/image/upload/v1610779245/16_ifynb7.webp",
];

window.onload = function () {
  setInterval(changeImage, 7000);
  function changeImage() {
    if (running) {
      var i = Math.floor(Math.random() * 3);
      document.body.style.backgroundImage = `url(${images[i]})`;
    }
  }
};

arrForh3.map((element) => {
  element.style.fontWeight = "900";
});

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
    workPage.style.display = "flex";
    workPage.style.justifyContent = "space-between";
    aboutPage.style.display = "none";
    arr.forEach((element) => {
      element.style.color = "#000";
    });
    workArray.forEach((element) => {
      element.style.display = "none";
    });
  } else if (id === "info") {
    running = false;
    document.body.style.backgroundImage = "none";
    aboutPage.style.display = "block";
    homePage.style.display = "none";
    workPage.style.display = "none";

    arr.forEach((element) => {
      element.style.color = "#000";
    });

    workArray.forEach((element) => {
      element.style.display = "none";
    });
  } else if (id === "home") {
    document.body.style.backgroundImage =
      "url(https://res.cloudinary.com/manjay/image/upload/v1610779252/ruhail-pic_spbhli.webp)";
    running = true;
    aboutPage.style.display = "none";
    homePage.style.display = "block";
    workPage.style.display = "none";

    arr.forEach((element) => {
      element.style.color = "#fff";
    });

    workArray.forEach((element) => {
      element.style.display = "none";
    });
  }
}

function clickActive(id) {
  console.log(id, aboutContainer);
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
  var element, divForImages;
  divForImages = document.createElement("div");
  for (var i = 0; i < imagesForMeetings.length; i++) {
    element = document.createElement("img");
    element.setAttribute("src", imagesForMeetings[i]);
    element.setAttribute("class", "mySlides");
    element.setAttribute("alt", "ruhail-qaisar");
    element.style.width = "100%";
    element.style.height = "auto";
    element.style.display = "block";
    divForImages.style.margin = "0 60px 0 60px";
    divForImages.style.padding = "40px";
    divForImages.appendChild(element);
    meetingsWork.appendChild(divForImages);
  }

  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
  }
}

function imagesForLtalam() {
  var images = [
    "https://res.cloudinary.com/manjay/image/upload/v1610779242/ltalam_wv62mw.webp",
    "https://res.cloudinary.com/manjay/image/upload/v1610779243/ltalam2_flgnfb.webp",
    "https://res.cloudinary.com/manjay/image/upload/v1610779243/ltalam3_hngsaq.webp",
    "https://res.cloudinary.com/manjay/image/upload/v1610779240/ltalam4_q2eaqj.webp",
  ];

  var elementImage, divForImagesinLtalam;
  divForImagesinLtalam = document.createElement("div");

  for (var i = 0; i < images.length; i++) {
    elementImage = document.createElement("img");
    elementImage.setAttribute("src", images[i]);
    elementImage.setAttribute("class", "mySlidesInLtalam");
    element.setAttribute("alt", "ruhail-qaisar");
    elementImage.style.width = "100%";
    elementImage.style.height = "auto";
    elementImage.style.display = "block";
    divForImagesinLtalam.style.margin = "0 60px 0 60px";
    divForImagesinLtalam.style.padding = "40px";
    divForImagesinLtalam.appendChild(elementImage);

    ltalamWork.appendChild(divForImagesinLtalam);
  }

  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlidesInLtalam");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
  }
}

function mouseOverImage(id) {
  const work = document.getElementsByClassName("links-to-work");
  console.log(typeof id);
  const arr = Array.from(work);
  arr.forEach((element) => {
    element.style.color = "#fff";
  });

  for (var i = 0; i < arrayForID.length; i++) {
    if (id === arrayForID[i].id) {
      setImageOnHover(arrayForID[i].url);
    }
  }
}

function setImageOnHover(url) {
  console.log(url);
  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundSize = "cover";
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
    workDisplay("meetings");
  } else if (id === "hack-lab") {
    workDisplay("hack-lab");
  } else if (id === "pamir") {
    workDisplay("pamir");
  } else if (id === "cuon") {
    workDisplay("cuon");
  } else if (id === "tongue") {
    workDisplay("tongue");
  } else if (id === "ltalam") {
    imagesForLtalam();
    workDisplay("ltalam");
  }
}

function workDisplay(arg) {
  workSection.style.display = "none";
  for (var i = 0; i < workArray.length; i++) {
    workArray[i].className === arg
      ? (workArray[i].style.display = "block")
      : (workArray[i].style.display = "none");
  }
}
