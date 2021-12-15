const mobileMenu = () => {
  const btnMenu = document.querySelector('.nav-menu');
  const menuDisplay = document.querySelector('.nav-list');
  const links = document.querySelectorAll('.list-item');
  const iconSrc = document.querySelector('.burger');
  const ImgUrl = document.querySelector('.burger').src;
  const welcomeLogo = document.querySelector('.logo');

  const openMenu = () => {
    menuDisplay.classList.toggle('menu-active');
    if (welcomeLogo.style.display !== 'none') welcomeLogo.style.display = 'none';
    else welcomeLogo.style.display = 'block';
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

const modalContent = [
  {
    modalImg: 'images/work-screenshots/Bankist.PNG',
    modalName: 'Bankist App',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques.',
    links: [
      'https://bondok6.github.io/Bankist/',
      'https://github.com/Bondok6/Bankist',
    ],
  },
  {
    modalImg: 'images/work-screenshots/expense-tracker.PNG',
    modalName: 'Expense Tracker App',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'This app helps you manage your money on the go. By understanding what you spend money on and how much you spend, you can see exactly where your cash is going.',
    links: [
      'https://github.com/Bondok6/Expense-tracker-app',
      'https://github.com/Bondok6/Expense-tracker-app',
    ],
  },
  {
    modalImg: 'images/work-screenshots/mapty-app.PNG',
    modalName: 'Mapty App',
    technologies: ['javaScript', 'Css', 'Html', 'React'],
    description:
      'In this app, you can log your running or cycling workouts with location, distance, time, and steps/minute. You can also see all your workouts on a map.',
    links: [
      'https://bondok6.github.io/Mapty-app/',
      'https://github.com/Bondok6/Mapty-app',
    ],
  },
  {
    modalImg: 'images/work-screenshots/pigGame.PNG',
    modalName: 'Pig Game',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'Dice Game. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to hold. Go to Github to read more...',
    links: [
      'https://bondok6.github.io/Pig-Game/',
      'https://github.com/Bondok6/Pig-Game',
    ],
  },
  {
    modalImg: 'images/work-screenshots/youtube.PNG',
    modalName: 'YouTube Clone App',
    technologies: ['Css', 'Html', 'Js'],
    description: 'The mockup design of YouTube page.',
    links: [
      'https://bondok6.github.io/odin-youtube/',
      'https://github.com/Bondok6/odin-youtube',
    ],
  },
  {
    modalImg: 'images/work-screenshots/giphy.PNG',
    modalName: 'Giphy App',
    technologies: ['javaScript', 'Css', 'Html'],
    description: 'Giphy Search, Search for the GIF image you want ...',
    links: [
      'https://bondok6.github.io/Giphy-Search/',
      'https://github.com/Bondok6/Giphy-Search',
    ],
  },
];

function openModal(ind) {
  const section = document.querySelector('.work');
  const overlay = document.querySelector('.overlay');

  const modalHtml = `
  <div class='modal'>

  <button type='button' class='modal__exit'>
    <img src='images/exit-modal.svg' alt=''>
  </button>

  <img src='${modalContent[ind].modalImg}' alt='' class='modal__img'>

  <h3 class='modal__name'>${modalContent[ind].modalName}</h3>

  <ul class='card__list modal__tech'>
    <li>${modalContent[ind].technologies[0]}</li>
    <li>${modalContent[ind].technologies[1]}</li>
    <li>${modalContent[ind].technologies[2]}</li>
  </ul>

  <p class='modal__description'>
    ${modalContent[ind].description}
  </p>

  <div class='modal__buttons'>
    <a href='${modalContent[ind].links[0]}' class='btn btn--green'>See Live <img src='images/see-live.svg' alt=''></a>
    <a href='${modalContent[ind].links[1]}' class='btn btn--green'>See Source <img src='images/see-source.svg' alt=''></a>
  </div>

  </div>
`;

  section.insertAdjacentHTML('afterbegin', modalHtml);
  overlay.classList.remove('hidden');

  const closeModalIcon = document.querySelector('.modal__exit');
  const modal = document.querySelector('.modal');

  closeModalIcon.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

function createCard() {
  const cardContainer = document.querySelector('.card-container');
  for (let ind = modalContent.length - 1; ind >= 0; ind -= 1) {
    const card = `          
    <li class='card'> 
    
    <div class='card__imgbox'>
      <img src='${modalContent[ind].modalImg}' alt='' class='card__img'>
    </div>
    
    <div class='card__details'>
      <h3 class='card__text'>${modalContent[ind].modalName}</h3>
    
      <ul class='card__list'>
        <li>${modalContent[ind].technologies[0]}</li>
        <li>${modalContent[ind].technologies[1]}</li>
        <li>${modalContent[ind].technologies[2]}</li>
      </ul>
    
      <button type='button' class='btn btn--green'>See Project</button>
    </div>
    
    </li>`;

    cardContainer.insertAdjacentHTML('afterbegin', card);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createCard();

  document.querySelectorAll('.work .btn').forEach((btn, ind) => { 
    btn.addEventListener('click', () => {
      openModal(ind);
    });
  });
});
