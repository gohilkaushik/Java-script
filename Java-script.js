// hamburgerbtn code and a img src change width canditaion
const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.onclick = () => {
  const headerRight = document.querySelector(".header-right");
  const bodyOverlay = document.querySelector("body");
  const menuIcon = document.querySelector(".menu-icon");

  headerRight.classList.toggle("open");
  bodyOverlay.classList.toggle("overlay");
  menuIcon.classList.toggle("on");
  if (menuIcon.classList.contains("on")) {
    menuIcon.src = "./images/close.png";
  } else {
    menuIcon.src = "./images/menu.png";
  }
};
