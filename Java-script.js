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
// End


// hamburgerbtn code 
const navToggle = document.querySelector(".navmenu");
const menuItems = document.querySelectorAll(".menu-item-has-children");
const subMenu = document.querySelectorAll(".sub-menu");
const menu = document.querySelectorAll(".ok");

document.querySelector(".navbartoggle").addEventListener("click", (e) => {
    navToggle.classList.add("slide");
});

document.querySelector(".headerclose").addEventListener("click", (e) => {
    navToggle.classList.remove("slide");
});

menuItems.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        const check = ele.querySelector("ul").classList.contains("ok");
        check == true ? closeSubmenu() : closeSubmenu() || ele.querySelector("ul").classList.add("ok");
    })
})

function closeSubmenu() {
    subMenu.forEach((ele) => {
        ele.classList.remove("ok");
    });
}
