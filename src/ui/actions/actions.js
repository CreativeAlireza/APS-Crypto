const menuBars = document.querySelector('.menu-bars');
const menu = document.querySelector('.menu');
const closeNavPanel = document.querySelector('.close-nav-panel');
const body = document.querySelector('body');

export function NavPanelActions(){

    closeNavPanel.addEventListener('click', () => {
        console.log("close");
        menu.classList.remove('fadein')
        menu.classList.add('fadeout');
    })
    menuBars.addEventListener('click', () => {
        console.log("open");
        menu.classList.remove('d-none', 'fadeout')
        menu.classList.add('fadein');
    })
}