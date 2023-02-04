"use strict"

// Раскрывающееся подменю
export const submenu = () => {

    const hero = document.querySelector('.hero');
    const submenuBody = document.querySelector('.submenu');
    const linkWithSubmenu = document.querySelector('.menu__item_with-submenu')
    const menuItems = document.querySelectorAll ('.menu__item')

    linkWithSubmenu.addEventListener('click', () => {
        if (!submenuBody.classList.contains('active')) {
            submenuBody.classList.add('active')
            linkWithSubmenu.classList.add('active')
            menuItems.forEach(menuItem =>{
                menuItem.classList.add('active-submenu')
            })
        } else {
            submenuBody.classList.remove('active')
            linkWithSubmenu.classList.remove('active')
            menuItems.forEach(menuItem =>{
                menuItem.classList.remove('active-submenu')
            })
        }
    })

    // Скрываем элемент т.к. клик был за его пределами
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(linkWithSubmenu)
        if ( ! withinBoundaries ) {
            submenuBody.classList.remove('active')
            linkWithSubmenu.classList.remove('active')
            menuItems.forEach(menuItem =>{
                menuItem.classList.remove('active-submenu')
            })  
        }
    })
}



// [data-line-effect]
export const menuLinksWrappers = document.querySelectorAll('[data-line-effect]');

// Эффект при наведении
export function menuEffect() {
    menuLinksWrappers.forEach(menuLinksWrapper => {
        const menuLinks = menuLinksWrapper.querySelectorAll('.submenu__item-link');
        const effectSpeed = menuLinksWrapper.dataset.lineEffect ? menuLinksWrapper.dataset.lineEffect : 200;
        menuLinks.length ? menuEffectItem(menuLinks, effectSpeed) : null;
    });
    function menuEffectItem(menuLinks, effectSpeed) {
        const effectTransition = `transition: transform ${effectSpeed}ms ease;`;
        const effectHover = `transform: translate3d(0, 0, 0);`;
        const effectTop = `transform: translate3d(0, -100%, 0);`;
        const effectBottom = `transform: translate3d(0, 100%, 0);`;

        menuLinks.forEach(menuLink => {
            menuLink.insertAdjacentHTML('beforeend',`
            <span style="transform: translate3d(0, 100%, 0);" class="hover">
                <span style="transform: translate3d(0, -100%, 0);" class="hover__text">${menuLink.textContent}</span>
            </span>
            `);
            menuLink.onmouseenter = menuLink.onmouseleave = menuLinkActions;
        });

        function menuLinkActions(e) {
            const menuLink = e.target;
            const menuLinkItem = menuLink.querySelector('.hover');
            const menuLinkText = menuLink.querySelector('.hover__text');

            const menuLinkHeight = menuLink.offsetHeight / 2;
            const menuLinkPos = e.pageY - (menuLink.getBoundingClientRect().top + scrollY);
            if (e.type === 'mouseenter') {
                menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom : effectTop;
                menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop : effectBottom;

                setTimeout(() => {
                    menuLinkItem.style.cssText = effectHover + effectTransition;
                    menuLinkText.style.cssText = effectHover + effectTransition;
                }, 5);
            }
            if (e.type === 'mouseleave') {
                menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom + effectTransition : effectTop + effectTransition;
                menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop + effectTransition : effectBottom + effectTransition;
            }
        }
    }
}



