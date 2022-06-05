// Отримуємо ім'я папки нашого проекту
import * as nodePath from 'path'; // імпортуємо модуль 'path'
const rootFolder = nodePath.basename(nodePath.resolve()); // отримуємо ім'я папки проекту jspa2

const buildFolder = `./dist`; // шлях до папки з результатом
const srcFolder = `./src`; // шлях до папки з вхідними матеріалами

// створюємо об'єкт 'path' в якому буде зберігатися інформація про шлях до того чи іншого файлу або папки
export const path = {
	build: {
		img: `${buildFolder}/img/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files`
	}, // об'єкт шляхів до папок з результатами
	src: {
		scss: `${srcFolder}/css/*.scss`, //означає, що ми контролюємо файли з розширенням .scss в усьому src
		html: `${srcFolder}/*.pug`, //означає, що ми контролюємо файли з розширенням .html в усьому src
		files: `${srcFolder}/files/**/*.*`,
		img: `${srcFolder}/img/**/*.*`,
	}, // об'єкт шляху до вхідних файлів
	watch: {
		scss: `${srcFolder}/css/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
		img: `${srcFolder}/img/**/*.*`
	}, // тут будуть розміщенні шляхи до папок і файлів, за якими повинен слідкувати наш GULP і при будь-яких змінах виконувати певні дії
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `` // папка ftp де ми будемо вказувати папку на віддаленому ftp сервері
}