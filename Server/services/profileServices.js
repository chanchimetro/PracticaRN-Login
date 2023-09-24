import config from '../dbconfig.js';
import sql from 'mssql';

export default class profileServices {
	static getUser = async (input) => {
		let r = null;
		try {
			let pool = await sql.connect(config);
			let result = await pool.request()
				.input('pUser', sql.VarChar, input.username)
				.query('SELECT * FROM Users WHERE @pUser = Users.username');
			r = result.recordsets[0][0];
		} catch (error) {
			console.log(error);
		}
		return r;
	}

	static editProfile = async (input) => {
		let r = null;
		try {
			let pool = await sql.connect(config);
			r = await pool.request()
				.input('pUsername', sql.VarChar, input.username)
				.input('pName', sql.VarChar, input.name)
				.input('pSurname', sql.VarChar, input.surname)
				.input('pEmail', sql.VarChar, input.email)
				.query('UPDATE Users SET name = @pName, surname = @pSurname, email = @pEmail WHERE username = @pUsername')
		} catch (e) {
			console.log(e);
		}
		return r;
	}
}