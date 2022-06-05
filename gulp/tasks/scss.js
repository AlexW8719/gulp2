// import plagins
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

// створюємо ф-кцію для копіювання scss
export const scss = () => {
	return app.gulp.src(app.path.src.scss)
		.pipe(sass({
			outputStyle:`expanded`,
		}))
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(rename({
			extname: ".css"
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}
