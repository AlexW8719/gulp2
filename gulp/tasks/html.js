// import plagins
import pug from "gulp-pug"
import webpHtmlNosvg from "gulp-webp-html-nosvg" //для роботи з картинками 
import versionNumber from "gulp-version-number" // щоб робота не кешувалася


// створюємо ф-кцію для копіювання htmll
export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(pug({
			//зжимаємо html файл
			pretty: true,
			// показуємо в терміналі який файл обробл
			verbos: true
		}))
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		// .pipe(webpHtmlNosvg())
		.pipe(
			versionNumber({
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js',
					]
				},
				'output': {
					'file': 'gulp/version.json'
				}
			})
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream())
}