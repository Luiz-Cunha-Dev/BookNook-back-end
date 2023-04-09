import prisma from "../database/db";

export async function getUserById(id: number) {
    const result = await prisma.users.findUnique({
        where:{id}
    })
    return result;
}

export async function updateUser(id: number, username: string, email: string, pictureUrl?: string) {
    const result = await prisma.users.update({
        where:{id},
        data:{username, email, pictureUrl}
    })
    return result;
}

export async function updateDarkMode(id: number, darkMode: boolean) {
    const result = await prisma.users.update({
        where:{id},
        data:{darkMode}
    })
    return result;
}

const userRepository = {
    getUserById,
    updateUser,
    updateDarkMode
}

export default userRepository;