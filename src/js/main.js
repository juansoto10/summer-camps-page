// Menu
const menuIcon = document.querySelector('#menu');
const menuItems = document.querySelector('#menu-items');
// Experiences
const cardsSection = document.querySelector('#cards-section');
const homeCardsSection = document.querySelector('#home-cards-section');
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
  let list = document.querySelector('ul');

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


// Call the toggleScroll function when the opacity of the ul element changes
/* menuItems.addEventListener('transitionend', toggleScroll); */


// Experiences
function renderCards(data, container) {
  const toRender = [];

  data.forEach(experience => {
    const a = document.createElement('a');
    a.classList.add('mb-10', 'transition', 'ease-in-out', 'duration-300', 'hover:scale-[1.03]')
    //href
    const url = new URL('/experience/', window.location.href);
    url.searchParams.set('name', experience.name.toLowerCase());
    a.href = url.toString();

    const article = document.createElement('article');
    article.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'rounded-xl', 'shadow-md', 'max-w-[380px]', 'dark:bg-dark-sec');

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.classList.add('w-full', 'rounded-t-xl', 'h-[230px]', 'sm:h-[220px]', 'md:h-[230px]', '2xl:h-[220px]');
    img.src = experience.thumbnail;
    img.alt = `Experience of ${experience.name}`;

    const secDiv = document.createElement('div');
    secDiv.classList.add('px-4', 'pt-3');

    const h3 = document.createElement('h3');
    h3.classList.add('font-bold', 'text-lg', 'mb-2', 'text-orange-400');
    h3Text = document.createTextNode(`${experience.name}, ${experience.age}`);
    h3.append(h3Text);

    p = document.createElement('p');
    p.classList.add('mb-2', '2xl:h-[168px]');
    // Short text
    const shortText = experience.text.substr(0, 220) + '...';
    pText = document.createTextNode(shortText);
    p.append(pText);

    span = document.createElement('span');
    span.classList.add('block', 'text-orange-500', 'text-sm', 'text-right', 'mb-1', 'font-light');
    spanText = document.createTextNode('Click to read');
    span.append(spanText);

    secDiv.append(h3, p, span);

    div.append(img, secDiv);

    article.append(div);

    a.append(article);

    toRender.push(a);
  });

  container.append(...toRender);
}


// Home Experiences
const currentLocation = window.location.href;
const topExperiences = experiences.slice(0, 3);


switch (currentLocation) {
  case 'https://summer-camp-experiences.netlify.app/':
    renderCards(topExperiences, homeCardsSection);
    break;
  case 'https://summer-camp-experiences.netlify.app/experiences/':
    renderCards(experiences, cardsSection);
    break;
  case 'http://127.0.0.1:5500/':
    renderCards(topExperiences, homeCardsSection);
    break;
  case 'http://127.0.0.1:5500/experiences/':
    renderCards(experiences, cardsSection);
    break;
  default:
    console.log('Ikke noe spesielt');
}
