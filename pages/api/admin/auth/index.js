import Connect from '../../../../config/db';
import { sign } from 'jsonwebtoken';

export default async function handler(req, res) {
    const { method } = req;
    switch(method) {
        case "POST":
            const { email, password } = req.body;
            try {
                if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
                    const payload = { admin: { email } };
                    const token = sign(payload, process.env.JWT_SECRET);
                    res.status(200).json({ token });    
                } else {
                    res.json("Invalid Credentials");
                }
            } 
            catch (error) {
                res.status(500).json(error);
            }
    }
}