// Видаляємо файли з dist, які видаляються з src
import del from "del"; // імпорт плагіну del
export const reset = () => {
	return del(app.path.clean);
}