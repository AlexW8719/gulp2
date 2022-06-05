// підключення основного модулю GULP
import gulp from "gulp";
// підключення шляхів PATH
import { path } from "./gulp/config/path.js";
// підключення загальних плагінів
import { plugins } from "./gulp/config/plugins.js";

// передача значення в глобальну зміну
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
};


// імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { img } from "./gulp/tasks/img.js";
import { server } from "./gulp/tasks/server.js";

// Start: function watcher(){}
function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
}
// End: function watcher(){}

//start: Сценарії виконання задач

// сценарій виконання задач mainTasks
const mainTasks = gulp.parallel(copy, html, scss, img)

// сценарій виконання задач dev
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Виконуємо сценарій по замовчуванню
gulp.task(`default`, dev);
//end: Сценарії виконання задач

