import express from "express";
import cors from 'cors';
import AuthServices from './services/authServices.js'
import ProfileServices from "./services/profileServices.js";

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
	console.log(`Listening on port ${port} :D\n`);
});

app.post('/login', async (req, res) => {
	console.log("\n------------------------\n");
	console.log("Trying to log in with these credentials:");
	console.log(req.body);
	try {
		let r = await AuthServices.login(req.body);
		console.log(r ? 'Logged in!' : 'Wrong pass or user!');
		if (r) {
			res.status(200).json({ message: 'Logueado!', data: r });
		} else {
			res.status(403).json({ message: 'Credenciales incorrectas!' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Server error! Sorry! :/' });
	}
});

app.post('/register', async (req, res) => {
	console.log("\n------------------------\n");
	console.log("Trying to register with these credentials:");
	console.log(req.body);
	try {
		let r = await AuthServices.register(req.body);
		console.log(r ? 'Registered!' : 'Username already taken!')
		if (r) {
			res.status(200).json({ message: 'Registrado!' });
		} else {
			res.status(400).json({ message: 'Ese nombre de usuario ya esta ocupado!' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Server error! Sorry! :/' });
	}
});

app.put('/changeProfile', async (req, res) => {
	console.log("\n------------------------\n");
	console.log("Trying to modify profile with this data:");
	console.log(req.body);
	try {
		let r = await ProfileServices.editProfile(req.body);
		console.log(r ? 'Profile updated!' : 'Unable to edit profile.');
		if (r) {
			let x = await ProfileServices.getUser(req.body);
			res.status(200).json({ message: 'Hecho!', data: x });
		} else {
			res.status(400).json({ message: 'No se pudo editar el perfil.' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Server error! Sorry! :/' });
	}
});

app.get('/getUserInfo', async (req, res) => {
	console.log("\n------------------------\n");
	console.log("Gettin info from this user:");
	console.log(req.body);
	try {
		let r = await ProfileServices.getUser(req.body);
		console.log(r ? 'Info sent!' : 'Unable to send info.');
		if (r) {
			res.status(200).json({ message: 'Hecho!', data: r });
		} else {
			res.status(400).json({ message: 'No se pudo obtener la informacion del usuario.' });
		}
	} catch(e) {
		console.log(e);
		res.status(500).json({ error: 'Server error! Sorry! :/' });
	}
});