import prisma from "../database/db";

async function getUserByEmail(email: string) {
    const result = await prisma.users.findUnique({ where: { email } })
    return result;
}

async function createNewUser(username: string, email: string, password: string) {
    const result = await prisma.users.create({
        data: { username: username, email: email, password: password, darkMode: false }
    })
    return result;
}

async function getSessionById(id: number) {
    const result = await prisma.sessions.findUnique({ where: { id } })
    return result;
}

async function createNewSession(userId: number, token: string) {
    const result = await prisma.sessions.create({
        data: { userId, token }
    })
    return result;
}

async function getSessionByToken(token: string) {
    const result = await prisma.sessions.findUnique({ where: { token } })
    return result;
}

async function deleteSessionById(userId: number) {
    const result = await prisma.sessions.deleteMany({
        where: { userId }
    })
    return result;
}

const authRepository = {
    getUserByEmail,
    createNewUser,
    getSessionById,
    createNewSession,
    getSessionByToken,
    deleteSessionById
}

export default authRepository;