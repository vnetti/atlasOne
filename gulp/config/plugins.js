import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browserSync from "browser-sync"; // Локальный сервер 
import newer from "gulp-newer"; // Проверка обновления
import gulpIf from "gulp-if"; // Условное ветвление


// Экспортируем объект
export const plugins = {
    replace: replace,
    notify: notify,
    plumber: plumber,
    browserSync: browserSync,
    newer: newer,
    gulpIf: gulpIf,

}