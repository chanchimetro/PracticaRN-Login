import config from '../dbconfig.js';
import sql from 'mssql';

export default class authServices {
    static login = async(input) => {
        let r = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pUser', sql.VarChar, input.user)
                .input('pPass', sql.VarChar, input.pass)
                .query('SELECT * FROM Users WHERE pPass == Users.password AND pUser == Users.username');
            returnEntity = result.recordsets[0][0];
        }catch(error) {
            console.log(error);
        }
        return r;
    }
}