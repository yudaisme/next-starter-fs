import { PrismaClient } from '@prisma/client'
import { withIronSessionApiRoute } from "iron-session/next";
import { parseBody } from '../../lib/parseBody';
import { sessionCookie } from '../../lib/session';
import bcrypt from 'bcrypt';

export default withIronSessionApiRoute(
    async function loginRoute(req, res) {
        const { email, password } = parseBody(req.body)
        // return res.send(parseBody(req.body))
        const prisma = new PrismaClient()

        // By unique identifier
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
        })

        if (!user) {
            return res.send({status: "error", message: "User not found"})
        }

        const passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        )

        if (!passwordIsValid) {
            return res.status(401).send({
                status: "error",
                message: "Invalid Password!"
            })
        }

        // get user from database then:
        user.password = undefined
        req.session.user = user
        await req.session.save();

        return res.send({ status: 'success', data: user });
    },
    sessionCookie
);