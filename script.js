const navWrapperHamburger = document.querySelector(".navigation__hamburger");
const navWrapperListMobile = document.querySelector('.navigation__list--mobile');
const mainWrapperLogo = document.querySelector(".main__logo");
const navigation = document.querySelector('.navigation');
const socialIcon = document.querySelectorAll('.social-wrapper__icon img');

const rotateObject = (element) => {
  element.classList.toggle('rotate');
};

const toggleMenuIcon = () => {
  if (navWrapperHamburger.src.includes('assets/hamburger_menu.svg')) {
    navWrapperHamburger.src = 'assets/iks.svg';
    navWrapperHamburger.src.alt = 'Close button X';
} else {
    navWrapperHamburger.src = 'assets/hamburger_menu.svg';
    navWrapperHamburger.src.alt = 'Hamburger menu';
}
};

const toggleWidth = (elements) => {
  for (var i = 0; i < elements.length; i++) {
    let currentWidth = elements[i].style.width;
    if (!currentWidth) {
      elements[i].style.width = '30%';
    } else {
      elements[i].style.width = ''; 
    }
  }
}

const toggleMenuListMobile = () => {
  navWrapperListMobile.classList.toggle('visible');
  navigation.classList.toggle('navigation--color');
};

mainWrapperLogo.addEventListener('click', () => {
  rotateObject(mainWrapperLogo);
});

navWrapperHamburger.addEventListener('click', () => {
  toggleMenuIcon();
  toggleMenuListMobile();
  toggleWidth(socialIcon);
});




