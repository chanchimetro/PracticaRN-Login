import express from "express";
import cors from 'cors';
import AuthServices from './services/authServices.js'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port} :D\n`);
})

app.post('/login', async (req, res) => {
    console.log("Trying to log in with these credentials:");
    console.log(req.body);
    try {
        let r = await AuthServices.login(req.body);
        r ? console.log('Login successful!') : console.log('NOPE! wrong credentials!');
        res.status(200).json({message: 'Login executed!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:  'Login failed!'});
    }
    console.log("\n------------------------\n");
})