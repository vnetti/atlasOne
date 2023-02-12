const linkWithSubmenu = document.querySelector('.menu__item_with-submenu');

// [data-line-effect]

const menuLinksWrappers = document.querySelectorAll('[data-line-effect]');


export const submenu = () => {

    const submenuBody = document.querySelector('.submenu');
    const submenuItems = Array.from(document.querySelectorAll('.submenu__item'));

    linkWithSubmenu.addEventListener('click', () => {

        linkWithSubmenu.classList.toggle('submenu_active');
        submenuBody.classList.toggle('submenu_active');

        menuLinksWrappers.length ? menuEffect() : null;

        if (window.innerWidth > 992) {

            if (submenuBody.classList.contains('submenu_active')) {

                for (let submenuItem of submenuItems) {
    
                    let percentTransform = submenuItems.indexOf(submenuItem) 
                    submenuItem.style.transform = `translateY(${percentTransform}00%)`;
                }
            } else {
                submenuItems.forEach(submenuItem => {
                    submenuItem.style.transform = `translateY(0%)`;
                });
            };
        }
    });


    // Скрываем сабменю т.к. клик был за его пределами

    document.addEventListener('click', (e) => {
        
        const withInBoundariesLinkWithSubmenu = e.composedPath().includes(linkWithSubmenu);
        const withInBoundariesSubmenuBody = e.composedPath().includes(submenuBody);

        if ( !withInBoundariesLinkWithSubmenu) {

            if (!withInBoundariesSubmenuBody) {
                linkWithSubmenu.classList.remove('submenu_active');
                submenuBody.classList.remove('submenu_active');
    
                submenuItems.forEach(submenuItem => {
                    submenuItem.style.transform = `translateY(0%)`;
                });
            }
        };
    })
};


// Эффект при наведении

function menuEffect() {
    
    const html = document.querySelector('html')

    if (!html.classList.contains('Touch')) {

        if (linkWithSubmenu.classList.contains('submenu_active')) {

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
        } else {
    
            const hovers = document.querySelectorAll('.submenu__item-link span');
    
            hovers.forEach(hover => {
                hover.remove();
            });
            return;
        };
    };
};



