const textFooter = document.querySelector('#text-footer');
const buttonDropdown = document.querySelector('#button-dropdown');
let showDropdown = false;

textFooter.textContent += new Date().getFullYear();

const dropdown = `
      <div class="dropdown">
        <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/index.html" class="dropdown-item">
          <div class="dropdown-icon">
            <img src="/medio-ambiente-fcc/assets/images/home.svg" alt="inicio" />
          </div>
          <span>Inicio</span>
        </a>
        <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/about-us.html" class="dropdown-item">
          <div class="dropdown-icon">
            <img src="/medio-ambiente-fcc/assets/images/about.svg" alt="Acerca de nostros" />
          </div>
          <span>Acerca de nostros</span>
        </a>
        <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/articles.html" class="dropdown-item">
          <div class="dropdown-icon">
            <img src="/medio-ambiente-fcc/assets/images/articles.svg" alt="Artículos" />
          </div>
          <span>Artículos</span>
        </a>
        <a href="/medio-ambiente-fcc/suma-fcc" class="dropdown-item dropdown-item--active">
          <div class="dropdown-icon">
            <img src="/medio-ambiente-fcc/assets/images/events.svg" alt="SuMA" />
          </div>
          <span>SuMA</span>
        </a>
        <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/sitemap.html" class="dropdown-item">
          <div class="dropdown-icon">
            <img src="/medio-ambiente-fcc/assets/images/gallery.svg" alt="Galeria" />
          </div>
          <span>Galeria</span>
        </a>
        <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/sitemap.html" class="dropdown-item">
          <div class="dropdown-icon">
            <img src="/medio-ambiente-fcc/assets/images/map.svg" alt="Mapa del sitio" />
          </div>
          <span>Mapa del sitio</span>
        </a>
      </div>
`;

buttonDropdown.addEventListener('click', () => {
  showDropdown = !showDropdown;
  showDropdown
    ? buttonDropdown.insertAdjacentHTML('afterend', dropdown)
    : buttonDropdown.parentNode.removeChild(document.querySelector('.dropdown'));
});
