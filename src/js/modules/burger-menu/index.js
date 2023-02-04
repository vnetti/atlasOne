// Мобильное меню бургер
export function burgerMenu () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuBtns = document.querySelector('.menu__btns');

    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            menuBtns.classList.add('menu__btns_active')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            menuBtns.classList.remove('menu__btns_active')
            
        }
    })

    // Скрываем элемент т.к. клик был за его пределами
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(menu)
        const withinBoundariesBurger = e.composedPath().includes(burger)
        const withinBoundariesBtns = e.composedPath().includes(menuBtns)
        if ( !withinBoundaries & !withinBoundariesBurger & !withinBoundariesBtns) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            menuBtns.classList.remove('menu__btns_active')
        }
    })
    
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            menuBtns.classList.remove('menu__btns_active')
        }
    })
}