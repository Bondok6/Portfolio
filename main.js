const mobileMenu = () => {
  const btnMenu = document.querySelector('.nav-menu');
  const menuDisplay = document.querySelector('.nav-list');
  const links = document.querySelectorAll('.list-item');
  const iconSrc = document.querySelector('.burger');
  const ImgUrl = document.querySelector('.burger').src;

  const openMenu = () => {
    menuDisplay.classList.toggle('menu-active');
    if (iconSrc.src === ImgUrl) iconSrc.src = 'images/exit.svg';
    else iconSrc.src = ImgUrl;
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') openMenu();
  });

  btnMenu.addEventListener('click', openMenu);
  links.forEach((link) => {
    link.addEventListener('click', openMenu);
  });
};

mobileMenu();
