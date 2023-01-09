const menuBars = document.querySelector('.menu-bars');
const menu = document.querySelector('.menu');
const closeNavPanel = document.querySelector('.close-nav-panel');
const navList = document.querySelector('.nav-list');
const main = document.querySelector('main');

export function NavPanelActions(){
    function closePanel(){
        menu.classList.remove('fadein')
        menu.classList.add('fadeout');
    }
    function openPanel(){
        menu.classList.remove('d-none', 'fadeout')
        menu.classList.add('fadein');
    }

    main.addEventListener('click', () => closePanel());
    navList.addEventListener('click', () => closePanel());
    closeNavPanel.addEventListener('click', () => closePanel());
    menuBars.addEventListener('click', () => openPanel());
}