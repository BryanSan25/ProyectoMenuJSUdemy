const barsMenu = document.querySelector('.fa-bars');
const menuInfo = document.querySelector('.container-info-menu');

barsMenu.addEventListener('click', () => {
    if(menuInfo.classList.contains('container-info-menu-activo')) {
        menuInfo.classList.remove('container-info-menu-activo');
    } else {
        menuInfo.classList.add('container-info-menu-activo');
    }
})