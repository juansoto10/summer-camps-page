// Containers
const experienceSection = document.querySelector('#experience-section');
const experienceComments = document.querySelector('#experience-comments');
// Query parameter
const params = new URLSearchParams(window.location.search);
const selectedExperience = params.get('id');


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
