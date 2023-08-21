import express from "express";
import cors from 'cors';
import AuthServices from './services/authServices.js'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port} :D`);
})

app.post('/login', async (req, res) => {
    try {
        let r = await AuthServices.login(req.body)
        r ? console.log('OK') : console.log('NOPE');
        res.status(200).json({message: 'Login executed!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:  'Authentication failed!'});
    }
})