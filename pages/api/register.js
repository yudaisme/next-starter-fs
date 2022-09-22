import { PrismaClient } from '@prisma/client'
import { withIronSessionApiRoute } from "iron-session/next";
import { parseBody } from '../../lib/parseBody';
import { sessionCookie } from '../../lib/session';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    const { name, email, password } = parseBody(req.body)
    // return res.send(parseBody(req.body))
    const prisma = new PrismaClient()
    
    // By unique identifier
    const user = await prisma.user.findUnique({
        where: {
            email: email
        },
    });
    
    if (user) {
        return res.send({ status: 'error', message: "User already exists" });
    }
    
    const register = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 8)
        }
    })
    return res.send({ status: 'success' });
}