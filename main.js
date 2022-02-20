const mobileMenu = () => {
  const burgerMenu = document.querySelector('.burger');
  const exitMenu = document.querySelector('.exit-menu');

  const menuDisplay = document.querySelector('.nav-list');
  const links = document.querySelectorAll('.list-item');
  const welcomeLogo = document.querySelector('.logo');

  const openMenu = () => {
    menuDisplay.classList.add('menu-active');
    burgerMenu.classList.add('hidden');
    exitMenu.classList.remove('hidden');
    welcomeLogo.style.display = 'none';
  };

  const closeMenu = () => {
    menuDisplay.classList.remove('menu-active');
    burgerMenu.classList.remove('hidden');
    exitMenu.classList.add('hidden');
  };

  burgerMenu.addEventListener('click', openMenu);
  exitMenu.addEventListener('click', closeMenu);

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
};

mobileMenu();

const modalContent = [
  {
    modalImg: 'images/work-screenshots/imgs/taste-food.PNG',
    modalName: 'Taste Food',
    alt: 'project img',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'The Taste food web app is our JavaScript capstone project, Taste food is a web application based on an external food API TheMealDB, showing data about different types of foods.',
    links: [
      'https://bondok6.github.io/taste-food/',
      'https://github.com/Bondok6/taste-food/',
    ],
  },
  {
    modalImg: 'images/work-screenshots/expense-tracker.PNG',
    modalName: 'Expense Tracker App',
    alt: 'project img',
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
    alt: 'project img',
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
    alt: 'project img',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'Dice Game. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to hold. Go to Github to read more...',
    links: [
      'https://bondok6.github.io/Pig-Game/',
      'https://github.com/Bondok6/Pig-Game',
    ],
  },
  {
    modalImg: 'images/work-screenshots/imgs/math-magicians.PNG',
    modalName: 'Math Magicians',
    alt: 'project img',
    technologies: ['React.js', 'Html', 'Css'],
    description:
      'A website for all fans of mathematics. It is a React.js project that allows users to make simple calculations and read a random math-related quote.',
    links: [
      'https://bondok6.github.io/math-magicians/',
      'https://github.com/Bondok6/math-magicians',
    ],
  },
  {
    modalImg: 'images/work-screenshots/imgs/natrous.PNG',
    modalName: 'Natours',
    alt: 'project img',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'Pure CSS website to practice the latest Advanced CSS and SASS Features.',
    links: [
      'https://bondok6.github.io/Natours/',
      'https://github.com/Bondok6/Natours',
    ],
  },
];

function openModal(ind) {
  const section = document.querySelector('.work');
  const overlay = document.querySelector('.overlay');

  const modalHtml = `
  <div class='modal'>

  <button type='button' class='modal__exit'>
    &times;
  </button>

  <img src='${modalContent[ind].modalImg}' alt='${modalContent[ind].alt}' class='modal__img'>

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
      <img src='${modalContent[ind].modalImg}' alt='${modalContent[ind].alt}' class='card__img'>
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

// Form Validation
const form = document.getElementById('my-form');

function validation() {
  const status = document.getElementById('status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = form.email.value;
    if (emailValue.toLowerCase() !== emailValue) {
      status.classList.add('error');
      status.innerHTML = 'Oops! Your Email Should Be Lowercase';
    } else {
      form.submit();
    }
  });
}

validation();

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

if (storageAvailable('localStorage')) {
  const inputs = [form.fullName, form.email, form.message];
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      const dataObj = {
        fullName: form.fullName.value,
        email: form.email.value,
        message: form.message.value,
      };
      localStorage.setItem('data', JSON.stringify(dataObj));
    });
  });

  const getData = JSON.parse(localStorage.getItem('data'));

  form.fullName.value = getData.fullName;
  form.email.value = getData.email;
  form.message.value = getData.message;
}
