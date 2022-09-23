import { PrismaClient } from '@prisma/client'
import { parseBody } from '../../../lib/parseBody';

export default async function handler(req, res) {
    const { id, title, content } = parseBody(req.body)
    // return res.send(parseBody(req.body))
    const prisma = new PrismaClient()
    
    // By unique identifier
    const update = await prisma.about.update({
        where: {
            id: id
        },
        data: {
            title: title,
            content: content,
        }
    });
    return res.send({ status: 'success' });
}