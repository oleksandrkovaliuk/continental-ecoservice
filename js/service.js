const stateChageBtn = document.querySelectorAll('.change-state');
const firstSectionwrapLi = document.querySelectorAll('.first-sectionwrap li');
const firstWrapItems = document.querySelectorAll('.first-wrap');

const clearActiveClassFromLi = () => firstSectionwrapLi.forEach((li) => {
  li.classList.remove('active');
});
const clearActiveClassFromSection = () => firstWrapItems.forEach((li) => {
  li.classList.remove('active');
});

stateChageBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const sectionName = event.target.parentElement?.id?.slice(4);
    clearActiveClassFromLi();
    clearActiveClassFromSection();

    document.querySelector(`#${sectionName}`).classList.add('active');
    document.querySelector(`#li-${sectionName}`).classList.add('active');
  });
});