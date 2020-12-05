const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function handleCheckboxChange() {
  if (refs.body.className === '') {
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
  }

  const currentTheme = refs.body.getAttribute('class');

  localStorage.setItem('theme', currentTheme);
}

refs.checkbox.addEventListener('change', handleCheckboxChange);

function restoreTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    refs.body.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    refs.checkbox.setAttribute('checked', true);
  }
}

restoreTheme();

// function handleCheckboxChange(event) {
//   const body = event.currentTarget;
//   const currentTheme = body.className;

//   //   console.log('currentTheme: ', currentTheme);
//   //   console.log('body.className: ', body.className);

//   switch (currentTheme) {
//     case '':
//       body.className = Theme.DARK;
//       break;

//     case Theme.DARK:
//       body.className = Theme.LIGHT;
//       break;

//     case Theme.LIGHT:
//       body.className = Theme.DARK;
//       break;

//     default:
//   }

//   //   console.log('currentTheme: ', currentTheme);
//   //   console.log('body.className: ', body.className);

//   localStorage.setItem('theme', body.className);
// }

// refs.body.addEventListener('change', handleCheckboxChange);

// const savedTheme = localStorage.getItem('theme');

// if (savedTheme) {
//   refs.body.classList.add(savedTheme);
// }
