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
        console.log(r ? 'Logged in!' : 'Wrong pass or user!');
        if(r) {
            res.status(200).json({message: 'Login executed! Successful'});    
        } else {
            res.status(403).json({message: 'Wrong credentials!'});    
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error:  'Server error! Sorry! :/'});
    }
})

app.post('/register', async (req, res) => {
    console.log("\n------------------------\n");
    console.log("Trying to register with these credentials:");
    console.log(req.body);
    try {
        let r = await AuthServices.register(req.body);
        console.log(r ? 'Registered!' : 'Username already taken!')
        res.status(200).json(r ? {message: 'Registered!'} : {message: 'Username already taken!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:  'Register failed!'});
    }
})