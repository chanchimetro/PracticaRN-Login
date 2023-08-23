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
    console.log("\n------------------------\n");
    console.log("Trying to log in with these credentials:");
    console.log(req.body);
    try {
        let r = await AuthServices.login(req.body);
        console.log(r ? 'Login executed! Successful' : 'Login executed! Wrong pass or user!')
        res.status(200).json(r ? {message: 'Login executed! Successful'} : {message: 'Login executed! Wrong pass or user!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:  'Login failed!'});
    }
})