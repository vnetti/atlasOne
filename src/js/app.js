// Импорты
import * as flsFunctions from "./modules/webp/index.js";
import { isTouch } from "./modules/isMobile/index.js";
import { burgerMenu } from "./modules/burger-menu/index.js";
import { submenu } from "./modules/submenu/index.js";
import { offersSwiper, teamSwiper } from "./modules/swiper/index.js";

// Проверка поддержки webp у браузера
flsFunctions.isWebp();

// Провека на мобилку
isTouch();

// Бургер меню
burgerMenu();

// Выпадающее сабменю
submenu();

// swiper for offers
offersSwiper();

// swiper for team
teamSwiper();