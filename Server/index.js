import express from "express";
import cors from 'cors';
import AuthServices from './services/authServices.js'

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port} :D\n`);
})

app.post('/login', async (req, res) => {
    console.log("\n------------------------\n");
    console.log("Trying to log in with these credentials:");
    console.log(req.body);
    try {
        let r = await AuthServices.login(req.body);
        console.log(r ? 'Logged in!' : 'Wrong pass or user!')
        r ? res.status(200).json({message: 'Login executed! Successful'}) : res.status(401).json({message: 'Wrong username or password'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:  'Login failed! :('});
    }
})

app.post('/register', async (req, res) => {
    console.log("\n------------------------\n");
    console.log("Trying to register with these credentials:");
    console.log(req.body);
    try {
        let r = await AuthServices.register(req.body);
        console.log(r ? 'Registered!' : 'Username already taken!')
        r ? res.status(200).json({message: 'Account registered successfully!'}) : res.status(204).json({message: 'Username already taken!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:  'Register failed!'});
    }
})