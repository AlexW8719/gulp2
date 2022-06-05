// import плагінів
import replace from "gulp-replace" // пошук і заміна
import plumber from "gulp-plumber" // робота з помилками
import notify from "gulp-notify" // робота з повідомленнями (підказками)
import browsersync from "browser-sync" // додаю локальний сервер

// create: obj plugins
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
}