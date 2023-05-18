// Menu
const menuIcon = document.querySelector('#menu');
const menuItems = document.querySelector('#menu-items');
// Containers
const experienceSection = document.querySelector('#experience-section');
const experienceComments = document.querySelector('#experience-comments');
// Query parameter
const params = new URLSearchParams(window.location.search);
const selectedExperience = params.get('id');
// Dark mode
const darkModeButton = document.querySelector('#dark-mode');
const body = document.querySelector('body');
const isDarkModeActive = JSON.parse(localStorage.getItem('darkMode'));


// Dark mode
document.addEventListener('DOMContentLoaded', () => {
  isDarkModeActive ? body.classList.add('dark') : body.classList.remove('dark');
});


darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
})


// Menu
menuIcon.addEventListener('click', () => {
  menuIcon.name === 'menu-outline' ? (menuIcon.name = 'close-outline') : (menuIcon.name = 'menu-outline');
  menuItems.classList.toggle('hidden');
  menuItems.classList.toggle('block');

  toggleScroll()
})


function toggleScroll() {
  if (!menuItems.classList.contains('hidden')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}


// Experience
function getExperience(id, experiences) {
  for (let experience of experiences) {
    if (experience.id == id) {
      return experience;
    }
  }
}


function showExperience(id) {
  const experience = getExperience(id, experiences);

  const h3 = document.createElement('h3');
  h3.classList.add('font-bold', 'text-xl', 'sm:text-2xl', 'md:text-3xl', '2xl:text-4xl', 'mb-5', 'md:mb-10', 'text-orange-400');
  const h3Text = document.createTextNode(experience.name);
  h3.append(h3Text);

  const p = document.createElement('p');
  p.classList.add('mb-2');
  p.innerHTML = experience.text;

  experienceSection.append(h3, p);

  // Change Facebook comments url
  experienceComments.setAttribute('data-href', window.location.href);
}


showExperience(selectedExperience);
