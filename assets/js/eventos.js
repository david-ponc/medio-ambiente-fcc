const images = document.querySelectorAll('.event-content-gallery img');
const container = document.querySelector('.fullscreen-back');
const buttonExit = document.querySelector('.fullscreen-exit');

const handleImageFullView = (e) => {
  document.body.style.overflowY = 'hidden';
  const component = `<img class="fullscreen-image" src="${e.target.src}" />`;
  const css = `
  background-image: url(${e.target.src});
  background-color: var(--gray-color-8);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: soft-light;
`;
  container.parentElement.style.display = 'flex';
  container.style.cssText = css;
  container.insertAdjacentHTML('afterend', component);
};

const handleExitImageFullView = () => {
  document.body.style.overflowY = 'auto';
  container.parentElement.style.display = 'none';
  container.parentNode.removeChild(document.querySelector('.fullscreen-image'));
};

images.forEach((image) => {
  image.addEventListener('click', handleImageFullView);
});

container.addEventListener('click', handleExitImageFullView);

buttonExit.addEventListener('click', handleExitImageFullView);
