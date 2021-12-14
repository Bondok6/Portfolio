const mobileMenu = () => {
  const btnMenu = document.querySelector(".burger");
  const menuDisplay = document.querySelector(".nav-list");
  const links = document.querySelectorAll(".list-item");
  const iconSrc = document.querySelector(".burger");

  btnMenu.addEventListener("click", () => {
    menuDisplay.classList.toggle("menu-active");
    iconSrc.src = "images/exit.svg";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menuDisplay.classList.remove("menu-active");
    });
  });

  // btnMenu.addEventListener("keydown", (e) => {
  //   if (e.key === "") {
  //     menuDisplay.classList.toggle("menu-active");
  //     iconSrc.src = "images/exit.svg";
  //   }
  // });
};

mobileMenu();
