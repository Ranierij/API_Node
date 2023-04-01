// metodos: index, show, update, store, destroy
/*
	index (GET): listagem do elementos/entidades
	store (POST): criar um elemento - add
	show (GET): quando queremos listar um UNICO elemento
	update (PUT): quando queremos alterar algum elemento
	destroy (DELETE): quando queremos deletar um elemento
*/
import User from '../models/User';
import * as Yup from 'yup';

class SessionController {

	async store(req, res) {
		const { email } = req.body;
		let user = await User.findOne({ email });
		if (!user) {
			user = await User.create({ email });
		}
		return res.json(user);
	}
}

export default new SessionController();